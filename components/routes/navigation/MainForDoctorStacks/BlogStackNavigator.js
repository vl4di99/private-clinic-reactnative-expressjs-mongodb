import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Client from "../../../../api/Client";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();

const Blog = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    async function fetchPosts() {
    try {
      await Client
          .get("/blog")
          .then((response) => {setData(response.data);
           // console.log(JSON.stringify(response.data));

          });
    } catch(error){
      console.log("Can't fetch posts ", error);
    }
  }
  fetchPosts();
  },[data]);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.view}>
        {data.map(see =>
                <View style={styles.blogView} key={see._id}>
                  <Text style={styles.blogTitle}>{see.title}</Text>
                  <Text style={styles.subtitle}>{see.content}</Text>
                  <Image
                      style={{width: '100%', height: HEIGHT/3.3,    resizeMode: "contain",
                        alignSelf: "center"}}
                      source={{uri:see.img}}
                      resizeMode="stretch"
                  />
                  <Text style={styles.subtitle2}>Author: {see.author}</Text>
                </View>
        )}

      </View>
    </ScrollView>
  );
};

const BlogStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Blog" component={Blog} />
    </Stack.Navigator>
  );
};

export default BlogStackNavigator;

const styles = StyleSheet.create({
  title: {
    marginTop: HEIGHT / 20,
    justifyContent: "flex-start",
    fontSize: WIDTH / 15,
    color: "#734F96",
    marginBottom: WIDTH / 12,
  },
  subtitle: {
    textAlign: "left",
    marginLeft: WIDTH*0.03,
    fontSize: WIDTH / 22,
    marginTop: HEIGHT / 200,
    color: "#800020",
  },
  subtitle2: {
    textAlign: "right",
    marginRight: WIDTH*0.05,
    fontSize: WIDTH / 28,
    marginTop: HEIGHT *0.005,
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
  blogView:{
    borderColor: "#734F96",
    borderWidth: 5,
    borderRadius: 10,
    marginBottom: 20
  },
  blogTitle:{
    //marginTop: HEIGHT / 2,
    justifyContent: "flex-start",
    fontSize: WIDTH / 15,
    color: "#734F96",
    //marginBottom: WIDTH / 12,
  }
});
