import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AuthScreen from "../screens/AuthScreen";
import Dashboard from "../screens/Dashboard";
import FarmerBookingScreen from "../screens/FarmerBookingScreen"; // Add this
import OperatorDashboard from "../screens/OperatorDashboard";
import OTPScreen from "../screens/OTPScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={AuthScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="FarmerBooking" component={FarmerBookingScreen} />
      <Stack.Screen name="OperatorDashboard" component={OperatorDashboard} />
    </Stack.Navigator>
  );
}
