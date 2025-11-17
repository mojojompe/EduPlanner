import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./app/Pages/Login";
import LandingPage from "./app/Pages/LandingPage";
import Signup from "./app/Pages/Signup";

export default function App() {
    return (
        <View>
        <LandingPage />
        <Login>
            <StatusBar style="auto" />
        </Login>
        <Signup />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});