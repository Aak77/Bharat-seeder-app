import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const FarmerBookingScreen = ({ navigation, route }) => {
  // Safely grab the passed name, or fall back to "Guest"
  const userName = route.params?.userName || "Guest";
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            {/* Use the dynamic variable here */}
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userPhone}>+91 9876543210</Text>
          </View>
          <TouchableOpacity style={styles.profileIcon}>
            <Feather name="log-out" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Statistics Row */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <MaterialCommunityIcons name="sprout" size={24} color="#29563A" />
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Bookings</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="star" size={24} color="#D68C45" />
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
          </View>
          <View style={styles.statBox}>
            <MaterialCommunityIcons name="texture" size={24} color="#29563A" />
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Acres Done</Text>
          </View>
        </View>

        {/* Active Operator Tracking */}
        <View style={styles.trackingCard}>
          <View style={styles.trackingLeft}>
            <FontAwesome5 name="tractor" size={20} color="#D68C45" />
            <View style={styles.trackingText}>
              <Text style={styles.trackingTitle}>Operator on the way!</Text>
              <Text style={styles.trackingSub}>Baldev Kumar • 35 min</Text>
            </View>
          </View>
          {/* FIXED: This button now says Track and goes to the Live Map */}
          <TouchableOpacity onPress={() => navigation.navigate("JobTracking")}>
            <Text style={styles.trackButton}>Track →</Text>
          </TouchableOpacity>
        </View>

        {/* Main Booking Card */}
        <View style={styles.bookCard}>
          <View style={styles.bookHeader}>
            <View>
              <Text style={styles.bookTitle}>Book a Machine</Text>
              <Text style={styles.bookSub}>Happy Seeder • Mulcher • Baler</Text>
            </View>
            <MaterialCommunityIcons name="barley" size={40} color="#A3C4A8" />
          </View>
          {/* FIXED: This button now correctly opens the Booking Form */}
          <TouchableOpacity
            style={styles.bookActionBtn}
            onPress={() => navigation.navigate("BookingConfig")}
          >
            <Text style={styles.bookActionText}>Book Now</Text>
          </TouchableOpacity>
        </View>

        {/* Price Guide */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <FontAwesome5 name="money-bill-wave" size={16} color="#666" /> Price
            Guide (per acre)
          </Text>

          <View style={[styles.priceRow, { backgroundColor: "#E8F5E9" }]}>
            <View style={styles.machineInfo}>
              <MaterialCommunityIcons name="seed" size={20} color="#29563A" />
              <Text style={styles.machineName}>Happy Seeder</Text>
            </View>
            <Text style={styles.machinePrice}>₹2,000</Text>
          </View>

          <View style={[styles.priceRow, { backgroundColor: "#FFF3E0" }]}>
            <View style={styles.machineInfo}>
              <MaterialCommunityIcons name="leaf" size={20} color="#D68C45" />
              <Text style={styles.machineName}>Mulcher</Text>
            </View>
            <Text style={styles.machinePrice}>₹1,500</Text>
          </View>

          <View style={[styles.priceRow, { backgroundColor: "#FCE4EC" }]}>
            <View style={styles.machineInfo}>
              <MaterialCommunityIcons name="grass" size={20} color="#C2185B" />
              <Text style={styles.machineName}>Baler</Text>
            </View>
            <Text style={styles.machinePrice}>₹2,500</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F2F6F0" },
  container: { flex: 1, paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  userName: { fontSize: 24, fontWeight: "bold", color: "#29563A" },
  userPhone: { fontSize: 14, color: "#666", marginTop: 2 },
  profileIcon: { backgroundColor: "#29563A", padding: 10, borderRadius: 20 },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    marginHorizontal: 4,
    elevation: 2,
  },
  statNumber: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 8 },
  statLabel: { fontSize: 12, color: "#777", marginTop: 2 },
  trackingCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  trackingLeft: { flexDirection: "row", alignItems: "center" },
  trackingText: { marginLeft: 12 },
  trackingTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  trackingSub: { fontSize: 13, color: "#666", marginTop: 2 },
  trackButton: { color: "#29563A", fontWeight: "bold", fontSize: 14 },
  bookCard: {
    backgroundColor: "#29563A",
    padding: 20,
    borderRadius: 20,
    marginBottom: 24,
  },
  bookHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  bookTitle: { color: "#FFFFFF", fontSize: 22, fontWeight: "bold" },
  bookSub: { color: "#A3C4A8", fontSize: 14, marginTop: 4 },
  bookActionBtn: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  bookActionText: { color: "#29563A", fontSize: 16, fontWeight: "bold" },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  machineInfo: { flexDirection: "row", alignItems: "center" },
  machineName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  machinePrice: { fontSize: 16, fontWeight: "bold", color: "#333" },
});

export default FarmerBookingScreen;
