import { View, Text, Image } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/sp1.jpg';
import img2 from '../../../assets/sp2.jpg';
import img3 from '../../../assets/sp3.jpg';
import img4 from '../../../assets/sp4.jpg';

import Card from './card';

function Atividade02() {
    return(
        
         <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>
            
            <Card 
                imagem={img1}
                nome={'Camiseta Branca'}
                descricao={'Camiseta 1 Tradicional'}
                valor={'R$ 500'}
            />         
            
        
        </View>
       
        
       
    );
}

export default Atividade02;