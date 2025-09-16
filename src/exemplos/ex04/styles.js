import { StyleSheet, TextInput } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'rgba(227, 224, 245, 1)',
            alignItems: 'center',
        },
        titulo: {
            fontSize: RFPercentage(5),
            // fontSize: RFValue(25),
            fontWeight: 'bold',
            color: '#5a5072ff',
            margin: RFPercentage(5),
        },
        txt:{
            fontSize: RFPercentage(2.5),
        },
        input:{
            borderWidth: RFPercentage(0.5),
            borderColor: '#5a5072ff',
            width: '80%',
            borderRadius: RFPercentage(1.5),
            padding: RFPercentage(1.5),
            fontSize: RFPercentage(2),
            textAlign: 'center'
        },
        botao:{
            color:'rgba(15, 5, 51, 1)',
            fontSize: RFPercentage(2),
            padding: RFPercentage(1),
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            margin: RFPercentage(2.6),
            borderColor: '#5a5072ff',
            width: '80%',
            alignItems: 'center',
            backgroundColor:'#5a5072ff',
        },
        txtBotao:{
            fontSize: RFPercentage(2.5),
            color: '#fafafa',
        },
    }
);
 
export default styles;