import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCourses } from "../../hooks/useCourses";

export default function Timetable() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const { courses } = useCourses();

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="px-6 py-4">
                <Text className="text-2xl font-bold font-poppins text-primary">Timetable</Text>
            </View>

            {/* Day Selector (simplified) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6 mb-4 max-h-14">
                {days.map((day, index) => (
                    <View key={day} className={`mr-4 px-4 py-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-white border border-gray-200'}`}>
                        <Text className={`font-poppins font-bold ${index === 0 ? 'text-white' : 'text-gray-500'}`}>{day}</Text>
                    </View>
                ))}
            </ScrollView>

            <ScrollView className="px-6" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Time Slots */}
                {[9, 10, 11, 12, 13, 14, 15].map((hour) => (
                    <View key={hour} className="flex-row mb-4">
                        <Text className="w-16 text-gray-400 font-poppins pt-2">{hour}:00</Text>
                        <View className="flex-1 bg-white p-4 rounded-xl shadow-sm border-l-4 border-l-primary min-h-[80px]">
                            {/* Simple logic to show a course if it exists (placeholder logic) */}
                            {courses.length > 0 && hour === 10 ? (
                                <>
                                    <Text className="font-bold font-poppins">{courses[0].name}</Text>
                                    <Text className="text-gray-500 text-xs">Room 301</Text>
                                </>
                            ) : (
                                <Text className="text-gray-300 font-poppins italic">Free Slot</Text>
                            )}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
