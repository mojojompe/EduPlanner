import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function NoteDetail() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [title, setTitle] = useState("Chapter Summary");
    const [content, setContent] = useState("This is the content of the note...");

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-6 py-4 flex-row justify-between items-center border-b border-gray-100">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-primary font-bold font-poppins">Save</Text>
                </TouchableOpacity>
            </View>

            <View className="p-6 flex-1">
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    className="text-2xl font-bold font-poppins text-gray-800 mb-4"
                    placeholder="Title"
                />
                <TextInput
                    value={content}
                    onChangeText={setContent}
                    className="text-base font-poppins text-gray-600 flex-1"
                    placeholder="Start typing..."
                    multiline
                    textAlignVertical="top"
                />
            </View>
        </SafeAreaView>
    );
}
