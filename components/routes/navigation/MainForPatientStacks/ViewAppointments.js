import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "../../../../api/Client";

const Stack = createStackNavigator();

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const ViewAppointments = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [LoginData, setLoginData] = useState("");
  const [user, setUser] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const deleteAppointment = async (id) => {
    //var id = deleteId;
    await Client.delete(`/deleteAppointmentById`, { data: { id: id } })
      .then((response) => {
        console.log(response.data);
        Alert.alert(
          "Deleted successfully!",
          JSON.stringify(response.data.affectedRows)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchData = async () => {
    let parsed = await AsyncStorage.getItem("LoginData");
    parsed = await JSON.parse(parsed);
    //console.log(parsed);
    setLoginData(parsed);
  };

  const fetch2 = async () => {
    setUser(LoginData.fullname);
    //We set the date
    let tempDate = new Date();
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    setDate(fDate);
    //setLoading(true);
    var patient = user;

    await Client.post("/getAppointmentWherePatient", {
      patient,
      date,
    })
      .then((response) => {
        setData(response.data);
        // console.log(JSON.stringify(response.data));
        //setLoading(false);
      })
      .catch((error) => {
        console.log("Can't fetch appointments " + error);
      });
  };

  useEffect(() => {
    async function as() {
      await fetchData();
      await fetch2();
    }
    as();
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <Button
        title="Refresh"
        onPress={async () => {
          await fetch2();
        }}
      ></Button>
      <View style={styles.view}>
        {data.map((see) => (
          <View style={styles.view2} key={see.id}>
            <Text style={styles.service}>{see.patient}</Text>
            <Text style={styles.department}>{see.date}</Text>
            <Text style={styles.price}>{see.time}</Text>
            <TouchableOpacity
              style={styles.delete}
              onPress={() => {
                //setDeleteId(see.id);
                deleteAppointment(see.id);
              }}
            >
              <Text>🗑</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
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
    color: "#FF968A",
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
