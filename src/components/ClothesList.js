import React, {useState} from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {addShopCard, popShopCart} from '../redux/actions/shopActions'
import SelectDropdown from 'react-native-select-dropdown'
import * as PathList from '../constants/ImgPath'

import {clohtList} from '../assets/clothes.json'
import styles from '../theme/ClothesStyle'

const addCart = (data,size,dispacher,state) =>{
    data["selectedSize"] = size
    let control = 0
    const myControlData = state.shop.list
    for (let index = 0; index < myControlData.length; index++) {
        const element = myControlData[index].id;
        if( data.id == element){
            control += 1
        }
    }
    if (control > 0){
        Alert.alert(
            "Attention!",
            "You have the same dress in your cart. Are you sure you want to add",
            [
                {
                    text:"Okey",
                    onPress: () => dispacher(addShopCard(data))
                },
                {
                    text:"Cancel",
                    onDismiss: () => null
                },
            ],
        )
    }else{
        console.log(myControlData)
        dispacher(addShopCard(data))
        console.log(myControlData)
    }
}
const ClothesList = () =>{
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    return(
        <ScrollView nestedScrollEnabled = {true}>
            <View style={styles.CardBase}>
            {clohtList.map((data,index)=>{
                const [size, setSize] = useState();
                return(
                <View key={index} style={styles.Card}>
                    <View style={styles.ImageColumn}>
                        <Image source={PathList.imgPathList[index]} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.DescriptionColumn}>
                        <View style={styles.FirstRow}>
                            <Text style={styles.TitleStyle}>{data.name}</Text>
                            <Text style={styles.PriceStyle}>{data.price + "$"}</Text>
                        </View>
                        <View style={styles.Divider}></View>
                        <View style={{height:140}}>
                            <ScrollView nestedScrollEnabled = {true}>
                                    <Text style={styles.DescriptionStyle}>{data.description}</Text>
                            </ScrollView>
                        </View>
                        
                        <View style={styles.ThirdRow}>
                            <SelectDropdown
                                data={data.size}
                                buttonStyle={styles.SizeButtonStyle}
                                dropdownStyle={styles.SizeButtonMenuStyle}
                                buttonTextStyle={styles.ButtonTextStyle}
                                rowTextStyle={styles.SizeButtonMenuItemStyle}
                                defaultButtonText="Your Size"
                                renderDropdownIcon={(isOpen)=>{
                                    return isOpen ? <Image source={require('../assets/images/up.png')} style={{width:40,height:40}}/>
                                    :
                                    <Image source={require('../assets/images/down.png')} style={{width:40,height:40}}/>
                                }}
                                onSelect={(selectedItem, index)=>{
                                    setSize(selectedItem)
                                }}
                            />
                            <TouchableOpacity style={{marginLeft:5}} onPress={()=>{
                                if(size === undefined){
                                    return Alert.alert(
                                        "Size Not Found",
                                        "Please choose the size you want to take",
                                    )
                                }
                                else{
                                    
                                    return addCart(
                                        data,
                                        size,
                                        dispatch,
                                        state
                                        )
                                }
                                }}>
                                <View style={styles.AddCartButtonView}>
                                    <Image source={require("../assets/images/add.png")} style={{width:35,height:35,}}>
                                    </Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                );
            })}
            
            </View>
        </ScrollView>
    );
};

export default ClothesList;