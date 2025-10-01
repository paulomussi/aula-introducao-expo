import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade04() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');

    function handleExibeNomeCompleto() {
        const completo = `${nome} ${sobrenome}`;
        setNomeCompleto(completo);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 04</Text>

            <Text style={styles.txtNomeSobre}>Nome</Text>
            <TextInput
                onChangeText={setNome}
                placeholder=''
                keyboardType='default'
                style={styles.input}
            />

            <Text style={styles.txtNomeSobre}>Sobrenome</Text>
            <TextInput
                onChangeText={setSobrenome}
                placeholder=''
                keyboardType='default'
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={handleExibeNomeCompleto}>
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </TouchableOpacity>

            <Text style={styles.txt}>{nomeCompleto}</Text>
        </View>
    );
}

/*
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo01() {

    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState('Valor Inicial');
    const [mensagem, setMensagem] = useState('');
    
    function handleExibeMensagem(){
        setMensagem(txt2);
        setTxt2('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
           
            <Text style={styles.txt}>{texto}</Text>

            <TextInput
                onChangeText={setTexto}
                placeholder='texto de fundo'
                keyboardType='ascii-capable'
                style={styles.input}
            //editable={false}
            //multiline
            //numberOfLines={4}
            //securityTextEntry
            />

            <Text style={styles.txt}>{mensagem}</Text>
            <TextInput
                value={txt2}
                onChangeText={setTxt2}
                placeholder='Digite sua mensagem'
                keyboardType='ascii-capable'
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleExibeMensagem()}>
                    <Text style={styles.txtBotao}>Exibir texto</Text>                
            </TouchableOpacity>

        </View>
    );
}
*/