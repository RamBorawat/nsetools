import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
// import Homepage from './src/screens/Homepage';
import Test from './src/screens/Test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResult from './src/components/SearchResult';
import FlightDetails from './src/screens/FlightDetails';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import { enableScreens } from 'react-native-screens'
import LoginSignup from './src/Temple/LoginSignup';
import FeedbackRatingScreen from './src/Temple/FeedbackRatingScreen';
import FindTemple from './src/Temple/FindTemple';
import LivePoojaStreamScreen from './src/Temple/LivePoojaStreamScreen';
import PrasadDeliveryScreen from './src/Temple/PrasadDeliveryScreen';
import ProfileScreen from './src/Temple/ProfileScreen';
import SettingsScreen from './src/Temple/SettingsScreen';
import TempleDetailsScreen from './src/Temple/TempleDetailsScreen';
import TempleListingScreen from './src/Temple/TempleListingScreen';
import ViewTempleDetails from './src/Temple/ViewTempleDetails';
import PoojaBookingScreen from './src/Temple/PoojaBookingScreen';
import SignupPage from './src/Temple/SignupPage';
import Homepage from './src/Temple/Homepage';
import Home from './src/screens/Karigar/Home';
import EkasminHomeScreen from './src/Ekasmin/EkasminHomeScreen';



enableScreens(false)

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };
  const Stack = createNativeStackNavigator();

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <Homepage />
    // </SafeAreaView>
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      >
        {/* <Stack.Screen name="Test" component={Test} /> */}
        {/* <Stack.Screen
          name="Home"
          component={Homepage}
        /> */}


        <Stack.Screen name="Home" component={EkasminHomeScreen} />
        {/*         
        <Stack.Screen name="Home" component={LoginSignup} />
        <Stack.Screen name="TempleList" component={TempleListingScreen} />
        <Stack.Screen name="Findtemple" component={FindTemple} />
        <Stack.Screen name="TempleDetails" component={TempleDetailsScreen} />
        <Stack.Screen name="ViewTempleDetails" component={ViewTempleDetails} />
        <Stack.Screen name="LivePooja" component={LivePoojaStreamScreen} />
        <Stack.Screen name="PoojaBookingScreen" component={PoojaBookingScreen} />
        <Stack.Screen name="PrasadDelivery" component={PrasadDeliveryScreen} />
        <Stack.Screen name="Feedback" component={FeedbackRatingScreen} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="Homepage" component={Homepage} /> */}


        {/* <Stack.Screen name="Profile" component={Homepage} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="FlightDetails" component={FlightDetails} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
