import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTasks } from "../../hooks/useTasks";
import { useCourses } from "../../hooks/useCourses";

export default function AddTask() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [daysDue, setDaysDue] = useState("1");

    const { addTask } = useTasks();
    const { courses } = useCourses();
    const [loading, setLoading] = useState(false);

    const handleAddTask = async () => {
        if (!title || !selectedCourse) {
            alert("Please fill in all fields");
            return;
        }
        setLoading(true);
        try {
            const dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + parseInt(daysDue || "1"));

            await addTask(title, selectedCourse, dueDate);
            router.back();
        } catch (error: any) {
            alert("Error adding task: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-white p-6">
            <StatusBar style="light" />
            <View className="flex-row justify-between items-center mb-6">
                <Text className="text-2xl font-bold font-poppins text-gray-800">Add New Task</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-primary font-poppins">Cancel</Text>
                </TouchableOpacity>
            </View>

            <View className="space-y-4">
                <View className="bg-gray-100 p-4 rounded-xl">
                    <TextInput
                        placeholder="Task Title (e.g. Homework 1)"
                        value={title}
                        onChangeText={setTitle}
                        className="font-poppins text-gray-700"
                    />
                </View>

                <View>
                    <Text className="mb-2 font-poppins text-gray-500">Select Course</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                        {courses.map((course) => (
                            <TouchableOpacity
                                key={course.id}
                                onPress={() => setSelectedCourse(course.id)}
                                className={`mr-2 px-4 py-2 rounded-full border ${selectedCourse === course.id ? 'bg-primary border-primary' : 'bg-white border-gray-300'}`}
                            >
                                <Text className={`font-poppins ${selectedCourse === course.id ? 'text-white' : 'text-gray-600'}`}>
                                    {course.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <View className="bg-gray-100 p-4 rounded-xl">
                    <TextInput
                        placeholder="Days until due (default: 1)"
                        value={daysDue}
                        onChangeText={setDaysDue}
                        keyboardType="numeric"
                        className="font-poppins text-gray-700"
                    />
                </View>

                <TouchableOpacity
                    className="bg-primary py-4 rounded-xl items-center shadow-md mt-4"
                    onPress={handleAddTask}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text className="text-white font-bold text-lg font-poppins">Add Task</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}
