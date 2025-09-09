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
    function handleDecrementar() {
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

            <Text style={styles.txt}>{numero}</Text>

            <View>
                <View>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => handleDecrementar()}
                    >
                        <Text style={styles.txtBotao}>-</Text>
                    </TouchableOpacity>
                </View>


                <View >
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => handleIncrementar()}
                    >
                        <Text style={styles.txtBotao}>+</Text>
                    </TouchableOpacity>
                </View>


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