import React, {useState, useEffect} from "react";
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, Alert} from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import {sucsesslogin} from '../redux/actions/userActions'
import {setlogin} from '../redux/actions/loginAction'
import * as UserList from '../assets/user'

import styles from '../theme/LoginScreenStyle'



function Login(username, password, navigation){
    const users = UserList["users"]
    let userControl = false
    let userIndex = 0;
    if(username == "" && password == ""){
        return (
            Alert.alert("Caution!","Username and password cannot be blank")
        );
    }
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.name ==  username && element.password == password){
            userControl = true
            userIndex = index
        }
    }
    if (userControl == true){
        navigation.pop()
        return true
    }else{
        Alert.alert("Caution!","Your username or password is incorrect, please check")
    }
}



const Register = (username, password,) =>{
    const users = UserList["users"]
    let userControl = false
    if(username == "" && password == ""){
        return (
            Alert.alert("Caution!","Username and password cannot be blank")
        );
    }
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.name ==  username && element.password == password){
            userControl = true
        }
    }
    if (userControl == false) {
        Alert.alert(
            "Caution!",
            "New User created",
            [
                {
                  text: "Yes",
                  onPress: () => {
                        addUser(username,password,users.length)
                },
                },
            ],
            );
        return true
    }else{
        Alert.alert("Caution!","An account found with your username or password, please login")
        return false
    }
}

const PopAndLogin=(username, password,navigation)=>{
    navigation.pop()
    return true
    

}

const addUser = (userName,passWord,lastId) =>{
    let users = UserList["users"]
    users.push(
        {   
            "id":lastId,
            "name":userName,
            "password": passWord
        }
        )
    
}

const LoginPage = ({navigation}) =>{
    const [userName, onChangeUserName] = useState("");
    const [passWord, onChangePassword] = useState("");
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch();
    return (
        <View style={styles.LoginMainBase}>            
                <View style={styles.AppNameView}>
                    <Text style={styles.TitleStyle}>BumbleBee Paradise</Text>
                </View>
                <View>
                    <TextInput
                        autoFocus={true}
                        style={styles.Input}
                        onChangeText={onChangeUserName}
                        placeholder="Username"
                        value={userName}
                    />
                </View>
                <View>
                    <TextInput
                        secureTextEntry={visible ? true : false}
                        style={styles.Input}
                        onChangeText={onChangePassword}
                        placeholder="Password"
                        value={passWord}
                    />
                    <TouchableOpacity style={styles.Visible} onPress={()=>{setVisible(!visible)}}>
                        <View>
                            {visible? 
                            <Image source={require('../assets/images/open.png')} style={{width:25,height:25}}></Image>
                             : 
                            <Image source={require('../assets/images/close.png')} style={{width:25,height:25}}></Image>}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonView}>
                    <TouchableOpacity onPress={()=>{
                        Login(userName,passWord, navigation) ? dispatch(sucsesslogin({"name":userName,"password": passWord})): null
                    }}>
                        <View style={styles.Button}>
                            <Text style={styles.ButtonText}>Sing in</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        const control = Register(userName,passWord)
                        console.log(control)
                        if (control == true) {
                            PopAndLogin(userName,passWord, navigation) ? dispatch(sucsesslogin({"name":userName,"password": passWord})): null
                        }
                        
                    }}>
                        <View style={styles.Button}>
                            <Text style={styles.ButtonText}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            
        </View>
    );
}

export default LoginPage