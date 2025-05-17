import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import { Navigator } from 'expo-router';

export default function Signup() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}>
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Create new Account</Text>
          <Text style={styles.subText}>Already Registered?</Text> <TouchableOpacity onPress={() => navigator.navigate('/Login')}><Text style={styles.signUpText}>Login here</Text></TouchableOpacity>
          <Text style={styles.label}>EMAIL</Text>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Enter your Email" style={styles.textInput} keyboardType="email-address" autoCapitalize="none" value={emailInput} onChangeText={setEmailInput} />
          </View>
          <Text style={styles.label}>PASSWORD</Text>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Create a Password" style={styles.textInput} secureTextEntry={true} value={passwordInput} onChangeText={setPasswordInput} />
          </View>
          <Text style={styles.label}>CONFIRM PASSWORD</Text>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Confirm your Password" style={styles.textInput} secureTextEntry={true} value={confirmPasswordInput} onChangeText={setConfirmPasswordInput} />
          </View>
          <TouchableOpacity style={styles.SignupButton} onPress={() => {
            if (!emailInput || !passwordInput || !confirmPasswordInput) {
                Alert.alert('Error', 'Please fill all fields');
                return;
              }
              if (passwordInput !== confirmPasswordInput) {
                Alert.alert('Error', 'Passwords do not match');
                return;
              } else {
                Alert.alert('Success', 'Account created successfully');
                router.push('/')
              }
          }}>
            <Text style={styles.loginButtonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton} onPress={() =>  Alert.alert('Hold on a bit, We are working on that!')}>
            <Text style={styles.googleButtonText}>
              Continue with <Text style={{ color: '#008CFFFF', fontSize: 17 }}>G</Text>
              <Text style={{ color: 'red', fontSize: 17 }}>o</Text>
              <Text style={{ color: 'yellow', fontSize: 17 }}>o</Text>
              <Text style={{ color: '#008CFFFF', fontSize: 17 }}>g</Text>
              <Text style={{ color: 'green', fontSize: 17 }}>l</Text>
              <Text style={{ color: 'red', fontSize: 17 }}>e</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#009EBAFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 600,
    width: 400,
  },
  mainView: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FFFFFFFF',
    borderTopLeftRadius: 95,
    height: 600,
    width: 400,
    alignItems: 'center',
  },
  loginText: {
    paddingTop: 25,
    fontSize: 40,
    width: 300,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Aileron',
  },
  subText: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'DM Sans',
    color: '#8f8e8e',
  },
  label: {
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
    marginLeft: 85,
    marginBottom: 3,
    marginTop: 10,
    fontFamily: 'DM Sans',
    color: '#8f8e8e',
  },
  inputWrapper: {
    backgroundColor: '#D4D4D4FF',
    height: 55,
    width: 325,
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'DM Sans',
  },
  SignupButton: {
    backgroundColor: '#009EBAFF',
    height: 45,
    width: 270,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
  signUpText: {
    color: '#009EBAFF',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
})