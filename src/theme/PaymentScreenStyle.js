import { StyleSheet } from 'react-native';
import * as ColorsSet from '../constants/MyColorSet'

const styles = StyleSheet.create({
    BaseView:{
        flex:1,
        backgroundColor: ColorsSet.mainColor,
        justifyContent:'center',
        alignItems:'center',
    },
    Card:{
        width:350,
        height:700,
        backgroundColor:ColorsSet.darkColor,
        alignItems:'center',
        justifyContent:'space-between',
    },
    CardListsummary:{
        alignSelf:'stretch',
    },
    FlexCardListsummary:{
        flex:1,
        alignSelf:'stretch',
    },
    AmountView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'stretch',
    },
    TitleStyle:{
        alignSelf:'center',
        color: ColorsSet.mainColor,
        fontSize:50,
        fontFamily:'Oswald',
    },
    subTitleStyle:{
        alignSelf:'center',
        color: ColorsSet.mainColor,
        fontSize:30,
        fontFamily:'Oswald',
    },
    Divider:{
        height:4,
        backgroundColor: ColorsSet.mainColor
    },
    TitleBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginRight:3,
        marginLeft:3,
    },
    noSelectPaymentMethodCard:{
        width:275,
        height:100,
        backgroundColor: ColorsSet.whiteColor,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    SelectedPaymentMethodCard:{
        width:275,
        height:100,
        backgroundColor: ColorsSet.mainColor,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    CardTitleStyle:{
            alignSelf:'center',
            color: ColorsSet.mainColor,
            fontSize:20,
            fontFamily:'Oswald',
    },
    subCardTitleStyle:{
        marginTop:5,
        alignSelf:'center',
        color: ColorsSet.mainColor,
        fontSize:14,
        fontFamily:'Oswald',
    },
    BuyButton:{
        width:150,
        justifyContent:'center',
        alignItems:'center',
        margin:25,
        borderRadius:10,
        borderWidth:3,
        borderColor:ColorsSet.limeColor
    },
})

export default styles