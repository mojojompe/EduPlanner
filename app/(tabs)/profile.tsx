import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { auth } from "../../firebaseConfig";

export default function Profile() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="items-center py-8 bg-white rounded-b-3xl shadow-sm mb-6">
                <View className="w-24 h-24 bg-gray-200 rounded-full mb-4 items-center justify-center">
                    <Ionicons name="person" size={40} color="gray" />
                </View>
                <Text className="text-2xl font-bold font-poppins">Student Name</Text>
                <Text className="text-gray-500 font-poppins">Computer Science</Text>
            </View>

            <ScrollView className="px-6">
                <Text className="text-gray-500 font-bold font-poppins mb-4 uppercase text-xs tracking-widest">Settings</Text>

                <TouchableOpacity className="bg-white p-4 rounded-xl flex-row items-center mb-3 shadow-sm">
                    <View className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Ionicons name="person-outline" size={20} color="#0093ba" />
                    </View>
                    <Text className="flex-1 font-poppins text-gray-700">Edit Profile</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity className="bg-white p-4 rounded-xl flex-row items-center mb-3 shadow-sm">
                    <View className="bg-green-100 p-2 rounded-lg mr-4">
                        <Ionicons name="notifications-outline" size={20} color="green" />
                    </View>
                    <Text className="flex-1 font-poppins text-gray-700">Notifications</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-white p-4 rounded-xl flex-row items-center mb-3 shadow-sm mt-4"
                    onPress={async () => {
                        try {
                            await auth.signOut();
                            // Navigation to landing will be handled by _layout.tsx based on auth state
                        } catch (error) {
                            console.error("Error signing out: ", error);
                        }
                    }}
                >
                    <View className="bg-red-100 p-2 rounded-lg mr-4">
                        <Ionicons name="log-out-outline" size={20} color="red" />
                    </View>
                    <Text className="flex-1 font-poppins text-red-500">Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
