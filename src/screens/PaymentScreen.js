import React, { useState } from 'react';
import {View,Text,Alert, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from '../theme/PaymentScreenStyle'

function totalAmount(shopList) {
    let total = 0
    for (let index = 0; index < shopList.length; index++) {
        const element = shopList[index].price;
        total = total + element
    }
    return total + "$"
}

function ProductList(shopList){
    let infoMSG = "The Products You Bought:\n";
    for (let index = 0; index < shopList.length; index++) {
        const element = shopList[index];
        infoMSG = infoMSG + element.name + '\n'
    }
    return infoMSG
}

const PaymentScreen = () =>{
    const state = useSelector((state) => state)
    const [selector, setSelector] = useState(0)
    let data = state.shop.list
    const SeleceterSwicter = [styles.noSelectPaymentMethodCard,styles.SelectedPaymentMethodCard]
    return(
        <View style={styles.BaseView}>
            <View style={styles.Card}>
                <View style={styles.CardListsummary}>
                    <Text style={styles.TitleStyle}>Summary</Text>
                    <View style={styles.Divider}></View>
                    <View style={styles.AmountView}>
                        <View style={styles.TitleBox}>
                            <Text style={[styles.subTitleStyle, {fontSize:20,width:80,marginRight:5,marginLeft:5}]}>Total Number of Products</Text>
                            <Text style={styles.subTitleStyle}>{data.length}</Text>
                        </View>
                        <View style={styles.TitleBox}>
                            <Text style={styles.subTitleStyle}>{totalAmount(data)}</Text>
                            <Text style={[styles.subTitleStyle, {fontSize:20,width:80,marginRight:5,marginLeft:5}]}>Total Amount</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.FlexCardListsummary}>
                    <Text style={styles.TitleStyle}>Summary</Text>
                    <View style={styles.Divider}></View>
                    <TouchableOpacity style={{
                        marginTop:15,
                        justifyContent:'center',
                        alignItems:'center',}}
                        onPress={()=>{
                            if (selector == 1){
                                setSelector(0)
                            }else{
                                setSelector(1)
                            }
                        }}
                    >
                        <View style={selector == 1 ? SeleceterSwicter[1] : SeleceterSwicter[0] }>
                            <Image source={require('../assets/images/paypal.png')} style={{width:60,height:60,marginHorizontal:20}} />
                            <View style={{flex:1,}}>
                                <Text style={styles.CardTitleStyle}>**** **** **** 5632</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                    <Text style={styles.subCardTitleStyle}>Sadık Cihad Ceviz</Text>
                                    <Text style={styles.subCardTitleStyle}>01/01</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginTop:15,
                        justifyContent:'center',
                        alignItems:'center',}}
                        onPress={()=>{
                            if (selector == 2){
                                setSelector(0)
                            }else{
                                setSelector(2)
                            }
                        }}
                    >
                        <View style={selector == 2 ? SeleceterSwicter[1]:SeleceterSwicter[0]}>
                            <Image source={require('../assets/images/credit-card.png')} style={{width:60,height:60,marginHorizontal:20}} />
                            <View style={{flex:1,}}>
                                <Text style={styles.CardTitleStyle}>**** **** **** 5632</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                    <Text style={styles.subCardTitleStyle}>Sadık Cihad Ceviz</Text>
                                    <Text style={styles.subCardTitleStyle}>01/01</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.CardListsummary}>
                    <Text style={styles.TitleStyle}>Pay</Text>
                    <View style={styles.Divider}></View>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}
                        onPress={()=>{
                            if (selector == 0) {
                                Alert.alert(
                                    "Caution!!",
                                    "You have not choose payment method",
                                )
                            }else if(selector == 1){
                                Alert.alert(
                                    "Congratulations(Your Payment Has Been Made With Paypal)",
                                    ProductList(data),
                                )
                            }else if(selector == 2){
                                Alert.alert(
                                    "Congratulations(Your Payment Has Been Made With Credit-Card)",
                                    ProductList(data),
                                )
                            }
                        }}
                    >
                        <View style={styles.BuyButton}>
                            <Image source={require('../assets/images/credit-card.png')} style={{width:60,height:60,marginHorizontal:20}} />
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    );
}

export default PaymentScreen