import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Import professional icons from Expo
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bharat Seeder</Text>
        <Text style={styles.headerSubtitle}>Choose your portal to proceed</Text>
      </View>

      <View style={styles.roleContainer}>
        {/* Farmer Card */}
        <TouchableOpacity 
          style={[styles.card, { borderColor: '#2E7D32' }]} 
          onPress={() => navigation.navigate('FarmerBooking')}
        >
          <View style={styles.iconCircle}>
            <FontAwesome5 name="tractor" size={40} color="#2E7D32" />
          </View>
          <Text style={styles.cardTitle}>Farmer Portal</Text>
          <Text style={styles.cardDesc}>Request high-tech seeding machinery</Text>
        </TouchableOpacity>

        {/* Operator Card */}
        <TouchableOpacity 
          style={[styles.card, { borderColor: '#5D4037' }]} 
          onPress={() => navigation.navigate('OperatorDashboard')}
        >
          <View style={[styles.iconCircle, { backgroundColor: '#EFEBE9' }]}>
            <MaterialCommunityIcons name="cog-sync" size={45} color="#5D4037" />
          </View>
          <Text style={styles.cardTitle}>Operator Portal</Text>
          <Text style={styles.cardDesc}>Manage fleet and fulfill farm requests</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// ... (Styles remain the same as previous version, just removing the emoji-specific centering if needed)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F8E9', padding: 20 },
  header: { marginTop: 40, marginBottom: 30, alignItems: 'center' },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: '#1B5E20', letterSpacing: 1 },
  headerSubtitle: { fontSize: 16, color: '#666', marginTop: 5 },
  roleContainer: { flex: 1, justifyContent: 'center' },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 30,
    marginBottom: 25,
    borderWidth: 1.5,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: { fontSize: 22, fontWeight: '700', color: '#333' },
  cardDesc: { fontSize: 14, color: '#777', textAlign: 'center', marginTop: 8, lineHeight: 20 },
});

export default Dashboard;
