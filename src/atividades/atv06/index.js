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
        
        if (resultado < 18.5) {
        alert('Abaixo do peso');
     }   else if (resultado >= 18.5 && resultado < 24.9) {
        alert('Peso normal');
     }   else if (resultado >= 25 && resultado < 29.9) {
        alert('Acima do peso');
     }  else if (resultado >= 30 && resultado < 34.9) {
        alert('Obesidade grau I');
     }  else if (resultado >= 35 && resultado < 39.9) {
        alert('Obesidade grau II');
     } else if (resultado >= 40) {
        alert('Obesidade grau III');  
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