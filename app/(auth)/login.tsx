import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { auth } from "../../firebaseConfig";
import { FirebaseError } from "firebase/app";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }
        try {
            await auth.signInWithEmailAndPassword(email, password);
            router.replace("/(tabs)/home");
        } catch (error: any) {
            console.error(error);
            alert("Login failed: " + error.message);
        }
    };

    const onGoogleButtonPress = async () => {
        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const signInResult = await GoogleSignin.signIn();

            // Try the new style of getting the idToken
            let idToken = signInResult.data?.idToken;
            if (!idToken) {
                // Fallback for older versions or different response structure
                idToken = signInResult.idToken;
            }

            if (!idToken) {
                throw new Error('No ID token found');
            }

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth.signInWithCredential(googleCredential);
            router.replace("/(tabs)/home");
        } catch (error: any) {
            console.error(error);
            alert("Google Sign-In failed: " + error.message);
        }
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

                    <View className="flex-row items-center my-4">
                        <View className="flex-1 h-[1px] bg-gray-300" />
                        <Text className="mx-4 text-gray-500 font-poppins">OR</Text>
                        <View className="flex-1 h-[1px] bg-gray-300" />
                    </View>

                    <TouchableOpacity
                        onPress={onGoogleButtonPress}
                        className="bg-white border border-gray-300 py-4 rounded-xl items-center shadow-sm flex-row justify-center"
                    >
                        <Ionicons name="logo-google" size={24} color="black" className="mr-3" />
                        <Text className="text-gray-700 font-bold text-lg font-poppins ml-2">Sign in with Google</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(1000)} className="flex-row justify-center mt-10">
                    <Text className="text-gray-500 font-poppins">Don&apos;t have an account? </Text>
                    <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                        <Text className="text-primary font-bold font-poppins">Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </View>
    );
}
