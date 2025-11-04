import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function ListItem({ item, deleteItem }) {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => deleteItem(item.id)}
    >
      <Text style={styles.itemText}>{item.text}</Text>
      <Ionicons name="trash" size={20} color="red" />
    </TouchableOpacity>
  );
}
