import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'deepskyblue',
        borderRadius: RFPercentage(0.6),
        width: '90%',
        padding: 8,
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: RFPercentage(1),
        flexDirection: 'row',
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: '#121212',
        fontWeight: 'bold',
        marginBottom: RFPercentage(1),
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#fafafa',
        
    },
     containerImagem:{
        width: '30%',
        
     },
     containerTexto:{
        width: '70%',        
     },
     imagem: {
        height: RFPercentage(10),
        width: RFPercentage(10),
        resizeMode: 'stretch',
    },
});

export default styles;