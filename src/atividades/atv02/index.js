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
                valor={'R$ 500,00'}
            />        

            <Card 
                imagem={img2}
                nome={'Vermelha Preta e Branca'}
                descricao={'Camiseta 1 Tradicional'}
                valor={'R$ 400,00'}
            />                  

            <Card 
                imagem={img3}
                nome={'Camiseta Preta com Vermelho'}
                descricao={'Camiseta 1 Tradicional'}
                valor={'R$ 350,00'}
            />                  

            <Card 
                imagem={img4}
                nome={'Camiseta Azul Especial'}
                descricao={'Camiseta 1 Tradicional'}
                valor={'R$ 380,00'}
            />                               
        
        </View>
       
        
       
    );
}

export default Atividade02;