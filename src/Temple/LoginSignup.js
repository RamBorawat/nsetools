import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity, TextInput, ScrollView,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StandardButton from "./components/StandardButton";
import StandardTextInput from "./components/StandardTextInput";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    // Logic to authenticate the user and navigate to the home screen
    Alert.alert('username ' + username + ' password ' + password + ' hai \n chal abhi homepage dekh')
    navigation.navigate('TempleList')
  };

  const handleNavigateToSignup = () => {
    navigation.navigate("SignupPage");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={{
        uri: 'https://png.pngtree.com/png-clipart/20240302/original/pngtree-hindu-temple-clip-art-drawing-png-image_14463767.png',
      }}
      />
      <Text style={styles.title}>Welcome to Pooja Paath</Text>
      <StandardTextInput
        placeholderText={"Mobile/Username"}
        val={username}
        onChangeVal={setUsername}
      />
      <StandardTextInput
        placeholderText={"Password"}
        val={password}
        onChangeVal={setPassword}
        isSecureTextEntry={true}
      />

      <StandardButton title={'Login'} action={handleLogin} />

      <TouchableOpacity onPress={handleNavigateToSignup}>

        <Text style={styles.signupLink}><Text style={{ color: '#000' }}>Don't have an account?</Text> Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
  },
  logo: {
    width: 160,
    height: 190,
    marginBottom: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'red'
  },
  input: {
    borderWidth: 1,
    borderColor: "orange",
    padding: 10,
    width: 300,
    marginBottom: 10,
    color: 'orange'
  },
  logInButton: {
    marginTop: 10,
    color: '#fff',
    backgroundColor: 'orange',
    padding: 10,
    paddingHorizontal: '30%',
    fontSize: 21,
    fontWeight: '600',
    borderRadius: 10,

  },
  signupLink: {
    marginTop: 30,
    color: "blue",

  },
});

export default LoginPage;
