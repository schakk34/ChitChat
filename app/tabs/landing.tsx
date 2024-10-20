import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TabOneScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Poppins_600SemiBold,
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Optionally, you can show a loading indicator here
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* Section 1: Welcome and Login */}
        <View style={styles.sectionOne}>
          <Text style={styles.sectionTitle}>We Are ChitChat</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Section 2: Info Boxes */}
        <View style={styles.sectionTwo}>
          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Discover</Text>
              <Text style={styles.infoText}>
                Find people in your community or organization with similar backgrounds, interests, and experiences. Explore your community beyond just your immediate team and colleagues, and let Chit Chat's curated recommendation system introduce you to role models, mentors, future friends, and connections beyond the scope of your office.
              </Text>
            </View>

            <Icon name="arrow-down" size={30} color="#000" style={styles.arrowIcon} />

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Connect</Text>
              <Text style={styles.infoText}>
                Make plans to chat more seamless than ever before! ChitChat optimizes the coffee chat scheduling process by allowing users to send detailed chat requests, complete with a proposed location, date, time, and even discussion topic tags. Don't worry, your plans won't fall through in between texts anymore!
              </Text>
            </View>

            <Icon name="arrow-down" size={30} color="#000" style={styles.arrowIcon} />

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Network</Text>
              <Text style={styles.infoText}>
                Grow and track your network to gain access to exclusive company networking events, flex your ChatStreak, and make the company ChitChat leaderboard! We're here not just to help you make connections, but also to keep them!
              </Text>
            </View>
          </View>
        </View>

        {/* Section 3: How We Work */}
        <View style={styles.sectionThree}>
          <Text style={styles.sectionTitle}>How We Work</Text>
          <Text style={styles.sectionDescription}>
            You can schedule a coffee chat through our app by selecting a convenient time and choosing a topic of interest. Connect with like-minded individuals and enhance your networking experience!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionOne: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3E5FC',
    padding: 20,
  },
  sectionTwo: {
    flexGrow: 0,
    backgroundColor: '#FFE082',
    padding: 50,
  },
  sectionThree: {
    flexGrow: 0,
    backgroundColor: '#FFCCBC',
    padding: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center items in the column
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  infoBox: {
    flexGrow: 0,
    marginHorizontal: 150, // Adjusted for better spacing
    padding: 20,
    marginBottom: 20, // Space between the info boxes and arrows
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  infoTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    lineHeight: 30,
  },
  sectionDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  arrowIcon: {
    marginVertical: 10, // Space around the arrow
    alignSelf: 'center', // Center the arrow horizontally
  },
});