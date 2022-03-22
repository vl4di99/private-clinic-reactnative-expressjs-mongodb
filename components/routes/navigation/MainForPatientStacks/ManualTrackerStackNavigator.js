import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import NumberPlease from "react-native-number-please";
import { Rating, AirbnbRating } from "react-native-ratings";
import { Alert } from "react-native-web";
import { Ionicons } from "react-native-vector-icons";
import EmojiPick from "../../../elements/EmojiPick";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();

const ManualTracker = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);

  const initialValues = [{ id: "systolic", value: 3 }];
  const [systolic, setSystolic] = useState(initialValues);
  const systolicNumbers = [{ id: "systolic", label: "?", min: 50, max: 300 }];

  const initialValues2 = [{ id: "diastolic", value: 3 }];
  const [diastolic, setDiastolic] = useState(initialValues);
  const diastolicNumbers = [{ id: "diastolic", label: "?", min: 20, max: 200 }];

  const initialValues3 = [{ id: "hr", value: 3 }];
  const [hr, setHr] = useState(initialValues);
  const hrNumbers = [{ id: "hr", label: "?", min: 20, max: 200 }];

  const moodOptions = [
    { emoji: "🧑‍💻", description: "studious" },
    { emoji: "🤔", description: "pensive" },
    { emoji: "😊", description: "happy" },
    { emoji: "🥳", description: "celebratory" },
    { emoji: "😤", description: "frustrated" },
  ];
  const [selectedMood, setSelectedMood] = useState(moodOptions);

  const ratingCompleted = (rating) => {
    Alert.alert(rating);
  };

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.view}>
        <View style={styles.moodOptionsWrapper}>
          <Text style={styles.moodOptionsTitle}>How are you right now?</Text>
          <View style={styles.moodOptions}>
            {moodOptions.map((option) => (
              <View>
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

          <Pressable style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Choose</Text>
          </Pressable>
        </View>

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
        <View style={styles.view3}>
          <Text style={styles.subtitle2}>Blood pressure:</Text>
          <View style={styles.view2}>
            <Text style={styles.subtitle2}>Systolic:</Text>
            <NumberPlease
              digits={systolicNumbers}
              values={systolic}
              onChange={(values) => setSystolic(values)}
            />
          </View>
          <View style={styles.view2}>
            <Text style={styles.subtitle2}>Diastolic:</Text>
            <NumberPlease
              digits={diastolicNumbers}
              values={diastolic}
              onChange={(values) => setDiastolic(values)}
            />
          </View>
        </View>
        <View style={styles.view2}>
          <Text style={styles.subtitle2}>Heart rate:</Text>
          <NumberPlease
            digits={hrNumbers}
            values={hr}
            onChange={(values) => setHr(values)}
          />
        </View>
      </View>
    </ScrollView>
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
    textAlign: "left",
    fontSize: WIDTH / 15,
    marginTop: HEIGHT / 30,
    marginBottom: HEIGHT / 30,
    color: "#800020",
  },
  subtitle2: {
    textAlign: "left",
    fontSize: WIDTH / 16,
    // marginTop: HEIGHT / 30,
    color: "#800020",
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
    borderRadius: 10,
    alignItems: "center",
  },

  moodOptionsTitle: {
    color: "#454C73",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 15,
  },

  moodOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
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

  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: "#454C73",
    borderRadius: 50,
    marginVertical: 15,
  },

  submitButtonText: {
    color: "#fff",
  },
});
