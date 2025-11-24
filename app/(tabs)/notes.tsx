import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Notes() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="px-6 py-4 flex-row justify-between items-center">
                <Text className="text-2xl font-bold font-poppins text-primary">Notes</Text>
                <TouchableOpacity>
                    <Ionicons name="add-circle" size={32} color="#0093ba" />
                </TouchableOpacity>
            </View>

            <View className="px-6 mb-4">
                <View className="bg-white flex-row items-center p-3 rounded-xl shadow-sm">
                    <Ionicons name="search" size={20} color="gray" />
                    <TextInput placeholder="Search notes..." className="flex-1 ml-2 font-poppins" />
                </View>
            </View>

            <ScrollView className="px-6" contentContainerStyle={{ paddingBottom: 100 }}>
                <View className="flex-row flex-wrap justify-between">
                    {[1, 2, 3, 4].map((item) => (
                        <TouchableOpacity key={item} className="bg-white w-[48%] p-4 rounded-xl shadow-sm mb-4 h-40 justify-between">
                            <Text className="font-bold font-poppins text-lg" numberOfLines={2}>Chapter {item} Summary</Text>
                            <Text className="text-gray-400 text-xs font-poppins">Oct 24, 2025</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
