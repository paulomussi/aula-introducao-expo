import { Button, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#65637cff',
            allignItems: 'center',
            justifyContent: 'space-evenly',
        },
        entradaIMC:{
            flex: 1,
            flexDirection: 'row',
        },
        paragraph:{
            fontSize: RFPercentage(2.5),
        },
        input:{
            height: 80,
            textAlign: 'center',
            width: '50%',
            fontSize: RFPercentage(3),
            marginTop: 24,
            color: 'lightgray',
        },
        button:{
            backgroundColor: '#89ffa5',
        },
        buttonText:{
            fontSize: RFPercentage(2.5),
            padding: 30,
            alignSelf: 'center',
            color:'#6dc4a4',
            fontWeight: 'bold',
        },
        resultados:{
            alignSelf: 'center',
            fontSize: RFPercentage(2.5),
            color:'lightgray',
            padding: 15,
        },
    }
);




export default styles;
