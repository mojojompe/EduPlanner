import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { auth } from "../../firebaseConfig";

export default function Signup() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {
        if (!email || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            await userCredential.user.sendEmailVerification();
            alert("Account created! Please check your email to verify your account.");
            router.push("/(auth)/profile-setup");
        } catch (error: any) {
            console.error(error);
            alert("Signup failed: " + error.message);
        }
    };

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />

            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} className="px-6">
                <Animated.View entering={FadeInUp.delay(200).duration(1000)} className="items-center mb-10">
                    <Text className="text-primary text-4xl font-bold font-poppins">Create Account</Text>
                    <Text className="text-gray-500 text-lg font-poppins mt-2">Join EduPlanner today</Text>
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
                    <View className="bg-gray-100 p-4 rounded-xl">
                        <TextInput
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            className="font-poppins text-gray-700"
                        />
                    </View>

                    <TouchableOpacity
                        onPress={handleSignup}
                        className="bg-primary py-4 rounded-xl items-center shadow-md mt-4"
                    >
                        <Text className="text-white font-bold text-lg font-poppins">Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(1000)} className="flex-row justify-center mt-10">
                    <Text className="text-gray-500 font-poppins">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text className="text-primary font-bold font-poppins">Sign In</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </View>
    );
}
