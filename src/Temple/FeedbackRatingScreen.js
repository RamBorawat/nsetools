import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet,TextInput } from "react-native";
// import Rating from "@react-native-community/rating";
const Rating = ({count})=> <View><Text>{count}</Text></View>

const FeedbackRatingScreen = () => {
  const navigation = useNavigation()
  const [templeRating, setTempleRating] = useState(0);
  const [poojaRating, setPoojaRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmitFeedback = () => {
    // Logic to submit the feedback and ratings
    navigation.navigate('Setting')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback and Rating</Text>
      <Text style={styles.label}>Temple Rating:</Text>
      <Rating
        style={styles.rating}
        count={5}
        startingValue={templeRating}
        onChange={setTempleRating}
      />
      <Text style={styles.label}>Pooja Rating:</Text>
      <Rating
        style={styles.rating}
        count={5}
        startingValue={poojaRating}
        onChange={setPoojaRating}
      />
      <Text style={styles.label}>Feedback:</Text>
      <TextInput
        style={styles.input}
        value={feedback}
        onChangeText={setFeedback}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Submit Feedback" onPress={handleSubmitFeedback} />
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
  rating: {
    width: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 300,
    marginBottom: 10,
  },
});

export default FeedbackRatingScreen;