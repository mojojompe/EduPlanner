import { Stack } from "expo-router";

export default function ModalsLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="add-course" />
            <Stack.Screen name="add-task" />
        </Stack>
    );
}
