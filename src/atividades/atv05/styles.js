import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#b8b5e4ff',
    padding: 8,
  },
  paragraph: {
    margin: 6,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f0b44ff',
  },
  txtSaida: {
    margin: 6,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#17143dff',
  },
  txtEntrada: {
    borderWidth: 4,
    textAlign: 'center',
    fontSize: 25,
    borderColor: '#17143dff',
    height: 60,
    color: '#121166ff',
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#17143dff',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,     
    fontSize: RFPercentage(2),
    width: '22%',
  },
  buttonview: {
    flexDirection: 'row',
    width: '95%',
    gap: RFPercentage(2),
    alignItems: 'center',
  },
  buttonlimpar: {
    backgroundColor: '#17143dff',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,     
    fontSize: RFPercentage(2),
    width: '90%',
  },
  txtButton: {
    fontSize: RFPercentage(3.5),
    color: '#7f82aaff',
    textAlign: 'center',
  },
  txtLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0f0b44ff',
  },
});

export default styles;
