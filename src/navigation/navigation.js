
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomePage from '../screens/HomePage'
import LoginPage from '../screens/LoginScreen'
import PaymentScreen from '../screens/PaymentScreen'

const Stack = createNativeStackNavigator();

const Navigator = () =>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ title: 'Welcome', headerShown: false}}
            />
            <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login', headerShown: false}}/>
            <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Payment', headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigator;

