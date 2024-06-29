import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet,TextInput } from "react-native";

const PrasadDeliveryScreen = () => {
  const [selectedPrasad, setSelectedPrasad] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const navigation = useNavigation()
  const handlePrasadSelection = (prasad) => {
    setSelectedPrasad(prasad);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleDeliveryAddressChange = (address) => {
    setDeliveryAddress(address);
  };

  const handleOrderPrasad = () => {
    // Logic to place the order for prasad delivery
    // LivePooja
navigation.navigate('LivePooja')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prasad Delivery</Text>
      <Text style={styles.label}>Select Prasad:</Text>
      {/* Logic to display the available prasad options and handle selection */}
      <Text style={styles.label}>Quantity:</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={handleQuantityChange}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Delivery Address:</Text>
      <TextInput
        style={styles.input}
        value={deliveryAddress}
        onChangeText={handleDeliveryAddressChange}
      />
      <Button title="Order Prasad" onPress={handleOrderPrasad} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 300,
    marginBottom: 10,
  },
});

export default PrasadDeliveryScreen;