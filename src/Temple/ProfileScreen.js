import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const [user, setUser] = useState({username:'Ram Borawat',email:'ram@gmail.com'});
  const navigation = useNavigation()
  // Logic to fetch the user data from the backend

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {user && (
        <>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{user.username}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
          <Button
            title="Edit Profile"
            onPress={() => {
              // Logic to navigate to the edit profile screen
              navigation.navigate('Setting')
            }}
          />
        </>
      )}
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
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;