import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Index(){

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);
    
    function Soma() {
        setTotal (n1+n2)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica</Text>

            <Text style={styles.txtLabel}> 1º número</Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setN1(entrada)}
                value={n1}
            />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.txtLabel}> 2º número </Text>
            <TextInput 
                style={styles.txtEntrada}
                onChangeText={(entrada) => setN2(entrada)}
                value={n2}
                />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.txtLabel}> Total </Text>
            <TextInput
                style={styles.txtEntrada}
                editable={false}
                value={total}
            />

            <TouchableOpacity style={styles.button} onPress={() => Soma()}>
                <Text style={styles.txtButton}> + </Text>
            </TouchableOpacity>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FF80AB',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C51162',
    },
    txtSaida: {
        margin: 6,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e91e63',
    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 25,
        borderColor: '#e91e63',
        height: 60,
        color: '#e53935',
        borderRadius: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#e91e63',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        
    },
    txtButton: {
        fontSize: 25,
        color: '#ff80ab',
        textAlign: 'center',
    },
    txtLabel: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#c51162'
    },
});