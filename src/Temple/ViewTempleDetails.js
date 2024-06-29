import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
// import axios from 'axios';

const ViewTempleDetails = ({ route }) => {
  const { templeId } = route.params;
  const [temple, setTemple] = useState(null);

  useEffect(() => {
    // TODO: Implement temple details fetching logic
  }, []);

  return (
    <View>
      <Text>Temple Details</Text>
      {temple && (
        <>
          <Image source={{ uri: temple.image }} />
          <Text>{temple.name}</Text>
          <Text>{temple.address}</Text>
          <Text>{temple.description}</Text>
          <Button title="Book Pooja" onPress={() => navigation.navigate('BookPooja', { templeId })} />
        </>
      )}
    </View>
  );
};

export default ViewTempleDetails;