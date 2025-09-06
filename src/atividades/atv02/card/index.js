import { View, Text, Image } from 'react-native';

import styles from './styles';

import { Children } from 'react';

function Card({ nome, descricao, valor, imagem }) {
    return (
        <View style={styles.container}>

            <View style={styles.containerImagem}>
                <Image source={imagem} style={styles.imagem} />
            </View>
            

            <View style={styles.containerTexto}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.texto}>{descricao}</Text>
                <Text style={styles.titulo}>{valor}</Text>
            </View>


            
        </View>
    );
}

export default Card;

