import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-material-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Stack = createStackNavigator();

const NewAppointment = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [timeText, setTimeText] = useState("");
  const [dateText, setDateText] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "." +
      (tempDate.getMonth() + 1) +
      "." +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setDateText(fDate);
    setTimeText(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.view}>
        <Text style={styles.title}>Schedule an appointment</Text>

        <View style={styles.view2}>
          <Text style={styles.subtitle}>Choose a department</Text>
          <Dropdown label="Departments" /*data={data}*/ />
          <Text style={styles.subtitle}>Choose a doctor</Text>
          <Dropdown label="Doctors" /*data={data}*/ />
          <View>
            <Text style={styles.subtitle}>Choose a date</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => showMode("date")}
            >
              <Text style={styles.text}>Date</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.subtitle}>Choose an hour</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => showMode("time")}
            >
              <Text style={styles.text}>Hour</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.subtitle3}>
              You selected:
              {"\n\n"}Date: {dateText} {"\n"}Hour: {timeText}
            </Text>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const NewAppointmentStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NewAppointment" component={NewAppointment} />
    </Stack.Navigator>
  );
};

export default NewAppointmentStackNavigator;

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
    fontSize: WIDTH / 22,
    marginTop: HEIGHT / 200,
    color: "#800020",
  },
  subtitle2: {
    textAlign: "center",
    fontSize: WIDTH / 23,
    marginTop: HEIGHT / 30,
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
});
