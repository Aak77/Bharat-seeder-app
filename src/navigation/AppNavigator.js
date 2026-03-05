import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AuthScreen from "../screens/AuthScreen";
import OTPScreen from "../screens/OTPScreen";
import SplashScreen from "../screens/SplashScreen";
// Add a placeholder for Dashboard so it doesn't error out
import { Text, View } from "react-native";
const DashboardPlaceholder = () => (
  <View>
    <Text>Dashboard</Text>
  </View>
);

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={AuthScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Dashboard" component={DashboardPlaceholder} />
    </Stack.Navigator>
  );
}
