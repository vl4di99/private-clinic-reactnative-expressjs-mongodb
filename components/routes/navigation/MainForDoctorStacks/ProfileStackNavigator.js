import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
  Alert,
  TextInput,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "../../../../api/Client";
import BackgroundStack from "../../../theme/BackgroundStack";
import { AuthContext } from "../../../contexts/AuthProvider";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Stack = createStackNavigator();

const Profile = () => {
  const { setDoctorIsLoggedIn } = React.useContext(AuthContext);
  const [DoctorFullname, setDoctorFullname] = useState("");
  const [department, setDepartment] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [pass3, setPass3] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getLoginData = async () => {
      let nparsed = await AsyncStorage.getItem("DoctorLoginData");
      let parsed = await JSON.parse(nparsed);
      setDoctorFullname(parsed?.fullname);
      setDepartment(parsed?.department);
      setStartHour(parsed?.start_work_hour);
      setEndHour(parsed?.end_work_hour);
      setUsername(parsed?.username);
      setLoading(false);
    };
    getLoginData();
  }, []);

  const changePassword = async () => {
    if (pass2 !== pass3) {
      Alert.alert(
        "Check passwords",
        "New Password does not match with confirmed password"
      );
    } else {
      var password = pass1;
      var new_password = pass2;
      Client.post("/changePasswordDoctor", { username, password, new_password })
        .then((response) => {
          if (response.data.message) {
            Alert.alert("Error!", response.data.message);
          } else {
            Alert.alert("Saved!", response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const logout = async () => {
    await AsyncStorage.clear();
    await setDoctorIsLoggedIn(false);
  };

  return (
    <BackgroundStack>
      <ScrollView style={styles.scrollview}>
        {loading && (
          <View>
            <Text>Loading profile</Text>
          </View>
        )}
        {!loading && (
          <View style={styles.view}>
            <Text style={styles.title}>My profile</Text>
            <Text style={styles.subtitle}>Doctor: </Text>
            <Text style={styles.subtitle2}>{DoctorFullname}</Text>
            <Text style={styles.subtitle}>Department: </Text>
            <Text style={styles.subtitle2}>{department}</Text>
            <Text style={styles.subtitle}>Working hours: </Text>
            <Text style={styles.subtitle2}>
              {startHour}-{endHour}
            </Text>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.title}>Enter your password:</Text>
                  <Text style={styles.label}>Old password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPass1(text)}
                  />
                  <Text style={styles.label}>New password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPass2(text)}
                  />
                  <Text style={styles.label}>Confirm new password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPass3(text)}
                  />
                  <TouchableOpacity
                    onPress={changePassword}
                    style={styles.logoutButton}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.logoutButtonText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.logoutButton}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.logoutButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.logoutButton}
              activeOpacity={0.5}
            >
              <Text style={styles.logoutButtonText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={logout}
              style={styles.logoutButton}
              activeOpacity={0.5}
            >
              <Text style={styles.logoutButtonText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </BackgroundStack>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "#2f1a3b",
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: (HEIGHT * 3) / 100,
    width: (WIDTH * 40) / 100,
    height: (HEIGHT * 6) / 100,
    borderColor: "white",
    borderWidth: 3,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    paddingVertical: (HEIGHT * 1.2) / 100,
    fontSize: (HEIGHT * 2) / 100,
    textAlign: "center",
  },
  title: {
    marginTop: HEIGHT / 25,
    alignContent: "flex-start",
    fontSize: WIDTH / 15,
    color: "#158FAD",
    marginBottom: WIDTH / 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: WIDTH / 20,
    marginTop: HEIGHT / 200,
    color: "#281C22",
  },
  subtitle2: {
    textAlign: "center",
    fontSize: WIDTH / 19,
    marginBottom: HEIGHT / 30,
    color: "#B8255F",
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
    alignItems: "center",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: HEIGHT * 0.05,
    margin: 12,
    borderWidth: 1,
    width: WIDTH * 0.8,
    padding: 5,
  },
  label: {
    fontSize: WIDTH * 0.04,
  },
});
