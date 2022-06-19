import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
import { createStackNavigator } from "@react-navigation/stack";
import Client from "../../../../api/Client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Moment from "moment";
import BackgroundStack from "../../../theme/BackgroundStack";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();

const ManualTrackerHistory = () => {
  const [dataR, setDataR] = useState([]);
  const [loginData, setLoginData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        let parsed = await AsyncStorage.getItem("LoginData");
        let jsonp = await JSON.parse(parsed);
        let user = jsonp.username;
        let doctor = false;
        await Client.post("/tracker/get", { username: user, doctor: doctor })
          .then((response) => {
            setDataR(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log("Can't fetch blog posts: " + error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <BackgroundStack>
      {loading && (
        <View>
          <Text>Loading your tracker history...</Text>
        </View>
      )}
      {!loading && (
        <ScrollView style={styles.scrollview}>
          <View style={styles.view}>
            {dataR.map((see) => (
              <View style={styles.blogView} key={see._id}>
                <Text style={styles.blogTitle}>
                  {Moment(see.date).format("DD MMM YYYY HH:MM")} {see?.mood}
                </Text>
                <View style={styles.inlineItemsContainer}>
                  <Text style={styles.modalText}>
                    Sleep 8H:
                    <Checkbox value={see.sleep} />
                  </Text>
                  <Text style={styles.modalTextRight}>
                    Water 2L: <Checkbox value={see.water} />
                  </Text>
                </View>
                <View style={styles.inlineItemsContainer}>
                  <Text style={styles.modalText}>
                    Meditation: <Checkbox value={see.meditation} />
                  </Text>
                  <Text style={styles.modalTextRight}>
                    Medication: <Checkbox value={see.medication} />
                  </Text>
                </View>
                <Text style={styles.modalTextMiddle}>
                  Exercise: <Checkbox value={see.exercise} />
                </Text>
                <View style={styles.inlineItemsContainer}>
                  <Text style={[styles.modalTextMiddle, { color: "red" }]}>
                    Heart Info:
                  </Text>

                  <Text style={styles.modalTextRight}>Sys: {see.systolic}</Text>
                  <Text style={styles.modalTextRight}>
                    Dias: {see.diastolic}
                  </Text>
                  <Text style={styles.modalTextRight}>HR: {see.hr}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </BackgroundStack>
  );
};

const ManualTrackerHistoryStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ManualTrackerHistory"
        component={ManualTrackerHistory}
      />
    </Stack.Navigator>
  );
};

export default ManualTrackerHistoryStackNavigator;

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
    marginLeft: WIDTH * 0.03,
    marginRight: WIDTH * 0.03,
    marginTop: HEIGHT * 0.03,
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
    textAlign: "center",
    alignItems: "center",
    fontSize: WIDTH * 0.05,
    color: "#734F96",
  },
  closeModal: {
    fontSize: HEIGHT * 0.04,
    color: "#00479e",
    textAlign: "center",
    marginTop: HEIGHT * 0.1,
  },
  modalText: {
    fontSize: HEIGHT * 0.02,
    padding: HEIGHT * 0.01,
    textAlign: "left",
  },
  modalTextRight: {
    fontSize: HEIGHT * 0.02,
    padding: HEIGHT * 0.01,
    textAlign: "right",
  },
  modalTextMiddle: {
    fontSize: HEIGHT * 0.02,
    padding: HEIGHT * 0.01,
    textAlign: "center",
  },
  inlineItemsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
