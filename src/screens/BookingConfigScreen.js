import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const MACHINES = [
  { id: 'happy_seeder', name: 'Happy Seeder', desc: 'For sowing seeds directly', price: 2000, icon: 'seed', color: '#29563A' },
  { id: 'mulcher', name: 'Mulcher', desc: 'For stubble management', price: 1500, icon: 'leaf', color: '#D68C45' },
  { id: 'baler', name: 'Baler', desc: 'For baling crop residue', price: 2500, icon: 'grass', color: '#C2185B' },
];

const BookingConfigScreen = ({ navigation }) => {
  const [selectedMachine, setSelectedMachine] = useState(MACHINES[1]); // Default to Mulcher
  const [acres, setAcres] = useState(1);

  const incrementAcres = () => {
    if (acres < 50) setAcres(acres + 1);
  };

  const decrementAcres = () => {
    if (acres > 1) setAcres(acres - 1);
  };

  const totalPrice = selectedMachine.price * acres;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fill in your requirements</Text>
        <View style={{ width: 24 }} /> {/* Spacer for alignment */}
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Machine Selection Section */}
        <Text style={styles.sectionTitle}>Select Machine Type</Text>
        <View style={styles.cardContainer}>
          {MACHINES.map((machine) => (
            <TouchableOpacity 
              key={machine.id}
              style={[
                styles.machineCard, 
                selectedMachine.id === machine.id && styles.machineCardSelected
              ]}
              onPress={() => setSelectedMachine(machine)}
            >
              <View style={styles.machineIconBg}>
                <MaterialCommunityIcons name={machine.icon} size={24} color={machine.color} />
              </View>
              <View style={styles.machineInfo}>
                <Text style={styles.machineName}>{machine.name}</Text>
                <Text style={styles.machineDesc}>{machine.desc}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.machinePrice}>₹{machine.price.toLocaleString()}</Text>
                <Text style={styles.perAcre}>per acre</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Acres Selection Section */}
        <Text style={styles.sectionTitle}>Number of Acres</Text>
        <View style={[styles.cardContainer, styles.acresCard]}>
          <TouchableOpacity onPress={decrementAcres} style={styles.circleBtn}>
            <Ionicons name="remove" size={24} color="#29563A" />
          </TouchableOpacity>
          <View style={styles.acresDisplay}>
            <Text style={styles.acresNumber}>{acres}</Text>
            <Text style={styles.acresText}>acres</Text>
          </View>
          <TouchableOpacity onPress={incrementAcres} style={styles.circleBtn}>
            <Ionicons name="add" size={24} color="#29563A" />
          </TouchableOpacity>
        </View>

        {/* Location Section */}
        <Text style={styles.sectionTitle}>Field Location</Text>
        <View style={styles.cardContainer}>
          <View style={styles.locationRow}>
            <Ionicons name="location-sharp" size={28} color="#C2185B" />
            <View style={styles.locationInfo}>
              <Text style={styles.locationName}>Near Panvel, Maharashtra</Text>
              <Text style={styles.locationDesc}>GPS detected location</Text>
            </View>
            <TouchableOpacity style={styles.changeBtn}>
              <Text style={styles.changeBtnText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Extra padding at bottom so scroll doesn't hide behind absolute footer */}
        <View style={{ height: 120 }} /> 
      </ScrollView>

      {/* Bottom Footer - Estimate & Action */}
      <View style={styles.footer}>
        <View style={styles.estimateRow}>
          <View>
            <Text style={styles.estimateLabel}>Estimated Price</Text>
            <Text style={styles.estimateCalc}>
              {selectedMachine.name} • ₹{selectedMachine.price.toLocaleString()} x {acres} {acres === 1 ? 'acre' : 'acres'}
            </Text>
          </View>
          <Text style={styles.totalPrice}>₹{totalPrice.toLocaleString()}</Text>
        </View>
        
        <TouchableOpacity style={styles.findBtn}>
          <Text style={styles.findBtnText}>Find Operators Nearby →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F2F6F0' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 15 },
  backBtn: { padding: 8, marginLeft: -8 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  container: { flex: 1, paddingHorizontal: 20 },
  
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 20, marginBottom: 12 },
  cardContainer: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 8, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05 },
  
  machineCard: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 12, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  machineCardSelected: { backgroundColor: '#E8F5E9', borderColor: '#29563A', borderWidth: 1 },
  machineIconBg: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  machineInfo: { flex: 1 },
  machineName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  machineDesc: { fontSize: 12, color: '#777', marginTop: 2 },
  priceContainer: { alignItems: 'flex-end' },
  machinePrice: { fontSize: 16, fontWeight: 'bold', color: '#29563A' },
  perAcre: { fontSize: 12, color: '#777' },

  acresCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  circleBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#E8F5E9', justifyContent: 'center', alignItems: 'center' },
  acresDisplay: { alignItems: 'center' },
  acresNumber: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  acresText: { fontSize: 14, color: '#777' },

  locationRow: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  locationInfo: { flex: 1, marginLeft: 12 },
  locationName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  locationDesc: { fontSize: 12, color: '#777', marginTop: 2 },
  changeBtn: { backgroundColor: '#F5F5F5', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  changeBtnText: { color: '#29563A', fontWeight: 'bold', fontSize: 13 },

  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFFFFF', padding: 20, borderTopLeftRadius: 24, borderTopRightRadius: 24, elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.1, shadowRadius: 10 },
  estimateRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 },
  estimateLabel: { fontSize: 14, color: '#777', marginBottom: 4 },
  estimateCalc: { fontSize: 13, color: '#333', fontWeight: '500' },
  totalPrice: { fontSize: 28, fontWeight: 'bold', color: '#29563A' },
  findBtn: { backgroundColor: '#29563A', paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  findBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});

export default BookingConfigScreen;