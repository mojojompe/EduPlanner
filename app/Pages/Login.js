import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React, { useState } from 'react';
// import { Navigator, router } from 'expo-router';
import router from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { navigate } from 'expo-router/build/global-state/routing';
import { Navigator } from 'expo-router';

export default function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState(''); 
return (
      <View style={styles.mainView}>
        <Image style={styles.image} source={require('../assets/images/Logo White.png')} />
        <View style={styles.container}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.subText}>Sign in to Continue</Text>
          <Text style={styles.label}>EMAIL</Text>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Enter your Email" style={styles.textInput} keyboardType="email-address" autoCapitalize="none" value={emailInput} onChangeText={setEmailInput}/>
          </View>
          <Text style={styles.label}>PASSWORD</Text>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Enter your Password" style={styles.textInput} secureTextEntry={true} value={passwordInput} onChangeText={setPasswordInput} />
          </View>
          <TouchableOpacity style={styles.loginButton} 
          onPress={() => {
            if (!emailInput || !passwordInput){
              Alert.alert('Error','Enter valid Email and Password');
              return;
            }
            if (emailInput == 'test@example.com' && passwordInput == 'password'){
              Alert.alert('Success','Logged in successfully');
            } else {
              Alert.alert('Error', 'Invalid Email or Password');
            }
           }}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton} onPress={() => Alert.alert('Hold on a bit, We are working on that!')}>
            <Text style={styles.googleButtonText}>
              Continue with <Text style={{ color: '#008CFFFF', fontSize: 17 }}>G</Text>
              <Text style={{ color: 'red', fontSize: 17 }}>o</Text>
              <Text style={{ color: '#FFEA00FF', fontSize: 17 }}>o</Text>
              <Text style={{ color: '#008CFFFF', fontSize: 17 }}>g</Text>
              <Text style={{ color: 'green', fontSize: 17 }}>l</Text>
              <Text style={{ color: 'red', fontSize: 17 }}>e</Text>
            </Text>
          </TouchableOpacity>
          
          <Text style={styles.footerText}>
            Don't have an account?{' '} <TouchableOpacity onPress={() => navigator.navigate("/app/Pages/Signup.js")}> <Text style={styles.signUpText}>Sign up</Text> </TouchableOpacity>
          </Text>
          <TouchableOpacity onPress={() => Alert.alert('Oops, Try remembering your Password, Dumbass!!')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#009EBAFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#FFFFFFFF',
    paddingTop: 20,
    borderTopRightRadius: 85,
    height: 500,
    width: 400,
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    marginBottom: 80,
    width: 92,
    height: 92,
    borderRadius: 10,
  },
  loginText: {
    fontSize: 42,
    width: 400,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Aileron',
  },
  subText: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'DM Sans',
    paddingTop: 3,
    paddingBottom: 10,
    color: '#8f8e8e',
  },
  label: {
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
    marginLeft: 100,
    marginBottom: 3,
    marginTop: 10,
    fontFamily: 'DM Sans',
    color: '#8f8e8e',
  },
  inputWrapper: {
    backgroundColor: '#D4D4D4FF',
    height: 55,
    width: 310,
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'DM Sans',
  },
  loginButton: {
    backgroundColor: '#009EBAFF',
    height: 45,
    width: 270,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFFFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 17,
  },
  googleButton: {
    backgroundColor: '#e9eeef',
    height: 45,
    width: 270,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#000000FF',
    fontFamily: 'Canva Sans',
    fontSize: 17,
  },
  footerText: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'DM Sans',
    paddingTop: 10,
    borderTop: 10,
  },
  signUpText: {
    color: '#009EBAFF',
    textDecorationLine: 'underline',
    borderTop: 0,
    fontStyle: 'italic',
  },
  forgotPasswordText: {
    color: '#009EBAFF',
    textDecorationLine:'underline',
    paddingTop: 5,
    fontStyle: 'italic',
  },
})