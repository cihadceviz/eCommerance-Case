import { StyleSheet } from 'react-native';
import * as ColorsSet from '../constants/MyColorSet'

const styles = StyleSheet.create({
    MainStyle:{
        backgroundColor: ColorsSet.darkColor,
        flexDirection:'column',
    },

    FirstRow:{
        height: 75,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        paddingLeft: 10,
        paddingRight: 10,
    },

    TitleStyle:{
        color: ColorsSet.mainColor,
        fontSize:30,
        fontFamily:'Oswald',
    },

    UserTitleStyle:{
        paddingLeft:20,
        color: ColorsSet.mainColor,
        fontSize:25,
        fontFamily:'Oswald',
        marginBottom:10,
    },
    CartItemCountStyle:{
        color: "#fff",
        fontSize:12,
        fontFamily:'Oswald',
        fontWeight:'900',
    },

    ButtonViewStyle:{
        flexDirection:'row',
    },
    Box:{
        margin: 5,
        width: 50,
        height: 50,
        borderRadius:25,
        backgroundColor: ColorsSet.mainColor,
        justifyContent:'center',
        alignItems:'center',
    },
    Box2:{
        position:'absolute',
        left:30,
        top:0,
        margin:5,
        width: 20,
        height: 20,
        borderRadius:10,
        borderWidth:1.5,
        borderColor:ColorsSet.mainColor,
        backgroundColor: ColorsSet.darkColor,
        justifyContent:'center',
        alignItems:'center',
    },

    Divider:{
        height:2,
        backgroundColor: ColorsSet.mainColor
    }
})

export default styles;