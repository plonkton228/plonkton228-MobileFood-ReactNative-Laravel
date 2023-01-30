import React, { useState } from "react";
import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import { postAPI } from "../services/PostApi";
import { HomeStyle } from "./styles/HomeStyle";
import {  MainPageStyle } from "./styles/MainPage";
import { IPost } from "./templates/IPost";
import PostComponent from "./UI/PostsComponent";

const Home : React.FC = ()=> {
  const [QueryPost, setQueryPost] = useState<number>(1);
  const {data= [], isLoading} = postAPI.useFetchPostByIdQuery(QueryPost)
  console.log({QueryPost: QueryPost, data : data});
    return (<>
     <View style ={MainPageStyle.contentContainer}>
        <View style ={HomeStyle.observeCont}>
         <Text style ={HomeStyle.h1}>Delicious </Text>
         <Text style ={HomeStyle.h1}>food for you</Text> 
        </View>
        <View style ={HomeStyle.observeCont}>
          <Image
            source={
              require('./image/drawable/Search.png')
            }
           style ={HomeStyle.ImageDec}
          />
          <TextInput
            style ={HomeStyle.DecInput}
            placeholder="Search"
          />
        </View>
        <View style = {HomeStyle.NavigateContainer}>
         <TouchableOpacity onPress={()=> setQueryPost(1)}><Text>Food</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> setQueryPost(2)}><Text>Drinks</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> setQueryPost(3)}><Text>Snacks</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> setQueryPost(4)}><Text>Sauce</Text></TouchableOpacity>
        </View>  

        <View style ={HomeStyle.contentContainer} >
                   {
                    data != null ?
                    data.map((element: IPost) => <PostComponent 
                    title= {element.title}
                    description = {element.description}
                    img = {element.img}
                    costs ={element.costs}/>)
                    : <View><Text>Загрузка!</Text></View>
                   }
        </View>
     </View>
    </>)
}
export default Home;