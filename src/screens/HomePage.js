import React from 'react';
import { ScrollView, Text, View, Dimensions  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '../components/AppBar'
import ClothesList from '../components/ClothesList'
import ShoppingCart from '../components/ShoppingCard'

const HomePage = ({navigation}) => {
  const state = useSelector((state) => state)
  const cartViewControl = state.isCartViewVisible
  return (
  <View>
    <AppBar navigation = {navigation}/>
    <View style={{height:Dimensions.get('window').height}}>
      <ClothesList/>
      {cartViewControl == false ? null : <ShoppingCart navigation = {navigation}/>}
    </View>
  </View>
  );
};

export default HomePage ;
