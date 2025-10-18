import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function Atividade06() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);


    function calcularIMC() {
       const valor = massa / (altura * altura);
        setResultado(valor);
        
          if (valor < 18.5) {
        alert('Abaixo do peso');
     }
     }

   

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Calculadora IMC</Text>

            <View style={styles.entradaIMC}>
                <TextInput placeholder='Massa'
                placeholderTextColor='lightgray'
                keyboardType='numeric' 
                style={styles.input} 
                onChangeText={(entrada) => setMassa(entrada)}
                />

                <TextInput placeholder='Altura' 
                placeholderTextColor='lightgray'
                keyboardType='numeric' 
                style={styles.input} 
                onChangeText={(entrada) => setAltura(entrada)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => calcularIMC()}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

        </View>
    );
}