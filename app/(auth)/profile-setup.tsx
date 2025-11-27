import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";
import { db, auth } from "../../firebaseConfig";

export default function ProfileSetup() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [major, setMajor] = useState("");

    const handleSave = async () => {
        if (!name || !university || !major) {
            alert("Please fill in all fields");
            return;
        }
        try {
            const user = auth.currentUser;
            if (!user) return;

            await db.collection("users").doc(user.uid).set({
                displayName: name,
                university,
                major,
                email: user.email,
                createdAt: new Date(),
            });

            router.replace("/(tabs)/home");
        } catch (error: any) {
            console.error(error);
            alert("Failed to save profile: " + error.message);
        }
    };

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />

            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} className="px-6">
                <Animated.View entering={FadeInDown.delay(200)} className="mb-8">
                    <Text className="text-primary text-3xl font-bold font-poppins">Setup Profile</Text>
                    <Text className="text-gray-500 text-base font-poppins mt-2">Tell us a bit about yourself</Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400)} className="space-y-4">
                    <View className="bg-gray-100 p-4 rounded-xl">
                        <TextInput
                            placeholder="Full Name"
                            value={name}
                            onChangeText={setName}
                            className="font-poppins text-gray-700"
                        />
                    </View>
                    <View className="bg-gray-100 p-4 rounded-xl">
                        <TextInput
                            placeholder="University / School"
                            value={university}
                            onChangeText={setUniversity}
                            className="font-poppins text-gray-700"
                        />
                    </View>
                    <View className="bg-gray-100 p-4 rounded-xl">
                        <TextInput
                            placeholder="Major / Grade"
                            value={major}
                            onChangeText={setMajor}
                            className="font-poppins text-gray-700"
                        />
                    </View>

                    <TouchableOpacity
                        onPress={handleSave}
                        className="bg-primary py-4 rounded-xl items-center shadow-md mt-6"
                    >
                        <Text className="text-white font-bold text-lg font-poppins">Complete Setup</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </View>
    );
}
