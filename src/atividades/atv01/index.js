import { View, Text } from 'react-native';

import styles from './styles';

export default function Atividade01() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 01</Text>
            <Text style={styles.txtPalmeiras}>O Palmeiras não tem mundial</Text>
            <Text style={styles.txtSP}>São Paulo maior do Brasil</Text>
            <Text style={styles.txt}>Introdução React Native com Expo</Text>
            <Text style={styles.txt}>Introdução React Native com Expo</Text>
            <Text style={styles.txt}>Introdução React Native com Expo</Text>
        </View>
    );
}