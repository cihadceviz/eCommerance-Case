import React, { useState, useEffect } from 'react';
import{View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { popShopCart, clearShopCard, editShopCard} from '../redux/actions/shopActions'

import * as imgPaths from '../constants/ImgPath'
import styles from '../theme/ShoppingCardStyle'

function totalAmount(shopList) {
    let total = 0
    for (let index = 0; index < shopList.length; index++) {
        const element = shopList[index].price;
        total = total + element
    }
    return total + "$"
}

const ShoppingCart =  ({navigation}) => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const shopList = Object.values(state.shop.list)
    const [size, setSize] = useState();
    return(
        <View style={styles.Shadow}>
            <View style={state.user.length == 1 ? styles.BaseShoppingCardLogin:styles.BaseShoppingCardLogout}>
                <ScrollView>
                    {shopList.length == 0 ? <View style={{justifyContent:'center',alignItems:'center',margin:20,}}><Text>SHOPPING CARD IS EMPTY</Text></View>
                    :
                    shopList.map((data, index) =>{
                        return (
                            <View key={index} style={styles.Card}>
                                <View style={styles.ImgDiv}>
                                    <Image source={imgPaths.imgPathList2.get(data.id-1)} style={styles.ImageStyle} />
                                </View>
                                <View style={styles.DescriptionDiv}>
                                    <View style={styles.FirstRow}>
                                        <Text style={styles.TitleStyle}>{data.name}</Text>
                                        <Text style={styles.PriceStyle}>{data.price + '$'}</Text>
                                    </View>
                                    <Text style={styles.SizeStyle}>{data.selectedSize}</Text>
                                    <View style={styles.SelectorStyle}>
                                        <SelectDropdown
                                        data={data.size}
                                        buttonStyle={styles.SizeButtonStyle}
                                        dropdownStyle={styles.SizeButtonMenuStyle}
                                        buttonTextStyle={styles.ButtonTextStyle}
                                        rowTextStyle={styles.SizeButtonMenuItemStyle}
                                        buttonTextAfterSelection={(selectedItem, index) => {return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {return item
                                        }}
                                        renderDropdownIcon={(isOpen)=>{
                                            return isOpen ? <Image source={require('../assets/images/up.png')} style={{width:40,height:40}}/>
                                            :
                                            <Image source={require('../assets/images/down.png')} style={{width:40,height:40}}/>
                                        }}
                                        onSelect={(selectedItem, x)=>{
                                            dispatch(editShopCard([index,selectedItem]))
                                            setSize(selectedItem)
                                        }}
                                        />
                                        <TouchableOpacity onPress={()=>{
                                            dispatch(popShopCart(index))
                                            }}>
                                            <View style={styles.ClearCardButtonView}>
                                                <Image source={require('../assets/images/return.png')} style={{width:30,height:30}}/>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                    }
                </ScrollView>
                <View style={styles.BottomBaseView}>
                    <View style={styles.BottomTotalAmountView}>
                        <View style={styles.BottomTotalAmountSubView}>
                            <Text style={styles.TotalAmount}>Total Amount</Text>
                            <Text style={styles.TotalAmount}>{totalAmount(shopList)}</Text>
                        </View>
                        <View style={styles.Divider}></View>
                    </View>
                    <View style={styles.BottomButtonView}>
                        <TouchableOpacity onPress={()=>dispatch(clearShopCard())}>
                            <View style={styles.BottomButton}>
                                <Image source={require('../assets/images/clear.png')} style={{width:40,height:40}}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            state.user.length == 1 ? navigation.navigate("Payment")
                            :
                            Alert.alert(
                                "Caution!",
                                "You cannot pay without login",
                                [
                                    {
                                        text:"Go To Login",
                                        onPress:()=>{navigation.navigate("Login")}
                                    },
                                    {
                                        text:"Cancel",
                                        onPress:()=>{}
                                    }
                                ]
                            )
                        }}>
                            <View style={styles.BottomButton}>
                                <Image source={require('../assets/images/buy.png')} style={{width:40,height:40}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ShoppingCart;