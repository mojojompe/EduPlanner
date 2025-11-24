import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
// import auth from '@react-native-firebase/auth'; // Uncomment when ready

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        // Implement Firebase Login here
        // try {
        //   await auth().signInWithEmailAndPassword(email, password);
        router.replace("/(tabs)/home");
        // } catch (error) {
        //   console.error(error);
        // }
    };

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <Image
                source={require("../../assets/images/Logo White.png")}
                style={{ position: "absolute", top: -100, right: -100, opacity: 0.1, width: 400, height: 400 }}
            />

            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} className="px-6">
                <Animated.View entering={FadeInUp.delay(200).duration(1000)} className="items-center mb-10">
                    <Text className="text-primary text-4xl font-bold font-poppins">Welcome Back</Text>
                    <Text className="text-gray-500 text-lg font-poppins mt-2">Sign in to continue</Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400).duration(1000)} className="space-y-4">
                    <View className="bg-gray-100 p-4 rounded-xl">
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            className="font-poppins text-gray-700"
                            autoCapitalize="none"
                        />
                    </View>
                    <View className="bg-gray-100 p-4 rounded-xl">
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            className="font-poppins text-gray-700"
                        />
                    </View>

                    <TouchableOpacity className="items-end">
                        <Text className="text-primary font-poppins">Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleLogin}
                        className="bg-primary py-4 rounded-xl items-center shadow-md mt-4"
                    >
                        <Text className="text-white font-bold text-lg font-poppins">Sign In</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(1000)} className="flex-row justify-center mt-10">
                    <Text className="text-gray-500 font-poppins">Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                        <Text className="text-primary font-bold font-poppins">Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </View>
    );
}
