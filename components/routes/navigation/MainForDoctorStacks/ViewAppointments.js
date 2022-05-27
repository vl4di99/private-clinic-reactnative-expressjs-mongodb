import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "../../../../api/Client";
import BackgroundStack from "../../../theme/BackgroundStack";
import { getFreeDiskStorageAsync } from "expo-file-system";
import Moment from "moment";

const Stack = createStackNavigator();

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const ViewAppointments = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAP() {
      setLoading(true);
      try {
        let datetime = Moment().format("YYYY-MM-DD");
        let parsed = await AsyncStorage.getItem("DoctorLoginData");
        let jsonparsed = await JSON.parse(parsed);
        let doctorname = jsonparsed?.fullname;
        let departmentname = jsonparsed?.department;
        await Client.post("/getAppointmentForDoctor", {
          doctor: doctorname,
          department: departmentname,
          date: datetime,
        }).then((response) => {
          setData(response.data);

          //console.log("Data set");
          //console.log(data);
          setLoading(false);
        });
      } catch (error) {
        console.log("Can't fetch appointments " + error);
      }
      return data;
    }
    fetchAP();
  }, []);

  return (
    <BackgroundStack>
      {loading && <Text>Loading appointments...</Text>}
      {!loading && (
        <ScrollView style={styles.scrollview}>
          <View style={styles.view}>
            {data.map((see) => (
              <View style={styles.view2} key={see.id}>
                <Text style={styles.service}>{see.patient}</Text>
                <Text style={styles.department}>{see?.department}</Text>
                <Text style={styles.price}>
                  {Moment(see?.date).format("DD-MM-YYYY")}-{see?.time}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </BackgroundStack>
  );
};

const ViewAppointmentsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ViewAppointments" component={ViewAppointments} />
    </Stack.Navigator>
  );
};

export default ViewAppointmentsStackNavigator;

const styles = StyleSheet.create({
  title: {
    marginTop: HEIGHT / 20,
    textAlign: "center",
    justifyContent: "flex-start",
    fontSize: WIDTH / 15,
    color: "#734F96",
    marginBottom: WIDTH / 12,
  },
  service: {
    textAlign: "justify",
    fontSize: WIDTH / 20,
    marginTop: HEIGHT / 200,
    color: "#903B1C",
    fontWeight: "bold",
    marginLeft: WIDTH / 60,
    marginRight: WIDTH / 60,
  },
  department: {
    textAlign: "center",
    fontSize: WIDTH / 23,
    marginTop: HEIGHT / 60,
    color: "#00968A",
  },
  price: {
    textAlign: "right",
    fontSize: WIDTH / 18,
    marginTop: HEIGHT / 40,
    marginRight: WIDTH / 60,
    color: "#903B1C",
    fontWeight: "bold",
  },
  view: {
    flex: 1,
    marginLeft: WIDTH / 100,
    marginRight: WIDTH / 100,
    marginTop: HEIGHT / 50,
    marginBottom: HEIGHT / 50,
    borderColor: "#CBAACD",
    borderWidth: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  view2: {
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
    marginTop: HEIGHT / 100,
    marginBottom: HEIGHT / 100,
    width: WIDTH / 1.2,
    borderColor: "#FFC8A2",
    borderWidth: 5,
    borderRadius: 20,
  },
  scrollview: {
    marginLeft: WIDTH / 35,
    marginRight: WIDTH / 35,
  },
  text: {
    color: "#800020",
    fontSize: WIDTH / 23,
  },
});
