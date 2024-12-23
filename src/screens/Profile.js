import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';  // Correct import of StatusBar

export default function ProfileScreen() {
  // Example function for the 'Edit Profile' button
  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "This feature will allow users to edit their profile.");
  };

  // Example function for the 'Follow' button
  const handleFollow = () => {
    Alert.alert("Follow", "You have followed this user.");
  };

  // Example function for the 'Message' button
  const handleMessage = () => {
    Alert.alert("Message", "Start messaging this user.");
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('../../assets/Profile.jpg')} // Replace with actual profile image URL
          style={styles.profilePicture}
        />
      </View>

      {/* User Information */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>Dn Kye</Text>
        <Text style={styles.userBio}>Software Developer | Sometimes crazy boy | Sport car interesting</Text>

        {/* Social Media Info */}
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <Icon name="logo-instagram" size={30} color="#E1306C" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaButton}>
            <Icon name="logo-twitter" size={30} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaButton}>
            <Icon name="logo-facebook" size={30} color="#4267B2" />
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton} onPress={handleMessage}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Status Bar with auto style */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },
  profilePictureContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  userInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userBio: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialMediaButton: {
    marginHorizontal: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  editProfileButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginRight: 10,
  },
  followButton: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginRight: 10,
  },
  messageButton: {
    backgroundColor: '#4267B2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
