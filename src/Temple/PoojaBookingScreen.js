import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Calendar,
  CalendarList,
  Agenda,
} from "react-native-calendars";

const PoojaBookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [poojaPackages, setPoojaPackages] = useState([
    {id:'1',name:'Bramha'},
    {id:'2',name:'Vishnu'},
    {id:'3',name:'Mahesh'},
  ]);
  const [selectedPoojaPackage, setSelectedPoojaPackage] = useState(null);
  const navigation= useNavigation()
  // Logic to fetch the available pooja packages and display them

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePoojaPackageSelection = (Poojapackage) => {
    setSelectedPoojaPackage(Poojapackage);
  };

  const handleBookPooja = () => {
    // Logic to book the pooja with the selected date, package, and any additional details
    navigation.navigate('PrasadDelivery')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pooja Booking</Text>
      <Calendar
        // current={selectedDate}
        onDayPress={day => {
          console.log('selected day', day);
          setSelectedDate(day.dateString);
          
        }}
        markedDates={{
          [selectedDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'red'}
        }}
        style={styles.calendar}
      />
      <ScrollView style={styles.poojaPackagesContainer}>
        {poojaPackages.map((PoojaPackage) => (
          <Button
          color={selectedPoojaPackage && selectedPoojaPackage.id==PoojaPackage.id?'red':'orange'}
            key={PoojaPackage.id}
            title={PoojaPackage.name}
            onPress={() => handlePoojaPackageSelection(PoojaPackage)}
          />
        ))}
      </ScrollView>
      <Button title="Book Pooja"  onPress={handleBookPooja} />
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
  calendar: {
    width: 350,
    height: 350,
  },
  poojaPackagesContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
});

export default PoojaBookingScreen;