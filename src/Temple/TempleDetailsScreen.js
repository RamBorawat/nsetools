import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const TempleDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { templeId } = route.params;
  const [temple, setTemple] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTemple = async () => {
      setLoading(true);
      // Fetch temple details from API or database
      const data = {
        id: 1,
        name: 'Temple 1',
        location: 'Chennai',
        deities: ['Lord Shiva', 'Goddess Parvati'],
        poojaPackages: [
          {
            id: 1,
            name: 'Basic Pooja',
            description: 'This is a basic pooja package that includes...',
            price: 100,
          },
          {
            id: 2,
            name: 'Special Pooja',
            description: 'This is a special pooja package that includes...',
            price: 500,
          },
        ],
      };
      setTemple(data);
      setLoading(false);
    };
    getTemple();
  }, []);

  const bookPooja = () => {
    navigation.navigate('PoojaBookingScreen', { templeId: templeId });
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        temple && <View>
          <Image
            source={{ uri: `https://picsum.photos/200/200?random=${templeId}` }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ fontSize: 18 }}>{temple.name}</Text>
          <Text style={{ fontSize: 14 }}>{temple.location}</Text>
          <Text style={{ fontSize: 14 }}>
            Deities: {temple.deities.join(', ')}
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18 }}>Pooja Packages:</Text>
            {temple.poojaPackages.map(PoojaPackage => (
              <View key={PoojaPackage.id}>
                <Text style={{ fontSize: 16 }}>{PoojaPackage.name}</Text>
                <Text style={{ fontSize: 14 }}>{PoojaPackage.description}</Text>
                <Text style={{ fontSize: 14 }}>Price: {PoojaPackage.price}</Text>
                <Button title="Book Now" onPress={bookPooja} />
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default TempleDetailsScreen;