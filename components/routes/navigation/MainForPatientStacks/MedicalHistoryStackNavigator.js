import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "../../../../api/Client";
import Moment from "moment";
import BackgroundStack from "../../../theme/BackgroundStack";
import ModalBackground from "../../../theme/ModalBackground";

const Stack = createStackNavigator();
const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const MedicalHistory = () => {
  const [profileElements, setProfileElements] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState("");
  const displayModal = (show) => {
    setModalVisible(show);
  };

  useEffect(() => {
    const getHistory = async () => {
      try {
        setLoading(true);
        var profileElements = await AsyncStorage.getItem("LoginData");
        profileElements = await JSON.parse(profileElements);
        let fullname = profileElements.fullname;
        //setFullname(profileElements.fullname);
        await Client.post("/medicalHistory/get", { fullname }).then(
          (response) => {
            setData(response.data);
            //console.log(data);
            setLoading(false);
          }
        );
      } catch (error) {
        console.log("Error while getting history: " + error);
      }
    };
    getHistory();
  }, []);

  return (
    <BackgroundStack>
      {loading && (
        <View>
          <Text>Loading your history...</Text>
        </View>
      )}
      {!loading && (
        <ScrollView style={styles.scrollview}>
          <View style={styles.view}>
            <Text style={styles.title}>My Medical History </Text>
            {data.map((see) => (
              <View style={styles.blogView} key={see._id}>
                <Text style={styles.blogTitle}>
                  {Moment(see.date).format("DD.MM.YYYY")}
                </Text>
                <TouchableOpacity
                  style={styles.read}
                  onPress={() => {
                    setModalData(see);
                    displayModal(true);
                  }}
                >
                  <Text>Read</Text>
                </TouchableOpacity>
                <Text style={styles.subtitle2}>Doctor: {see.doctor}</Text>
                <Text style={styles.subtitle2}>
                  Department: {see.department}
                </Text>
              </View>
            ))}
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={modalVisible}
            >
              <ModalBackground>
                <ScrollView>
                  <Text style={styles.modalText}>{modalData.history}</Text>
                  <Text
                    style={styles.closeModal}
                    onPress={() => {
                      displayModal(!modalVisible);
                    }}
                  >
                    Close
                  </Text>
                </ScrollView>
              </ModalBackground>
            </Modal>
          </View>
        </ScrollView>
      )}
    </BackgroundStack>
  );
};

const MedicalHistoryStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
    </Stack.Navigator>
  );
};

export default MedicalHistoryStackNavigator;
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
    textAlign: "justify",
    fontSize: WIDTH / 22,
    marginTop: HEIGHT / 200,
    color: "#800020",
  },
  subtitle2: {
    textAlign: "center",
    fontSize: WIDTH / 23,
    marginTop: HEIGHT / 80,
    color: "#800020",
    marginBottom: HEIGHT / 300,
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
  blogView: {
    borderColor: "#734F96",
    borderWidth: 5,
    borderRadius: 30,
    marginBottom: 20,
  },
  blogTitle: {
    //marginTop: HEIGHT / 2,
    textAlign: "center",
    alignItems: "center",
    fontSize: WIDTH / 15,
    color: "#734F96",
    //marginBottom: WIDTH / 12,
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
    marginTop: HEIGHT / 50,
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
  },
  closeModal: {
    fontSize: HEIGHT * 0.04,
    color: "#00479e",
    textAlign: "center",
    padding: WIDTH * 0.03,
  },
  modalText: {
    fontSize: HEIGHT * 0.03,
    marginBottom: HEIGHT * 0.03,
    padding: HEIGHT * 0.04,
    textAlign: "justify",
  },
});
