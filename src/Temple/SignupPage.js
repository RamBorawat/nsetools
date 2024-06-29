import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity, TextInput,
  ScrollView,
  Alert
} from "react-native";
import StandardTextInput from "./components/StandardTextInput";
import StandardButton from "./components/StandardButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";



const SignupPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToOurTerms, setagreedToOurTerms] = useState(true);


  const handleSignup = () => {
    // Logic to create a new user and navigate to the home screen
    navigation.navigate('TempleList')
  };

  const handleNavigateToLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={{
        uri: 'https://png.pngtree.com/png-clipart/20240302/original/pngtree-hindu-temple-clip-art-drawing-png-image_14463767.png',
      }}
      />
      <Text style={styles.title}>Welcome to Pooja Paath</Text>
      <StandardTextInput
        placeholderText={"Mobile"}
        val={username}
        onChangeVal={setUsername}
      />

      <StandardTextInput
        placeholderText={"Name"}
        val={name}
        onChangeVal={setname}
      />
      <StandardTextInput
        placeholderText={"Password"}
        val={password}
        onChangeVal={setPassword}
        isSecureTextEntry={true}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>

        <BouncyCheckbox
          size={25}
          fillColor="orange"
          unFillColor="#FFFFFF"
          iconStyle={{ borderColor: "red" }}
          // innerIconStyle={{ borderWidth: 1 }}
          innerIconStyle={{
            borderRadius: 2, // to make it a little round increase the value accordingly
          }}

          onPress={(isChecked) => { setagreedToOurTerms(x => !isChecked) }}
        />

        <Text style={{ fontSize: 11, color: 'blue' }} onPress={() => Alert.alert('Terms and conditions will be shown')}><Text style={{ color: '#000' }}>agree to our </Text> Terms & conditions </Text>
      </View>
      <StandardButton title={'Signup'} action={handleSignup} disabled={agreedToOurTerms} />


      <TouchableOpacity onPress={handleNavigateToLogin}>

        <Text style={styles.loginLink}><Text style={{ color: '#000' }}>already have an account</Text> Sign in</Text>
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
    borderColor: "#ccc",
    padding: 10,
    width: 300,
    marginBottom: 10,
  },
  loginLink: {
    marginTop: 30,
    color: "blue",
  },
});

export default SignupPage;