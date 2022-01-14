import { StyleSheet } from 'react-native';
import * as ColorsSet from '../constants/MyColorSet'

const styles = StyleSheet.create({
    LoginMainBase:{
        flex:1,
        backgroundColor: ColorsSet.mainColor,
        justifyContent:'center',
        alignItems:'center',
        windowHeight:788,
        paddingBottom:100
    },
    AppNameView:{
        height:175,
        alignSelf:'stretch',
        backgroundColor:ColorsSet.darkColor,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:5,
        marginBottom:75
    },
    TitleStyle:{
        color: ColorsSet.mainColor,
        fontSize:40,
        fontFamily:'Oswald',
    },
    Input:{
        borderWidth:3,
        borderColor:ColorsSet.darkColor,
        borderRadius:5,
        width:270,
        height:50,
        padding:10,
        marginBottom:5,
        fontFamily: "Oswald",
    },
    Visible:{
        position :'absolute',
        left:230,
        top:13,
    },
    ButtonView:{
        flexDirection:'row'
    },
    Button:{
        width:125,
        height:50,
        backgroundColor:ColorsSet.darkColor,
        justifyContent:'center',
        alignSelf:'center',
        marginRight:10,
        marginLeft:10,
        borderRadius:5,
    },
    ButtonText:{
        alignSelf:'center',
        fontSize:18,
        fontFamily: "Oswald",
    }

});

export default styles