import React from "react";
import { View, Text } from "react-native";
import {  MainPageStyle } from "./styles/MainPage";
const Order : React.FC = ()=> {
    return (<>
     <View style ={MainPageStyle.contentContainer}>
        <Text>Order</Text>
     </View>
    </>)
}
export default Order;