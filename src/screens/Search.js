import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Search'); // State for tab selection

  // Function to handle search button press
  const handleSearch = () => {
    Alert.alert("Searching...");
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchs}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#fff"
          style={styles.inp}
        />
      </View>

      {/* Search Button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleSearch}>
        <Icon name="search" size={30} color="#fff" />
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5b041',
    alignItems: 'center',
    paddingHorizontal: 20, // Adds some horizontal padding
  },
  searchs: {
    backgroundColor: '#555',
    borderRadius: 25,
    width: '100%', // Full width of container (with padding)
    marginBottom: 20, // Spacing below the input
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20, // Adds vertical padding for input space
  },
  inp: {
    color: '#fff',
    fontSize: 18,
  },
  btnContainer: {
    width: '100%', // Full width of container
    paddingHorizontal: 20, // Align the button with input
  },
  btn: {
    backgroundColor: '#007BFF', // Button color
    borderRadius: 15,
    paddingVertical: 12, // Padding for the button
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // To align the icon and text horizontally
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Adds some space between the icon and text
  },
});
