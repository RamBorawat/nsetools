import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import YouTube from "react-native-youtube";

const LivePoojaStreamContainer = ({ link }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <View style={styles.container}>
      {isReady && <YouTube uri={link} style={styles.video} controls={true} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    alignSelf: "stretch",
    height: 300,
  },
});

export default LivePoojaStreamContainer;