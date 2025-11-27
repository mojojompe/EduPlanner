import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useCourses } from "../../hooks/useCourses";

export default function CourseDetail() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { courses } = useCourses();
    const course = courses.find(c => c.id === id);

    if (!course) {
        return (
            <SafeAreaView className="flex-1 bg-gray-50 justify-center items-center">
                <Text className="font-poppins text-gray-500">Course not found</Text>
                <TouchableOpacity onPress={() => router.back()} className="mt-4">
                    <Text className="text-primary font-poppins">Go Back</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="px-6 py-4 flex-row items-center">
                <TouchableOpacity onPress={() => router.back()} className="mr-4">
                    <Ionicons name="arrow-back" size={24} color="gray" />
                </TouchableOpacity>
                <Text className="text-xl font-bold font-poppins text-gray-800">Course Details</Text>
            </View>

            <ScrollView className="px-6">
                <View className="bg-primary p-6 rounded-2xl mb-6 shadow-md">
                    <Text className="text-white text-2xl font-bold font-poppins">{course.name}</Text>
                    <Text className="text-white/80 font-poppins mt-1">{course.instructor} • Room 301</Text>
                </View>

                <Text className="text-gray-800 font-bold font-poppins text-lg mb-4">Study Materials</Text>
                <View className="bg-white p-4 rounded-xl shadow-sm mb-3 flex-row items-center">
                    <Ionicons name="document-text-outline" size={24} color="#009EBA" />
                    <Text className="ml-3 font-poppins text-gray-700">Syllabus.pdf</Text>
                </View>
                <View className="bg-white p-4 rounded-xl shadow-sm mb-3 flex-row items-center">
                    <Ionicons name="document-text-outline" size={24} color="#009EBA" />
                    <Text className="ml-3 font-poppins text-gray-700">Lecture 1 Slides.pptx</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
