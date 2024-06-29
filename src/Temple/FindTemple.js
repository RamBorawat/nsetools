import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import * as Location from 'expo-location';

const FindTemple = () => {
  const [location, setLocation] = useState(null);
  const [templeName, setTempleName] = useState('');

  const handleLocation = async () => {
    // TODO: Implement location logic
  };

  const handleSearch = () => {
    // TODO: Implement search logic
  };

  return (
    <View>
      <Text>Find Temple</Text>
      <TextInput
        placeholder="Temple Name"
        value={templeName}
        onChangeText={setTempleName}
      />
      <Button title="Location" onPress={handleLocation} />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default FindTemple;