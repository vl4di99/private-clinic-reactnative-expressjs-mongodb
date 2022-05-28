import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  AppState,
  ActivityIndicator,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackgroundStack from "../../../theme/BackgroundStack";

import { AuthContext } from "../../../contexts/AuthProvider";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Stack = createStackNavigator();

const Profile = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    const getProfile = async () => {
      var parsed = await AsyncStorage.getItem("LoginData");
      let profileElements = await JSON.parse(parsed);
      setUsername(profileElements?.username);
      setFullname(profileElements?.fullname);
      setLoading(false);
      return profileElements;
    };
    getProfile();
  }, []);

  const logout = async () => {
    //await AsyncStorage.removeItem('@token');
    await AsyncStorage.clear();
    await setIsLoggedIn(false);
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
            <Text style={styles.subtitle}>Username:</Text>
            <Text style={styles.subtitle2}>{username}</Text>
            <Text style={styles.subtitle}>Patient name:</Text>
            <Text style={styles.subtitle2}>{fullname}</Text>
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
});
