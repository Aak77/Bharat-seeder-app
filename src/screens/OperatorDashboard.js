import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const REQUESTS_DATA = [
  { id: '1', farmer: 'Rajesh Kumar', location: 'Panvel, MH', area: '5 Acres', crop: 'Rice' },
  { id: '2', farmer: 'Suresh Patil', location: 'Karjat, MH', area: '3 Acres', crop: 'Wheat' },
];

const OperatorDashboard = () => {
  const renderRequest = ({ item }) => (
    <View style={styles.requestCard}>
      <View style={styles.cardHeader}>
        <Ionicons name="person-circle" size={40} color="#1565C0" />
        <View style={styles.headerInfo}>
          <Text style={styles.farmerName}>{item.farmer}</Text>
          <Text style={styles.cropText}>Crop: {item.crop}</Text>
        </View>
      </View>

      <View style={styles.detailsRow}>
        <View style={styles.detailItem}>
          <MaterialIcons name="location-on" size={18} color="#666" />
          <Text style={styles.detailLabel}>{item.location}</Text>
        </View>
        <View style={styles.detailItem}>
          <MaterialIcons name="fullscreen" size={18} color="#666" />
          <Text style={styles.detailLabel}>{item.area}</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={[styles.btn, styles.acceptBtn]}>
          <Text style={styles.btnText}>ACCEPT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.rejectBtn]}>
          <Text style={styles.btnText}>DECLINE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Incoming Seeding Requests</Text>
      <FlatList
        data={REQUESTS_DATA}
        renderItem={renderRequest}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#1A237E', marginTop: 20 },
  requestCard: { backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 16, elevation: 3 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  headerInfo: { marginLeft: 12 },
  farmerName: { fontSize: 18, fontWeight: '700', color: '#333' },
  cropText: { fontSize: 14, color: '#1565C0', fontWeight: '600' },
  detailsRow: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 12 },
  detailItem: { flexDirection: 'row', alignItems: 'center' },
  detailLabel: { marginLeft: 4, color: '#666', fontSize: 14 },
  actionButtons: { flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' },
  btn: { flex: 0.48, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  acceptBtn: { backgroundColor: '#2E7D32' },
  rejectBtn: { backgroundColor: '#F44336' },
  btnText: { color: '#fff', fontWeight: 'bold', letterSpacing: 0.5 }
});

export default OperatorDashboard;