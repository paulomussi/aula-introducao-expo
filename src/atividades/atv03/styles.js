import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'rgba(173, 161, 201, 1)',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        titulo: {
            fontSize: RFPercentage(5),
            // fontSize: RFValue(25),
            fontWeight: 'bold',
            color: 'rgba(26, 21, 95, 1)',
            marginTop: 150,
            marginBottom: 100,
        },
        txt:{
            fontSize: RFPercentage(2.5),
            marginBottom: 100,
        },
        botao:{
            backgroundColor: 'rgba(26, 21, 95, 1)',
            width: '60%',
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1),
            alignItems:'center',
        },
        txtBotao:{
            color:'rgba(255, 255, 255, 1)',
            fontSize: RFPercentage(2),
        },
        botaoMenor:{
            flexDirection: 'row',
        },

    }
);
 
export default styles;