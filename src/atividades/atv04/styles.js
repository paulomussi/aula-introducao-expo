import { StyleSheet, TextInput } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#536c8da2',
            alignItems: 'center',
        },
        titulo: {
            fontSize: RFPercentage(5),
            // fontSize: RFValue(25),
            fontWeight: 'bold',
            color: '#62a07b',
            margin: RFPercentage(6),
            marginTop: RFPercentage(5),
        },
        txt:{
            fontSize: RFPercentage(2.5),
        },
        input:{
            borderWidth: RFPercentage(0.5),
            borderColor: '#62a07b',
            width: '80%',
            borderRadius: RFPercentage(1.5),
            padding: RFPercentage(1.5),
            fontSize: RFPercentage(2),
            textAlign: 'center',
        },
        botao:{
            color:'#62a07b',
            fontSize: RFPercentage(2),
            padding: RFPercentage(1),
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            margin: RFPercentage(2.6),
            borderColor: '#62a07b',
            width: '80%',
            alignItems: 'center',
            backgroundColor:'#62a07b',
        },
        txtBotao:{
            fontSize: RFPercentage(2.5),
            color: '#fafafa',
        },
        txtNomeSobre:{
            fontSize: RFPercentage(3),
            color: '#613860',
            marginTop : RFPercentage(4),
            margin: RFPercentage(1),
            textAlign: 'left',
            
                  
        },
    }
);
 
export default styles;