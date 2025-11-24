import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {
    const [display, setDisplay] = useState("0");

    const buttons = [
        ["C", "(", ")", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "=", ""],
    ];

    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            <View className="flex-1 justify-end px-6 pb-8">
                <Text className="text-white text-6xl font-poppins text-right">{display}</Text>
            </View>

            <View className="bg-gray-800 rounded-t-3xl p-6 h-[60%]">
                {buttons.map((row, rowIndex) => (
                    <View key={rowIndex} className="flex-row justify-between mb-4">
                        {row.map((btn, btnIndex) => (
                            <TouchableOpacity
                                key={btnIndex}
                                className={`w-16 h-16 rounded-full items-center justify-center ${btn === '=' ? 'bg-primary' : 'bg-gray-700'}`}
                                onPress={() => {
                                    if (btn === 'C') setDisplay("0");
                                    else if (btn === '=') setDisplay("Calculated"); // Implement logic
                                    else if (btn !== "") setDisplay(prev => prev === "0" ? btn : prev + btn);
                                }}
                            >
                                <Text className="text-white text-2xl font-bold">{btn}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}
