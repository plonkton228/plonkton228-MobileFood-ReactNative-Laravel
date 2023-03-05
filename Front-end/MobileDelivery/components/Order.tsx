import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postAPI } from "../services/PostApi";
import { useTypeSelector } from "./hooks/redux";
import { useFilter } from "./hooks/useFilter";
import {  MainPageStyle } from "./styles/MainPage";
import { OrderStyle } from "./styles/OrderStyle";
import { styleStart } from "./styles/StartStyle";
import { MapPostTemplate } from "./templates/IMapPost";
import { IPost } from "./templates/IPost";
import { ISale } from "./templates/ISale";
import { FullPosts, getArrayId } from "./tools/getArrayId";
import PostOrder from "./UI/PostOrder";
const Order : React.FC = ()=> {
    const {user} = useTypeSelector(state => state.user)
    const [posts, setPosts] = useState < MapPostTemplate[]>();
    useMemo( async ()=> {
        await axios.get<ISale[]>('http://127.0.0.1:8000/api/sales', {params : {id : user.id}}).
        then(async (response)=> {
            const {idPost, counterPost} =  getArrayId(response.data);
            await axios.get<IPost[][]>('http://127.0.0.1:8000/api/getPosts',{ params: {ids : idPost}}).
            then((e)=>  {
              const posts =  FullPosts(e.data,counterPost)
              setPosts(posts)
              console.log(posts)
            })
        })
      },[])
   
     
    return (<>
     <View style ={MainPageStyle.contentContainer}>
        <Text style = {MainPageStyle.headerh1}>swipe on an item to delete</Text>
        {
              posts ? <View>
                     {
                        posts.map((e)=> <PostOrder  key={e.id} post = {e}/>)
                     }
                 </View>
                 :
                 <Text>Загрузка!</Text>
        }
         <TouchableOpacity style = {OrderStyle.ButtonPost}  >
                 <View style = {{width: "100%" , height : "100%" ,display : "flex", alignItems : "center", justifyContent : "center"}}>
                    <Text style = {OrderStyle.ButtonText}>Get starteed</Text>
                 </View>
         </TouchableOpacity>
        </View>
    
    </>)
}
export default Order;