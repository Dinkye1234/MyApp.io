import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('Home');
  const navigation = useNavigation();

  // Sample Posts Data
  const posts = [
    {
      id: '1',
      user: 'Jo Ko No',
      profileImage: require('../../assets/Jokhan.jpg'), // Dynamic profile image for user
      content: require('../../assets/nature.jpg'),
      caption: 'Had a great day out in nature! 🌲 #nature',
      likes: 120,
      comments: 5,
    },
    {
      id: '2',
      user: 'X.Aqyljan',
      profileImage: require('../../assets/Aqyl.png'), // Dynamic profile image for user
      content: require('../../assets/coffe.jpg'),
      caption: 'Enjoying a coffee ☕ #coffeelover',
      likes: 300,
      comments: 20,
    },
    {
      id: '3',
      user: 'A.Janat',
      profileImage: require('../../assets/janat.jpg'), // Dynamic profile image for user
      content: require('../../assets/walk.jpg'),
      caption: 'Morning walk vibes! #freshair',
      likes: 250,
      comments: 10,
    },
    {
      id: '4',
      user: 'S.Altynbek',
      profileImage: require('../../assets/Altu.jpg'), // Dynamic profile image for user
      content: require('../../assets/amazing.jpg'),
      caption: 'The view from here is amazing! #naturelover',
      likes: 180,
      comments: 8,
    },
  ];

  // Render Post Content
  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Image source={item.profileImage} style={styles.profilePic} />
          <Text style={styles.username}>{item.user}</Text>
        </View>

        {/* Post Image */}
        <Image source={item.content} style={styles.postImage} />

        {/* Caption */}
        <Text style={styles.caption}>{item.caption}</Text>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="heart" size={24} color="#FF005D" />
            <Text style={styles.actionText}>{item.likes} Likes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Icon name="chatbubble" size={24} color="#fff" />
            <Text style={styles.actionText}>{item.comments} Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // Bottom Navigation Bar Handler
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feed}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navItem, selectedTab === 'Home' && styles.activeNavItem]}
          onPress={() => handleTabChange('Home')}>
          <Icon name="home" size={30} color={selectedTab === 'Home' ? '#FF005D' : '#fff'} />
          <Text style={[styles.navText, selectedTab === 'Home' && styles.activeNavText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, selectedTab === 'Search' && styles.activeNavItem]}
          onPress={() => navigation.navigate("Search")}>
          <Icon name="search" size={30} color={selectedTab === 'Search' ? '#FF005D' : '#fff'} />
          <Text style={[styles.navText, selectedTab === 'Search' && styles.activeNavText]}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, selectedTab === 'Notifications' && styles.activeNavItem]}
          onPress={() => navigation.navigate('Notification')}>
          <Icon name="notifications" size={30} color={selectedTab === 'Notifications' ? '#FF005D' : '#fff'} />
          <Text style={[styles.navText, selectedTab === 'Notifications' && styles.activeNavText]}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, selectedTab === 'Profile' && styles.activeNavItem]}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={30} color={selectedTab === 'Profile' ? '#FF005D' : '#fff'} />
          <Text style={[styles.navText, selectedTab === 'Profile' && styles.activeNavText]}>Profile</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  feed: {
    width: '100%',
    marginBottom: 70, // Allow space for the bottom navigation
  },
  header: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  postContainer: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 250, // Adjust the height as needed
  },
  caption: {
    padding: 10,
    fontSize: 14,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    color: '#888',
  },
  navBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  activeNavItem: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    paddingVertical: 5,
  },
  activeNavText: {
    color: '#FF005D',
  },
});
