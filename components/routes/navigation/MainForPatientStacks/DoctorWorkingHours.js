import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Client from "../../../../api/Client";

import BackgroundStack from "../../../theme/BackgroundStack";

const Stack = createStackNavigator();

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const DoctorWorkingHours = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSP() {
      setLoading(true);
      try {
        await Client.get("/getWorkingHours").then((response) => {
          setData(response.data);
          setLoading(false);
        });
      } catch (error) {
        console.log("Can't fetch working hours ", error);
      }
      return data;
    }
    fetchSP();
  }, []);

  return (
    <BackgroundStack>
      <ScrollView style={styles.scrollview}>
        <View style={styles.view}>
          {data.map((see) => (
            <View style={styles.view2} key={see.username}>
              <Text style={styles.service}>{see.fullname}</Text>
              <Text style={styles.department}>{see.department}</Text>
              <Text style={styles.hours}>
                {see.start_work_hour} --- {see.end_work_hour}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </BackgroundStack>
  );
};

const DoctorWorkingHoursStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DoctorWorkingHours" component={DoctorWorkingHours} />
    </Stack.Navigator>
  );
};

export default DoctorWorkingHoursStackNavigator;

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
  hours: {
    textAlign: "center",
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
