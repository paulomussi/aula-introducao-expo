import { View, Text, Image } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/sp1.jpg';
import img2 from '../../../assets/sp2.jpg';
import img3 from '../../../assets/sp3.jpg';
import img4 from '../../../assets/sp4.jpg';

import Mensagem from './mensagem';

function Atividade02() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>
            
        <Mensagem titulo={'Camiseta Branca'}>Camiseta branca com listras vermelho, branco e preto.
        <Image source={img1} style={styles.imagem} />
        </Mensagem>

        <Mensagem titulo={'Camiseta Branca'}>Camiseta branca com listras vermelho, branco e preto.
        <Image source={img2} style={styles.imagem}/>
        </Mensagem>

        <Mensagem titulo={'Camiseta Branca'}>Camiseta branca com listras vermelho, branco e preto.
        <Image source={img3} style={styles.imagem} />
        </Mensagem>

        <Mensagem titulo={'Camiseta Branca'}>Camiseta branca com listras vermelho, branco e preto.
        <Image source={img4} style={styles.imagem} />
        </Mensagem>
{/*     
            <Image source={img2} style={styles.imagem} />
            <Image source={img3} style={styles.imagem} />
            <Image source={img4} style={styles.imagem} /> */}

            {/* 
            <Mensagem titulo={'SUCESSO'}> Acesso permitido </Mensagem>
            <Mensagem titulo={'AVISO'}> O tempo acabou!</Mensagem> */}
        </View>
    );
}

export default Atividade02;