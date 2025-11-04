import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { RFPercentage } from 'react-native-responsive-fontsize';

import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02';
import Exemplo03 from './src/exemplos/ex03';
import Exemplo04 from './src/exemplos/ex04';
import Exemplo06 from './src/exemplos/ex06';



import Atividade01 from './src/atividades/atv01';
import Atividade02 from './src/atividades/atv02';
import Atividade03 from './src/atividades/atv03';
import Atividade04 from './src/atividades/atv04';
import Atividade05 from './src/atividades/atv05';
import Atividade05Correcao from './src/atividades/atv05-correcao';
import Atividade06 from './src/atividades/atv06';

import Atividade08 from './src/atividades/atv08';

import calculadora from './src/atividades/calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade08/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080333ff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: RFPercentage(1.5),  
    paddingTop: Constants.statusBarHeight,
  },
});