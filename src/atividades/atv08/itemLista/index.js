import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function ListItem({ item, deleteItem }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
      
      
    <TouchableOpacity
      onPress={() => deleteItem(item.id)}
    >
      
      <MaterialIcons name="delete-outline" size={20} color="red" />
    </TouchableOpacity>
    </View>
  );
}
