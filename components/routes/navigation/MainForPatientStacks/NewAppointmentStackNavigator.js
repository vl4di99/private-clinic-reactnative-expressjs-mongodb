import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-material-dropdown-v2";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "../../../../api/Client";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Stack = createStackNavigator();

const NewAppointment = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [timeText, setTimeText] = useState("");
  const [dateText, setDateText] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [user, setUser] = useState("");
  var dropDownData = "";
  var departmentData = [];
  var doctorData = "";
  var doctorDropdown = [];

  const dropDownJSON = (object, outputobject) => {
    for (let i = 0; i < object.length; i++) {
      outputobject[i] = {};
      outputobject[i].value = object[i].department;
    }
    return outputobject;
  };

  const dropDownDoctorJSON = (object, outputobject) => {
    for (let i = 0; i < object.length; i++) {
      outputobject[i] = {};
      outputobject[i].value = object[i].fullname;
    }
    return outputobject;
  };

  useEffect(() => {
    Client.get("/getDepartmentDropdown")
      .then((response) => {
        dropDownData = response.data;
        dropDownJSON(dropDownData, departmentData);
      })
      .catch((err) => {
        console.log(err);
      });
    Client.post("/getDoctorsDropdown", { department: selectedDepartment })
      .then((response) => {
        doctorData = response.data;
        dropDownDoctorJSON(doctorData, doctorDropdown);
      })
      .catch((err) => {
        console.log(err);
      });
    const getUser = async () => {
      try {
        var profileElements = await AsyncStorage.getItem("LoginData");
        profileElements = JSON.parse(profileElements);
        setUser(profileElements.fullname);
      } catch (error) {
        console.log("Cannot get username in appointment ", error);
      }
    };
    getUser();
  }, [departmentData, doctorDropdown, user]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setDateText(fDate);
    setTimeText(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const setAppointmentNow = async () => {
    var patient = user;
    var doctor = selectedDoctor;
    var date = dateText;
    var time = timeText;
    var department = selectedDepartment;
    //Client.post('/createAppointment',{user,selectedDoctor,dateText,timeText,selectedDepartment})
    if (
      user !== "" &&
      selectedDoctor !== "" &&
      dateText !== "" &&
      timeText !== "" &&
      selectedDepartment !== ""
    ) {
      await Client.post("/createAppointment", {
        patient,
        doctor,
        date,
        time,
        department,
      })
        .then((response) => {
          Alert.alert(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Alert.alert("Invalid options selected!");
    }
  };

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.view}>
        <Text style={styles.title}>Schedule an appointment</Text>

        <View style={styles.view2}>
          <Text style={styles.subtitle}>Choose a department</Text>
          <Dropdown
            label="Departments"
            data={departmentData}
            onChangeText={(value) => {
              setSelectedDepartment(value);
            }}
          />
          <Text style={styles.subtitle}>Choose a doctor</Text>
          <Dropdown
            label="Doctors"
            data={doctorDropdown}
            onChangeText={(value) => {
              setSelectedDoctor(value);
            }}
          />
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
              {"\n\n"}Department: {selectedDepartment} {"\n"}Doctor:{" "}
              {selectedDoctor}
              {"\n"}Date: {dateText} {"\n"}Hour: {timeText} {"\n"}User: {user}
            </Text>
            <TouchableOpacity
              onPress={setAppointmentNow}
              style={styles.appointmentButton}
              activeOpacity={0.5}
            >
              <Text style={styles.appointmentButtonText}>Set Appointment</Text>
            </TouchableOpacity>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              minimumDate={new Date()}
              mode={mode}
              is24Hour={true}
              minuteInterval={30}
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
    marginBottom: HEIGHT / 5,
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
  appointmentButton: {
    backgroundColor: "#734F96",
    fontSize: WIDTH / 16,
    borderRadius: WIDTH / 8,
    borderColor: "#734AF1",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    padding: WIDTH / 100,
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
  },
  appointmentButtonText: {
    color: "#FFFFFF",
    paddingVertical: (HEIGHT * 1.2) / 100,
    fontSize: (HEIGHT * 2) / 100,
    textAlign: "center",
  },
});
