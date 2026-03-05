<TouchableOpacity
  style={[styles.card, { borderColor: "#1565C0" }]}
  onPress={() => navigation.navigate("OperatorDashboard")}
>
  <Text style={styles.cardEmoji}>⚙️</Text>
  <Text style={styles.cardTitle}>I am an Operator</Text>
  <Text style={styles.cardDesc}>Manage and accept bookings</Text>
</TouchableOpacity>;
