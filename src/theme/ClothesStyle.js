import { StyleSheet } from 'react-native';
import * as ColorsSet from '../constants/MyColorSet'

const styles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
    },
    CardBase:{
        backgroundColor: ColorsSet.mainColor,
        paddingBottom:100,
    },
    Card:{
        padding: 20,
        marginLeft:20,
        marginBottom:5,
        marginTop:5,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor: ColorsSet.darkColor,
        flexDirection:'row',
        
    },
    ImageColumn:{
        flex:5,
        margin:3,
        alignSelf:'center',
    },
    DescriptionColumn:{
        flex:6,
        margin:3,
    },
    FirstRow:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    SecondRow:{
        flex:5,
        flexGrowx:1,
        flexDirection:'row',
    },
    ThirdRow:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    TitleStyle:{
        flex:6,
        color: ColorsSet.mainColor,
        fontSize:25,
        fontFamily:'Oswald',
    },
    PriceStyle:{
        flex:4,
        paddingLeft:10,
        color: '#fff',
        fontSize:25,
        fontFamily:'Oswald',
        marginRight:10,
    },
    DescriptionStyle:{
        paddingLeft:10,
        color: '#fff',
        fontSize:18,
        fontFamily:'Oswald',
        marginBottom:10,
    },
    ImageStyle:{
        width:146,
        height:250,
        borderRadius:15,
        resizeMode:'cover',
    },

    CardDescriptionStyle:{
        flexDirection: "row",
        alignItems:'center',
    },
    SizeButtonStyle:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0)',
        borderRadius:10,
        borderColor: ColorsSet.mainColor,
        borderWidth:2,
    },
    ButtonTextStyle:{
        color:"#434343",
        fontSize:13,
        fontWeight:'100',
        fontFamily:'Oswald',
    },
    SizeButtonMenuStyle:{
        backgroundColor:ColorsSet.mainColor,
        borderRadius:10,
    },
    SizeButtonMenuItemStyle:{
        fontFamily: 'Oswald',
        fontSize:15
    },
    AddCartButtonView:{
        borderColor: ColorsSet.mainColor,
        borderWidth:2,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    Divider:{
        height:2,
        backgroundColor: ColorsSet.mainColor
    },
})

export default styles;