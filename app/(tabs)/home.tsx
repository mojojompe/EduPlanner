import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useAuth } from "../../context/AuthContext";
import { useCourses } from "../../hooks/useCourses";
import { useTasks } from "../../hooks/useTasks";
import { useRouter } from "expo-router";

export default function Home() {
    const { user } = useAuth();
    const { courses } = useCourses();
    const { tasks } = useTasks();
    const router = useRouter();

    const upcomingTasks = tasks.filter(t => !t.isCompleted).length;
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="px-6 pt-4" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header */}
                <View className="flex-row justify-between items-center mb-8">
                    <View>
                        <Text className="text-gray-500 font-poppins text-lg">Hello,</Text>
                        <Text className="text-primary font-bold font-poppins text-2xl">{user?.displayName || "Student"}</Text>
                    </View>
                    <TouchableOpacity className="bg-white p-2 rounded-full shadow-sm">
                        <Ionicons name="notifications-outline" size={24} color="#0093ba" />
                    </TouchableOpacity>
                </View>

                {/* Quick Stats / Cards */}
                <Animated.View entering={FadeInDown.delay(200)} className="flex-row justify-between mb-6">
                    <TouchableOpacity onPress={() => router.push("/modals/add-course")} className="bg-primary p-4 rounded-2xl w-[48%] shadow-md">
                        <Ionicons name="book-outline" size={32} color="white" />
                        <Text className="text-white font-bold font-poppins text-lg mt-2">{courses.length} Courses</Text>
                        <Text className="text-white/80 font-poppins text-xs">Active this semester</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push("/modals/add-task")} className="bg-white p-4 rounded-2xl w-[48%] shadow-sm border border-gray-100">
                        <Ionicons name="time-outline" size={32} color="#0093ba" />
                        <Text className="text-gray-800 font-bold font-poppins text-lg mt-2">{upcomingTasks} Tasks</Text>
                        <Text className="text-gray-500 font-poppins text-xs">Pending</Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* Upcoming Schedule (Courses List for now) */}
                <View className="mb-6">
                    <Text className="text-gray-800 font-bold font-poppins text-xl mb-4">Your Courses</Text>
                    {courses.length === 0 ? (
                        <Text className="text-gray-500 font-poppins italic">No courses added yet.</Text>
                    ) : (
                        courses.map((course) => (
                            <TouchableOpacity
                                key={course.id}
                                onPress={() => router.push(`/courses/${course.id}`)}
                                className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-l-primary mb-3"
                            >
                                <Text className="font-bold font-poppins text-lg">{course.name}</Text>
                                <Text className="text-gray-500 font-poppins">{course.instructor}</Text>
                            </TouchableOpacity>
                        ))
                    )}
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
