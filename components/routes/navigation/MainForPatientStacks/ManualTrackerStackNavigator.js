import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import InputSpinner from "react-native-input-spinner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "../../../../api/Client";
import BackgroundStack from "../../../theme/BackgroundStack";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();

const ManualTracker = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const isDoctor = false;

  const [systolic, setSystolic] = useState(null);
  const [diastolic, setDiastolic] = useState(null);
  const [hr, setHr] = useState(null);

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");

  const moodOptions = [
    { emoji: "🤢", description: "Sick" },
    { emoji: "😓", description: "Sad" },
    { emoji: "😑", description: "Neutral" },
    { emoji: "😊", description: "Happy" },
    { emoji: "🥰‍", description: "Lovely" },
  ];
  const [selectedMood, setSelectedMood] = useState(moodOptions);

  React.useEffect(() => {
    const getProfile = async () => {
      var profileElements = await AsyncStorage.getItem("LoginData");
      profileElements = JSON.parse(profileElements);
      setUsername(profileElements.username);
      setFullname(profileElements.fullname);
    };
    getProfile();
  }, []);

  const submitTracker = async () => {
    var mood = selectedMood.description;
    var sleep = checked;
    var water = checked2;
    var meditation = checked3;
    var medication = checked4;
    var exercise = checked5;
    var date = new Date();

    await Client.post("/tracker", {
      mood,
      sleep,
      water,
      meditation,
      medication,
      exercise,
      systolic,
      diastolic,
      hr,
      username,
      fullname,
      date,
      isDoctor,
    })
      .then((response) => {
        Alert.alert(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("Error in saving tracker: " + error);
        Alert.alert("Error", "An error occured while saving your information!");
      });
  };

  return (
    <BackgroundStack>
      <ScrollView style={styles.scrollview}>
        <View style={styles.view}>
          <View style={styles.moodOptionsWrapper}>
            <Text style={styles.moodOptionsTitle}>How are you feeling?</Text>
            <View style={styles.moodOptions}>
              {moodOptions.map((option) => (
                <View key={option.emoji}>
                  <Pressable
                    onPress={() => setSelectedMood(option)}
                    style={[
                      styles.moodItem,
                      selectedMood?.emoji === option.emoji
                        ? styles.selectedMoodItem
                        : undefined,
                    ]}
                  >
                    <Text
                      key={option.emoji + option.description}
                      style={styles.moodItemEmoji}
                    >
                      {option.emoji}
                    </Text>
                  </Pressable>
                  {option.emoji === selectedMood?.emoji && (
                    <Text style={styles.descriptionText}>
                      {option.description}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </View>

          <View style={styles.wrap}>
            <View style={styles.wrap2}>
              <Text style={styles.subtitle}>Health signs</Text>
              <View style={styles.view2}>
                <Text style={styles.subtitle2}>8 hours of sleep</Text>
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={"green"}
                  uncheckColor={"red"}
                />
              </View>
              <View style={styles.view2}>
                <Text style={styles.subtitle2}>2 L of water</Text>
                <Checkbox
                  status={checked2 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked2(!checked2);
                  }}
                  color={"green"}
                  uncheckColor={"red"}
                />
              </View>
              <View style={styles.view2}>
                <Text style={styles.subtitle2}>Meditation</Text>
                <Checkbox
                  status={checked3 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked3(!checked3);
                  }}
                  color={"green"}
                  uncheckColor={"red"}
                />
              </View>
              <View style={styles.view2}>
                <Text style={styles.subtitle2}>Medication</Text>
                <Checkbox
                  status={checked4 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked4(!checked4);
                  }}
                  color={"green"}
                  uncheckColor={"red"}
                />
              </View>
              <View style={styles.view2}>
                <Text style={styles.subtitle2}>30 minutes of exercise</Text>
                <Checkbox
                  status={checked5 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked5(!checked5);
                  }}
                  color={"green"}
                  uncheckColor={"red"}
                />
              </View>
              <View style={styles.view4}>
                <Text style={styles.subtitle2}>Blood pressure:</Text>
                <View style={styles.view4}>
                  <Text style={styles.subtitle3}>Systolic:</Text>
                  <InputSpinner
                    max={300}
                    min={50}
                    step={1}
                    colorMax={"#f04048"}
                    colorMin={"#40c5f4"}
                    value={50}
                    skin="clean"
                    height={HEIGHT / 25}
                    onChange={(value) => {
                      setSystolic(value);
                    }}
                  />
                </View>
                <View style={styles.view4}>
                  <Text style={styles.subtitle3}>Diastolic:</Text>
                  <InputSpinner
                    max={200}
                    min={20}
                    step={1}
                    colorMax={"#f04048"}
                    colorMin={"#40c5f4"}
                    value={50}
                    skin="clean"
                    height={HEIGHT / 25}
                    onChange={(value) => {
                      setDiastolic(value);
                    }}
                  />
                </View>
                <View style={styles.view4}>
                  <Text style={styles.subtitle3}>Heart rate:</Text>
                  <InputSpinner
                    max={250}
                    min={30}
                    step={1}
                    colorMax={"#f04048"}
                    colorMin={"#40c5f4"}
                    value={50}
                    skin="clean"
                    height={HEIGHT / 25}
                    onChange={(value) => {
                      setHr(value);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={submitTracker}>
            <Text style={styles.saveButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BackgroundStack>
  );
};

const ManualTrackerStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ManualTracker" component={ManualTracker} />
    </Stack.Navigator>
  );
};

export default ManualTrackerStackNavigator;

const styles = StyleSheet.create({
  title: {
    marginTop: HEIGHT / 20,
    textAlign: "center",
    justifyContent: "flex-start",
    fontSize: WIDTH / 15,
    color: "#734F96",
    marginBottom: WIDTH / 12,
  },
  subtitle: {
    textAlign: "center",
    fontSize: WIDTH / 17,
    marginTop: 10,
    marginBottom: HEIGHT / 100,
    color: "#454C73",
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: { width: 3, height: 5 },
    textShadowRadius: 10,
    fontWeight: "bold",
    paddingVertical: 15,
  },
  subtitle2: {
    textAlign: "left",
    fontSize: WIDTH / 19,

    color: "#454C73",
  },
  subtitle3: {
    textAlign: "left",
    fontSize: WIDTH / 19,
    //marginTop: HEIGHT / 30,
    color: "#454C73",

    marginRight: WIDTH / 30,
  },

  view: {
    flex: 1,
    marginLeft: WIDTH / 15,
    marginRight: WIDTH / 15,
    marginBottom: HEIGHT / 15,
    //alignItems: "center",
  },
  view2: {
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
    flexDirection: "row",
  },
  view3: {
    marginTop: WIDTH / 20,
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
    marginBottom: WIDTH / 20,
  },
  view4: {
    marginBottom: HEIGHT / 300,
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

  moodOptionsWrapper: {
    borderColor: "#454C73",
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
  },

  moodOptionsTitle: {
    color: "#454C73",
    fontSize: 23,
    fontWeight: "bold",
    paddingVertical: 15,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: { width: 3, height: 5 },
    textShadowRadius: 10,
  },

  moodOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },

  selectedMoodItem: {
    borderColor: "#fff",
    backgroundColor: "#454C73",
  },

  moodItemEmoji: {
    fontSize: 30,
  },

  descriptionText: {
    color: "#454C73",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
  },

  wrap: {
    borderColor: "#454C73",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 20,
  },
  wrap2: {
    marginBottom: 25,
  },
  saveButton: {
    backgroundColor: "#454C73",
    borderRadius: WIDTH / 5,
    width: WIDTH / 3,
    height: HEIGHT / 15,
    alignSelf: "center",
    marginTop: WIDTH / 30,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: WIDTH / 17,
    marginTop: WIDTH / 40,
  },
  NumberPlease: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
