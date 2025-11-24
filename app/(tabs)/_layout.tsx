import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#ffffff",
                    borderTopWidth: 0,
                    elevation: 10,
                    height: 60,
                    borderRadius: 20,
                    margin: 10,
                    position: "absolute",
                    bottom: 10,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                },
                tabBarActiveTintColor: "#0093ba",
                tabBarInactiveTintColor: "#a0a0a0",
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="timetable"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar-clock" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="notes"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="notebook" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="calculator"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="calculator" size={size - 4} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
