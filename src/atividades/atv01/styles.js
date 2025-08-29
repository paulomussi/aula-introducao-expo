import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#e6c5d7dc',
            allignItems: 'center',
            
        },
        titulo: {
            fontSize: RFPercentage(5),
            // fontSize: RFValue(25),
            fontWeight: 'bold',
            color: '#8d5b47ff',
            padding: 20,
            margin: 10,
            fontFamily: 'Cochin',
        },
        txtPalmeiras:{
            fontSize: RFPercentage(2.5),
            padding: 10,
            margin: 10,  
            fontFamily: 'Cochin',    
            color:'#09ff00ff',
        },
        txtSP:{
            fontSize: RFPercentage(2.5),
            padding: 10,
            margin: 10,  
            fontFamily: 'Cochin',  
            color: '#ff0000ff',        
        },
    }
);
 
export default styles;