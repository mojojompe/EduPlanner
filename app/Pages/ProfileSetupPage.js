import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { ScrollView } from 'react-native-web';
import Feather from '@expo/vector-icons/Feather';

export default function ProfileSetupPage() {
  return (
    <View>
        <View style={styles.mainView}>
             <TouchableOpacity>
             <Feather name="x" size={90} color="black" />
             
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#FFFFFFFF',
    },
});