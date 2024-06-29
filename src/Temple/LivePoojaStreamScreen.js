import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LivePoojaStreamScreen = () => {
  const [isLive, setIsLive] = useState(false);
  const navigation = useNavigation()
  const handleStartLiveStream = () => {
    setIsLive(true);
  };

  const handleStopLiveStream = () => {
    setIsLive(false);
    navigation.navigate('Feedback')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Pooja Stream</Text>
      {isLive ? (
        <Button title="Stop Live Stream" onPress={handleStopLiveStream} />
      ) : (
        <Button title="Start Live Stream" onPress={handleStartLiveStream} />
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
});

export default LivePoojaStreamScreen;