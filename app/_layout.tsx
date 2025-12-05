import { Stack, useRouter, useSegments } from "expo-router";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { AuthProvider, useAuth } from "../context/AuthContext";

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
    const { user, loading } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        const inAuthGroup = segments[0] === "(auth)";
        const inTabsGroup = segments[0] === "(tabs)";
        const isLanding = segments.length === 0;

        if (!user && !inAuthGroup && !isLanding) {
            // Redirect to landing (or login) if not logged in and trying to access restricted area
            // We allow landing page for unauthenticated users
            router.replace("/");
        } else if (user && (inAuthGroup || isLanding)) {
            // Redirect to home if logged in and trying to access auth or landing pages
            router.replace("/(tabs)/home");
        }
    }, [user, loading, segments]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#0093ba" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="courses" />
                <Stack.Screen name="modals" options={{ presentation: "modal" }} />
                <Stack.Screen name="notes" />
            </Stack>
        </View>
    );
}

export default function RootLayout() {
    const [loaded] = useFonts({
        Poppins: Poppins_400Regular,
        "Poppins-Bold": Poppins_700Bold,
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <AuthProvider>
            <RootLayoutNav />
        </AuthProvider>
    );
}
