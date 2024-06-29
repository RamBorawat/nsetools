import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Test = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
  };

  const handleSignup = () => {
    // TODO: Implement signup logic
  };

  return (
    <View>
      <Text>Login/Signup</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Test;
