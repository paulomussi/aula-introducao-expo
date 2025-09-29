import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ff1',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        titulo: {
            fontSize: RFPercentage(5),
            // fontSize: RFValue(25),
            fontWeight: 'bold',
            color: '#777',
        },
        txt:{
            fontSize: RFPercentage(2.5),
        },
        botao:{
            backgroundColor: '#22a2d4ff',
            width: '60%',
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1),
            alignItems:'center',
        },
        txtBotao:{
            color:'rgba(26, 21, 95, 1)',
            fontSize: RFPercentage(2),
        },
    }
);
 
export default styles;