import { View, Text } from 'react-native';

import styles from './styles';

import { Children } from 'react';

function Card({nome, descricao, valor, imagem}){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{nome}</Text>
            <Text style={styles.texto}>{descricao}</Text>
            <Text style={styles.titulo}>{valor}</Text>
            <Image source={imagem} style={styles.imagem} />
        </View>
    );
}

export default Card;

