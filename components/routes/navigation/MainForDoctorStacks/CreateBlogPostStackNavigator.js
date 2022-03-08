import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, TextInput, Button, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Client from "../../../../api/Client";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();

const CreateBlogPost = () => {
    const [titleText, setTitleText] = useState("");
    const [authorText, setAuthorText] = useState("");
    const [contentText, setContentText] = useState("");

    const saveBlogPost = () => {
        var title = titleText;
        var author = authorText;
        var content = contentText;
        Client.post('/blog', {title, author, content})
            .then((response) => {
                console.log(response);
                if(response.status == "201") {
                    Alert.alert("Blog post saved successfully");
                } else {
                    Alert.alert("An error occured. Please contact the administrator");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <View>
            <View>
                <TextInput placeholder="Title" style={styles.text_input} onChangeText={(event) => setTitleText(event)}/>
                <TextInput placeholder="Author" style={styles.text_input} onChangeText={(event) => setAuthorText(event)}/>
                <TextInput placeholder="Content" style={styles.textarea_input} NumberOfLines={15} onChangeText={(event) => setContentText(event)}/>
                <Button style={styles.saveButton} title="SAVE" onPress={saveBlogPost}/>
            </View>
        </View>
    );
};

const CreateBlogPostStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="CreateBlogPostScreen" component={CreateBlogPost} />
        </Stack.Navigator>
    );
};

export default CreateBlogPostStackNavigator;

const styles = StyleSheet.create({
    text_input:{
        width: WIDTH*0.8,
        borderWidth:1,
        borderRadius:15,
        borderColor:"turquoise",
        alignSelf:"center",
        margin:10
    },
    textarea_input:{
        width: WIDTH*0.8,
        borderWidth:1,
        borderRadius:15,
        borderColor:"red",
        alignSelf:"center",
        height:200
    },
    saveButton:{
        margin:10,
        width: WIDTH*0.8,
        backgroundColor:"turquoise",
        alignSelf:"center",
        justifyContent:"center",
        borderRadius:15
    }
});
