import { View, Text, Image } from 'react-native';

import styles from './styles';

// import img from '../../../assets/sp1.jpg';
import img from '../../../assets/sp2.jpg';
//import img from '../../../assets/sp3.jpg';
// import img from '../../../assets/sp4.jpg';

import Mensagem from './mensagem';

function Atividade02() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Image source={img} style={styles.imagem} />

            {/* <Mensagem titulo={'ERRO'}>Você não clicou corretamente!</Mensagem>
            <Mensagem titulo={'SUCESSO'}> Acesso permitido </Mensagem>
            <Mensagem titulo={'AVISO'}> O tempo acabou!</Mensagem> */}
        </View>
    );
}

export default Atividade02;