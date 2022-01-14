import { StyleSheet } from 'react-native';
import * as ColorsSet from '../constants/MyColorSet'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    Shadow:{
        position:'absolute',
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'rgba(20,20,20, 0.9)'
    },
    BaseShoppingCardLogout:{
        margin:20,
        height:windowHeight-128,
        backgroundColor: ColorsSet.darkColor,
        borderRadius:15,
        borderWidth:2,
        borderColor: ColorsSet.mainColor,
    },
    BaseShoppingCardLogin:{
        margin:20,
        height:windowHeight-180,
        backgroundColor: ColorsSet.darkColor,
        borderRadius:15,
        borderWidth:2,
        borderColor: ColorsSet.mainColor,
    },
    Card:{
        flexDirection:'row',
        backgroundColor: ColorsSet.mainColor,
        margin:20,
        padding:10,
        borderRadius:15
    },
    ImgDiv:{
        flex:1,
        marginRight:5,
    },
    DescriptionDiv:{
        flex:3,
    },
    TitleStyle:{
        flex:1,
        color: ColorsSet.mainColor,
        fontSize:25,
        fontFamily:'Oswald',
    },
    PriceStyle:{
        color: '#fff',
        fontSize:25,
        fontFamily:'Oswald',
        marginRight:10,
    },
    SizeStyle:{
        flex:1,
        color: '#fff',
        paddingLeft:10,
        fontSize:18,
        fontFamily:'Oswald',
        marginBottom:10,
    },
    SelectorStyle:{
        flexDirection:'row',
    },
    FirstRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
    },
    ImageStyle:{
        width:72,
        height:125,
        borderRadius:15,
        resizeMode:'cover',
    },
    SizeButtonStyle:{
        flex:1,
        backgroundColor: ColorsSet.darkColor,
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
    ClearCardButtonView:{
        backgroundColor:ColorsSet.darkColor,
        borderRadius:5,
        marginTop:3,
        width:44,
        height:44,
        justifyContent:'center',
        alignItems:'center'
    },
    BottomBaseView:{
        flexDirection:'row',
        height:80,
        justifyContent:'space-between',
        alignItems:'center',
    },
    Divider:{
        height:60,
        backgroundColor:ColorsSet.mainColor,
        width:2,
        borderRadius:1
    },
    BottomButtonView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    BottomTotalAmountView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    BottomButton:{
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:ColorsSet.mainColor,
        margin:5,
        borderRadius:30
    },
    TotalAmount:{
        marginRight:5,
        color: ColorsSet.mainColor,
        fontSize:25,
        fontFamily:'Oswald',
    },
    BottomTotalAmountSubView:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
    }
})

export default styles