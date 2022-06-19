import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "../../../../api/Client";
import BackgroundStack from "../../../theme/BackgroundStack";

const Stack = createStackNavigator();
const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const WritePatientHistory = () => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState(new Date());
  const [history, setHistory] = useState("");
  const [DoctorFullname, setDoctorFullname] = useState("");
  const [DoctorDepartment, setDoctorDepartment] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [timeText, setTimeText] = useState("");
  const [dateText, setDateText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLoginData = async () => {
      try {
        setLoading(true);
        let parsed = await AsyncStorage.getItem("DoctorLoginData");
        let nparsed = await JSON.parse(parsed);
        setDoctorFullname(nparsed.fullname);
        setDoctorDepartment(nparsed.department);
        setLoading(false);
      } catch (error) {
        console.log("Write Patient History error " + error);
      }
    };
    getLoginData();
  }, []);

  const saveHistory = async () => {
    var patient = patientName;
    var doctor = DoctorFullname;
    var department = DoctorDepartment;

    await Client.post("/medicalHistory", {
      patient,
      history,
      doctor,
      department,
      date,
    })
      .then((response) => {
        Alert.alert("Saved successfully", response.data.message);
      })
      .catch((error) => {
        Alert.alert(
          "Error",
          "An error occured. Please contact the administrator."
        );
        console.log("Error while saving medical History! " + error);
      });
  };

  return (
    <BackgroundStack>
      {loading && (
        <View>
          <Text>Loading doctor data...</Text>
        </View>
      )}
      {!loading && (
        <ScrollView style={styles.scrollview}>
          <View style={styles.aboutUs}>
            <View>
              <TextInput
                placeholder="Patient Name"
                style={styles.text_input}
                onChangeText={(event) => setPatientName(event)}
              />
              <TextInput
                placeholder="History"
                multiline={true}
                style={styles.textarea_input}
                NumberOfLines={15}
                onChangeText={(event) => setHistory(event)}
              />
              <TextInput
                placeholder="Doctor name"
                style={[
                  styles.text_input,
                  { justifyContent: "center", color: "black" },
                ]}
                value={DoctorFullname}
                editable={false}
                textAlign={"center"}
              />
              <TextInput
                placeholder="Doctor department"
                style={[
                  styles.text_input,
                  { justifyContent: "center", color: "black" },
                ]}
                value={DoctorDepartment}
                editable={false}
                textAlign={"center"}
              />

              <TouchableOpacity style={styles.saveButton} onPress={saveHistory}>
                <Text style={styles.saveButtonText}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </BackgroundStack>
  );
};

const WritePatientHistoryStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WritePatientHistory"
        component={WritePatientHistory}
      />
    </Stack.Navigator>
  );
};

export default WritePatientHistoryStackNavigator;
const styles = StyleSheet.create({
  aboutUs: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: WIDTH / 15,
    marginRight: WIDTH / 15,
    marginTop: HEIGHT / 20,
  },
  scrollview: {
    marginLeft: WIDTH / 35,
    marginRight: WIDTH / 35,
  },
  textContact: {
    textAlign: "left",
    fontSize: 19,
    color: "#618A3D",
    marginTop: HEIGHT / 24,
    marginBottom: HEIGHT / 24,
  },
  smallText: {
    textAlign: "left",
    fontSize: 18,
    color: "#093923",
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
  subtitle: {
    textAlign: "center",
    fontSize: WIDTH / 22,
    marginTop: HEIGHT / 200,
    color: "#800020",
  },
  subtitle2: {
    textAlign: "center",
    fontSize: WIDTH / 25,
    color: "green",
  },
  buttonDT: {
    color: "#734F96",
    fontSize: WIDTH / 16,
    borderRadius: WIDTH / 8,
    borderColor: "#734F96",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: WIDTH / 500,
    padding: WIDTH / 70,
    marginTop: HEIGHT / 70,
    marginLeft: WIDTH / 5,
    marginRight: WIDTH / 5,
    marginBottom: HEIGHT / 100,
  },
});
