import { useState } from 'react';

import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo03() {

    // let numero = 10;

    const [numero, setNumero] = useState(10);

    function handleIncrementar() {
        setNumero(numero + 1)
        // console.log(numero);
    }
    function handleDiminuir() {
        setNumero(numero - 1)
    }
    function handleLimpar() {
        setNumero(0)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            {/* <Button
                onPress={() => {alert('Alguém tocou no botão!')}}
                title='Alerta'
                color='#973'
                accessibilityLabel='Botão de alerta'
            /> */}


          
                <View style={styles.botaoMenor}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => handleDiminuir()}>
                        <Text style={styles.txtBotao}>-</Text>
                    </TouchableOpacity>              
                
            <Text style={styles.txt}>{numero}</Text>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => handleIncrementar()}>
                        <Text style={styles.txtBotao}>+</Text>
                    </TouchableOpacity>
                </View>




            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleLimpar()}
            >
                <Text style={styles.txtBotao}>Limpar</Text>
            </TouchableOpacity>

        </View>
    );
}