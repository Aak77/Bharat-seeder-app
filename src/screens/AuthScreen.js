import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text>Login Screen - Ready for UI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
