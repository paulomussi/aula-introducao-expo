import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

// import Exemplo01 from './src/exemplos/ex01';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Atividade01 from './src/atividades/atv01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f6',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: RFPercentage(1.5),  
    paddingTop: Constants.statusBarHeight,
  },
});