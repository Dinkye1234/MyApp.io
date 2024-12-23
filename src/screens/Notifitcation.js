import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const notifications = [
  { id: '1', name: 'Jo Ko No', action: 'liked your photo', time: '2 minutes ago', imageUrl: require('../../assets/Jokhan.jpg') },
  { id: '2', name: 'X.Aqyljan', action: 'commented on your post', time: '1 hour ago', imageUrl: require('../../assets/Aqyl.png')},
  { id: '3', name: 'A.Janat', action: 'started following you', time: '5 hours ago', imageUrl: require('../../assets/janat.jpg') },
  { id: '4', name: 'S.Altynbek', action: 'liked your story', time: '1 day ago', imageUrl: require('../../assets/Altu.jpg')},
];

export default function Notifications() {
  // Render a single notification
  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.imageUrl} style={styles.profilePic} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationText}>
          <Text style={styles.username}>{item.name}</Text> {item.action}
        </Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        style={styles.notificationList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    paddingTop: 20,
  },
  notificationList: {
    paddingHorizontal: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    color: '#fff',
  },
  username: {
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
