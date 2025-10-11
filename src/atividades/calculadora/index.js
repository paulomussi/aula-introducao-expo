import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'; // 👈 Importando estilos

export default function calculadora(){
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [total, setTotal] = useState(0);
}

// return (
    // <View>
    //   <Text style={styles.title}>Calculadora</Text>
    // </View>
// );