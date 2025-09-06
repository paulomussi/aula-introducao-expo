import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            padding: 8,
            borderRadius: 20,
        },
        titulo: {
            fontSize: RFPercentage(3),
            color: 'deepskyblue',
            fontWeight: 'bold',
            borderWidth: 2,
            borderColor: 'deepskyblue',
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            width: '100%',
            height: 80,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 20,
        },
        // imagem: {
        //     width: '40%',
        //     height: '100',
        //     resizeMode: 'contain',
        // },
    }
);
 
export default styles;