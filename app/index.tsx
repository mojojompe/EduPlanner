import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    withDelay,
    FadeInDown,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

export default function LandingPage() {
    const router = useRouter();
    const logoScale = useSharedValue(0);
    const textOpacity = useSharedValue(0);

    useEffect(() => {
        logoScale.value = withSpring(1, { damping: 10, stiffness: 100 });
        textOpacity.value = withDelay(500, withTiming(1, { duration: 1000 }));
    }, []);

    const logoStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: logoScale.value }],
        };
    });

    const textStyle = useAnimatedStyle(() => {
        return {
            opacity: textOpacity.value,
        };
    });

    return (
        <View className="flex-1 bg-primary items-center justify-center px-6">
            <StatusBar style="light" />

            {/* Animated Logo */}
            <Animated.View style={[logoStyle, { marginBottom: 40 }]}>
                <Image
                    source={require("../assets/images/Logo White.png")}
                    style={{ width: 120, height: 120, resizeMode: "contain" }}
                />
            </Animated.View>

            {/* Animated Text */}
            <Animated.View style={[textStyle, { alignItems: "center" }]}>
                <Text className="text-white text-4xl font-bold font-poppins mb-2">
                    EduPlanner
                </Text>
                <Text className="text-white text-xl font-poppins text-center opacity-90 mb-12">
                    Your Best Study Planner.
                </Text>
            </Animated.View>

            {/* Get Started Button */}
            <Animated.View
                entering={FadeInDown.delay(1000).springify()}
                style={{ width: "100%", position: "absolute", bottom: 50 }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => router.push("/(auth)/login")}
                    className="bg-white py-4 rounded-xl items-center shadow-lg"
                >
                    <Text className="text-primary text-lg font-bold font-poppins">
                        Let's Get Started !
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}
