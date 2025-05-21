import { router } from 'expo-router';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';   
import { navigate } from 'expo-router/build/global-state/routing';
import { Navigator } from 'expo-router';


export default function LandingPage() {
  return (
    <View style={styles.mainView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/Logo White.png")}
        ></Image>{" "}
        <Text style={styles.head}>EduPlanner</Text>
        <Text style={styles.bodyText}>Your Best Study Planner.</Text>
        <Text style={styles.downText}>Let's Get Started !</Text>
        <TouchableOpacity style={{ paddingTop: 20 }}>
          <AntDesign
            name="arrowright"
            size={65}
            paddingLeft={250}
            marginTop={-95}
            color="#0093baff"
            onPress={() => navigate("/Pages/Login.js")}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    mainView: {
        paddingTop: 50,
        paddingLeft: 10,
        flex: 1,
        backgroundColor: '#FFFFFFFF',
    },
    image: {
        paddingTop: 20,
        height: 60,
        width: 60,
        borderRadius: 10,
    },
    head:{
      marginLeft: 65,
      marginTop: -35,
      paddingBottom: 0,
        color:'#000000FF',
        fontStyle: 'normal',
        fontSize: 20,
        fontFamily: "Poppins",
    },
    bodyText:{
        fontFamily: 'poppins',
        fontSize: 43,
        paddingTop: 70,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    downText:{
        textAlign: 'left',
        paddingLeft: 25,
        fontFamily: 'poppins',
        fontSize: 35,
        paddingTop: 270,
        fontWeight: 'bold',
        width: 270,
    }
})