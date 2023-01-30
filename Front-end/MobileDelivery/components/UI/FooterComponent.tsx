import { View,TouchableOpacity,Image } from "react-native";
import {  MainPageStyle } from "../styles/MainPage";
const FooterComponent : React.FC = ()=> {
    return(<>
    <View style ={MainPageStyle.footer}>
               <TouchableOpacity >
                  <Image source={require('../image/Home.png')}/>
                 </TouchableOpacity>
                 <TouchableOpacity >
                  <Image source={require('../image/heart.png')}/>
                 </TouchableOpacity>
                 <TouchableOpacity >
                  <Image source={require('../image/user.png')}/>
                 </TouchableOpacity>
                 <TouchableOpacity >
                  <Image source={require('../image/HistoryPerchase.png')}/>
                 </TouchableOpacity>
               </View>
    </>)
}
export default FooterComponent;