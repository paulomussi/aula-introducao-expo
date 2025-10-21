import { Button, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#65637cff',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        entradaIMC:{
            flex: 1,
            flexDirection: 'row',
        },
        paragraph:{
            fontSize: RFPercentage(2.5),
            color: 'lightgray',
            fontWeight: 'bold',
            marginTop: 60,
        },
        input:{
            height: 80,
            textAlign: 'center',
            width: '50%',
            fontSize: RFPercentage(3),
            marginTop: 24,
            color: 'lightgray',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'lightgray',  
            width: '40%',     
            marginHorizontal: 12,
            marginTop: 100,
        },
        button:{
            backgroundColor: '#89ffa5',
            borderRadius: 10,
        },
        buttonText:{
            fontSize: RFPercentage(2.5),
            padding: 20,
            alignSelf: 'center',
            color:'#4a8871ff',
            fontWeight: 'bold',
           
        },
        resultados:{
            alignSelf: 'center',
            fontSize: RFPercentage(2.5),
            color:'lightgray',
            padding: 15,
            marginBottom: 200,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'lightgray',
            marginTop: 20,
        },
    }
);




export default styles;
