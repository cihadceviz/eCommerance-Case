import React, {useEffect, useState} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {logout} from '../redux/actions/userActions'
import {isOpenCardView} from '../redux/actions/cardViewVisibilityAction'
import styles from '../theme/AppBarStyle'

const LogoutButton = () => {
    const dispatch = useDispatch();
    return(
        <View>
            <TouchableOpacity onPress={()=>{
                dispatch(logout())
            }}>
                
                
            
                <View style={styles.Box}>
                    <Image source={require('../assets/images/logout.png')} style={{width:25,height:25}}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const LoginButton = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Login')
            }}>
                <View style={styles.Box}>
                    <Image source={require('../assets/images/login.png')} style={{width:25,height:25}}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const MockUser = () =>{
    const state = useSelector((state) => state)
    return(
        <View>
            <View style={styles.Divider}></View>
            <Text style={styles.UserTitleStyle}>Welcome to paradise {state.user[0].name}</Text>
        </View>
    );
}

const AppBar = ({navigation}) =>{
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const shopList = Object.values(state.shop.list)
    const totalCount = shopList.length
    const isLogin = state.user.length
    return(
    <View style={styles.MainStyle}>
        <View style={styles.FirstRow}>
            <Text style={styles.TitleStyle}>BumbleBee Paradise</Text>
                <View style={styles.ButtonViewStyle}>
                    <TouchableOpacity onPress={()=>{
                        dispatch(isOpenCardView())
                        }}>
                        <View style={styles.Box}>
                            <Image source={require('../assets/images/basket.png')} style={{width:30,height:30}}/>
                        </View>
                        {totalCount !=0 ? <View style={styles.Box2}><Text style={styles.CartItemCountStyle}>{totalCount}</Text></View>:null}
                        
                    </TouchableOpacity>
                    {isLogin == 1 ? <LogoutButton/>:<LoginButton navigation={navigation} />}
                </View>
        </View>
        {isLogin == 1 ? <MockUser/>:null}
    </View>
    )}


export default AppBar;