import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Client from "../../../../api/Client";
import BackgroundStack from "../../../theme/BackgroundStack";
import ModalBackground from "../../../theme/ModalBackground";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();

const Blog = () => {
  const [data, setData] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState("");
  const displayModal = (show) => {
    setModalVisible(show);
  };

  const fetchPosts = useCallback(async () => {
    await Client.get("/blog")
      .then((response) => {
        setData(response.data);
        // console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("Can't fetch blog posts: " + error);
      });
  }, [data]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <BackgroundStack>
      <ScrollView style={styles.scrollview}>
        <View style={styles.view}>
          {data.map((see) => (
            <View style={styles.blogView} key={see._id}>
              <Text style={styles.blogTitle}>{see.title}</Text>

              <Image
                style={{
                  width: "100%",
                  height: HEIGHT / 3.3,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={{ uri: see.img }}
                resizeMode="stretch"
              />
              <TouchableOpacity
                style={styles.read}
                onPress={() => {
                  setModalData(see);
                  displayModal(true);
                }}
              >
                <Text>Read</Text>
              </TouchableOpacity>
              <Text style={styles.subtitle2}>Author: {see.author}</Text>
            </View>
          ))}
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={modalVisible}
          >
            <ModalBackground>
              <ScrollView>
                <Text style={styles.modalText}>{modalData.content}</Text>
                <Text
                  style={styles.closeModal}
                  onPress={() => {
                    displayModal(!modalVisible);
                  }}
                >
                  Close
                </Text>
              </ScrollView>
            </ModalBackground>
          </Modal>
        </View>
      </ScrollView>
    </BackgroundStack>
  );
};

const BlogStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Blog" component={Blog} />
    </Stack.Navigator>
  );
};

export default BlogStackNavigator;

const styles = StyleSheet.create({
  title: {
    marginTop: HEIGHT / 20,
    justifyContent: "flex-start",
    fontSize: WIDTH / 15,
    color: "#734F96",
    marginBottom: WIDTH / 12,
  },
  delete: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
    marginRight: WIDTH / 10,
    marginBottom: WIDTH / 30,
    //fontSize: "20",
  },
  read: {
    color: "#734F96",
    fontSize: WIDTH / 16,
    borderRadius: WIDTH / 8,
    borderColor: "#734F96",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: WIDTH / 500,
    padding: WIDTH / 100,
    marginTop: HEIGHT / 30,
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
    marginBottom: HEIGHT / 30,
  },
  edit: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
    marginRight: WIDTH / 10,
    //fontSize: "20",
  },
  subtitle: {
    textAlign: "left",
    marginLeft: WIDTH * 0.03,
    fontSize: WIDTH / 22,
    marginTop: HEIGHT / 200,
    color: "#800020",
  },
  subtitle2: {
    textAlign: "right",
    marginRight: WIDTH * 0.05,
    fontSize: WIDTH / 28,
    marginTop: HEIGHT * 0.005,
    color: "#800020",
  },
  subtitle3: {
    textAlign: "center",
    fontSize: WIDTH / 23,
    marginTop: HEIGHT / 30,
    color: "#800020",
    marginBottom: HEIGHT / 10,
  },
  view: {
    flex: 1,
    marginLeft: WIDTH / 15,
    marginRight: WIDTH / 15,
    marginBottom: HEIGHT / 15,
  },
  view2: {
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
  },
  scrollview: {
    marginLeft: WIDTH / 35,
    marginRight: WIDTH / 35,
  },
  button: {
    color: "#734F96",
    fontSize: WIDTH / 16,
    borderRadius: WIDTH / 8,
    borderColor: "#734F96",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: WIDTH / 500,
    padding: WIDTH / 100,
    marginTop: HEIGHT / 30,
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
    marginBottom: HEIGHT / 30,
  },
  text: {
    color: "#800020",
    fontSize: WIDTH / 23,
  },
  blogView: {
    borderColor: "#734F96",
    borderWidth: 5,
    borderRadius: 30,
    marginBottom: 20,
  },
  blogTitle: {
    //marginTop: HEIGHT / 2,
    textAlign: "center",
    alignItems: "center",
    fontSize: WIDTH / 15,
    color: "#734F96",
    //marginBottom: WIDTH / 12,
  },
  closeModal: {
    fontSize: HEIGHT * 0.04,
    color: "#00479e",
    textAlign: "center",
    padding: WIDTH * 0.03,
  },
  modalText: {
    fontSize: HEIGHT * 0.03,
    marginBottom: HEIGHT * 0.03,
    padding: HEIGHT * 0.04,
    textAlign: "justify",
  },
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
    width: WIDTH * 0.4,
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
});
