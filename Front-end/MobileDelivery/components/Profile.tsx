import axios from "axios";
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigate } from "react-router-native";
import { userSlice } from "../store/Reducers/userSlice";
import { useTypeDispatch, useTypeSelector } from "./hooks/redux";
import { IUser } from "./templates/IUser";
import {  MainPageStyle } from "./styles/MainPage";
interface TemplateProfile {

  
}

const Profile : React.FC<TemplateProfile> = ()=> {
    const {user,access_token} = useTypeSelector(state => state.user)
    const navigate = useNavigate();
    const dispatch = useTypeDispatch();
    const  LogOut = ()=> {
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        axios.post('http://testmobile.danik-dev.ru/api/auth/logout').then((e)=> console.log(e));
        dispatch(userSlice.actions.logout())
        navigate('/Login');
      }
    return (<>
     <View style ={MainPageStyle.contentContainer}>
        
            <Text>Main Page</Text>
            <View><Text>{JSON.stringify(user)}</Text></View>
            <Button title="LogOut" onPress={LogOut}></Button>
            <View><Text>{JSON.stringify(access_token)}</Text></View>
            

         </View>
    </>)
}
export default Profile;