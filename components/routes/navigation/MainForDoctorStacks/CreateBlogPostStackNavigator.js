import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import Client from "../../../../api/Client";
//import {Buffer} from "buffer";
import AWSAPI from "../../../../api/AWSApi";
//import * as buffer from "buffer";
import { RNS3 } from "react-native-aws3";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();
//const fs = require("react-native-fs");

const awsOptions = {
  keyPrefix: "",
  bucket: AWSAPI.awsKeys.AWS_BUCKET_NAME,
  region: "eu-central-1",
  accessKey: AWSAPI.awsKeys.AWS_ACCESS_KEY_ID,
  secretKey: AWSAPI.awsKeys.AWS_ACCESS_KEY_SECRET,
  successActionStatus: 201,
};

const CreateBlogPost = () => {
  const [titleText, setTitleText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [contentText, setContentText] = useState("");
  const [image, setImage] = useState(null);
  const [imageOK, setImageOK] = useState(false);

  const saveBlogPost = () => {
    if (imageOK) {
      const file = {
        uri: image,
        name: Date.now().toString() + ".jpeg",
        type: "image/jpeg",
      };

      const imgToS3 = async () => {
        try {
          const response = await RNS3.put(file, awsOptions);
          if (response.status !== 201) {
            throw new Error("Failed to upload image to S3");
            Alert.alert("Failed", "Image upload failed");
          } else {
            //setimgS3URL(response.body.postResponse.location);
            // Location of image in the AWS S3
            saveToMongo(response.body.postResponse.location);
          }
        } catch (error) {
          console.log("Error RNS3: " + error);
        }
      };
      imgToS3();

      const saveToMongo = (imgURL) => {
        var title = titleText;
        var author = authorText;
        var content = contentText;
        var img = imgURL;
        if (img !== "") {
          Client.post("/blog", { title, author, content, img })
            .then(() => {
              Alert.alert("Saved!", "Saved successfully");
            })
            .catch((error) => {
              console.log(error);
              Alert.alert("Failed!", "Please contact the developer!");
            });
        } else {
          Alert.alert(
            "Image",
            "Image uploaded, but failed to get link. Please contact administrator!"
          );
        }
      };
    } else {
      Alert.alert("Failed to save!", "Failed to save because of image error");
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.8,
    });

    const getFileInfo = async (fileURI) => {
      const fileInfo = await FileSystem.getInfoAsync(fileURI);
      return fileInfo;
    };
    const isLessThanTheMB = (fileSize, smallerThanSizeMB) => {
      const isOk = fileSize / 1024 / 1024 < smallerThanSizeMB;
      return isOk;
    };

    if (!result.cancelled) {
      const fileInfo = await getFileInfo(result.uri);
      const isLt10MB = isLessThanTheMB(fileInfo.size, 10);
      if (!isLt10MB) {
        Alert.alert("Image too big!", "Image size must be smaller than 10MB!");
        return;
      } else {
        setImage(result.uri);
        setImageOK(true);
      }
    }
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Title"
          style={styles.text_input}
          onChangeText={(event) => setTitleText(event)}
        />
        <TextInput
          placeholder="Author"
          style={styles.text_input}
          onChangeText={(event) => setAuthorText(event)}
        />
        <TextInput
          placeholder="Content"
          multiline={true}
          style={styles.textarea_input}
          NumberOfLines={15}
          onChangeText={(event) => setContentText(event)}
        />
        {image && <Image source={{ uri: image }} style={styles.imageSRC} />}
        <TouchableOpacity style={styles.pickImageButton} onPress={pickImage}>
          <Text style={styles.pickImageButtonText}>Pick an image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={saveBlogPost}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CreateBlogPostStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CreateBlogPostScreen" component={CreateBlogPost} />
    </Stack.Navigator>
  );
};

export default CreateBlogPostStackNavigator;

const styles = StyleSheet.create({
  text_input: {
    width: WIDTH * 0.8,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "turquoise",
    alignSelf: "center",
    margin: 10,
    padding: WIDTH * 0.02,
  },
  textarea_input: {
    width: WIDTH * 0.8,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "red",
    alignSelf: "center",
    height: HEIGHT * 0.3,
    textAlignVertical: "top",
    padding: WIDTH * 0.02,
  },
  saveButton: {
    height: HEIGHT * 0.05,
    width: WIDTH * 0.25,
    backgroundColor: "turquoise",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
    marginTop: 15,
  },
  saveButtonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  pickImageButton: {
    marginTop: 10,
    width: WIDTH * 0.5,
    height: HEIGHT * 0.05,
    backgroundColor: "orange",
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "dashed",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  pickImageButtonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageSRC: {
    width: WIDTH * 0.8,
    height: HEIGHT * 0.25,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 3,
  },
});
