import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="px-6 pt-4" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header */}
                <View className="flex-row justify-between items-center mb-8">
                    <View>
                        <Text className="text-gray-500 font-poppins text-lg">Hello,</Text>
                        <Text className="text-primary font-bold font-poppins text-2xl">Student</Text>
                    </View>
                    <TouchableOpacity className="bg-white p-2 rounded-full shadow-sm">
                        <Ionicons name="notifications-outline" size={24} color="#0093ba" />
                    </TouchableOpacity>
                </View>

                {/* Quick Stats / Cards */}
                <Animated.View entering={FadeInDown.delay(200)} className="flex-row justify-between mb-6">
                    <View className="bg-primary p-4 rounded-2xl w-[48%] shadow-md">
                        <Ionicons name="book-outline" size={32} color="white" />
                        <Text className="text-white font-bold font-poppins text-lg mt-2">5 Courses</Text>
                        <Text className="text-white/80 font-poppins text-xs">Active this semester</Text>
                    </View>
                    <View className="bg-white p-4 rounded-2xl w-[48%] shadow-sm border border-gray-100">
                        <Ionicons name="time-outline" size={32} color="#0093ba" />
                        <Text className="text-gray-800 font-bold font-poppins text-lg mt-2">2 Tasks</Text>
                        <Text className="text-gray-500 font-poppins text-xs">Due today</Text>
                    </View>
                </Animated.View>

                {/* Upcoming Schedule */}
                <View className="mb-6">
                    <Text className="text-gray-800 font-bold font-poppins text-xl mb-4">Upcoming Classes</Text>
                    <View className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-l-primary mb-3">
                        <Text className="font-bold font-poppins text-lg">Mathematics</Text>
                        <Text className="text-gray-500 font-poppins">10:00 AM - 11:30 AM</Text>
                        <Text className="text-gray-400 font-poppins text-xs mt-1">Room 301</Text>
                    </View>
                    <View className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-l-purple-500">
                        <Text className="font-bold font-poppins text-lg">Physics</Text>
                        <Text className="text-gray-500 font-poppins">12:00 PM - 01:30 PM</Text>
                        <Text className="text-gray-400 font-poppins text-xs mt-1">Lab 2</Text>
                    </View>
                </View>

                {/* Recent Notes */}
                <View>
                    <Text className="text-gray-800 font-bold font-poppins text-xl mb-4">Recent Notes</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View className="bg-yellow-100 p-4 rounded-xl w-40 h-40 mr-4 justify-between">
                            <Text className="font-bold font-poppins text-gray-800" numberOfLines={2}>Calculus Formulas</Text>
                            <Text className="text-gray-500 text-xs">2 mins ago</Text>
                        </View>
                        <View className="bg-blue-100 p-4 rounded-xl w-40 h-40 mr-4 justify-between">
                            <Text className="font-bold font-poppins text-gray-800" numberOfLines={2}>Physics Project Ideas</Text>
                            <Text className="text-gray-500 text-xs">1 hour ago</Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
