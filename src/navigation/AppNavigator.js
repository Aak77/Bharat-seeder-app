import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// Import all your screens
import AuthScreen from "../screens/AuthScreen";
import BookingConfigScreen from "../screens/BookingConfigScreen"; // The form screen
import Dashboard from "../screens/Dashboard";
import FarmerBookingScreen from "../screens/FarmerBookingScreen";
import OperatorDashboard from "../screens/OperatorDashboard";
import OperatorFoundScreen from "../screens/OperatorFoundScreen"; // The profile card screen
import OTPScreen from "../screens/OTPScreen";
import SearchingOperatorScreen from "../screens/SearchingOperatorScreen"; // The radar screen
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
      <Stack.Screen name="BookingConfig" component={BookingConfigScreen} />
      <Stack.Screen name="SearchingOperator" component={SearchingOperatorScreen} />
      <Stack.Screen name="OperatorFound" component={OperatorFoundScreen} />
      <Stack.Screen name="OperatorDashboard" component={OperatorDashboard} />
    </Stack.Navigator>
  );
}
