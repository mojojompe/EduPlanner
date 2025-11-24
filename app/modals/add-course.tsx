import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AddCourse() {
    const router = useRouter();
    const [courseName, setCourseName] = useState("");
    const [instructor, setInstructor] = useState("");

    return (
        <View className="flex-1 bg-white p-6">
            <StatusBar style="light" />
            <View className="flex-row justify-between items-center mb-6">
                <Text className="text-2xl font-bold font-poppins text-gray-800">Add New Course</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-primary font-poppins">Cancel</Text>
                </TouchableOpacity>
            </View>

            <View className="space-y-4">
                <View className="bg-gray-100 p-4 rounded-xl">
                    <TextInput
                        placeholder="Course Name (e.g. Mathematics)"
                        value={courseName}
                        onChangeText={setCourseName}
                        className="font-poppins text-gray-700"
                    />
                </View>
                <View className="bg-gray-100 p-4 rounded-xl">
                    <TextInput
                        placeholder="Instructor Name"
                        value={instructor}
                        onChangeText={setInstructor}
                        className="font-poppins text-gray-700"
                    />
                </View>

                <TouchableOpacity
                    className="bg-primary py-4 rounded-xl items-center shadow-md mt-4"
                    onPress={() => router.back()}
                >
                    <Text className="text-white font-bold text-lg font-poppins">Add Course</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
