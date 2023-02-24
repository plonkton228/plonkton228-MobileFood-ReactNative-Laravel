import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postAPI } from "../services/PostApi";
import { useTypeSelector } from "./hooks/redux";
import {  MainPageStyle } from "./styles/MainPage";
import { OrderStyle } from "./styles/OrderStyle";
import { styleStart } from "./styles/StartStyle";
import { IPost } from "./templates/IPost";
import { getArrayId, getArrayPosts } from "./tools/getArrayId";
import PostOrder from "./UI/PostOrder";
const Order : React.FC = ()=> {
    const {user} = useTypeSelector(state => state.user)
    const [posts, setPosts] = useState<IPost[]>();
    const [postsId, setPostsId] = useState<String[]>();
    const {data} = postAPI.useFetchSalesByIdQuery(user.id)
    const array1: string[] = ['a', 'b', 'c'];
    useMemo( async ()=> {
        await axios.get('http://127.0.0.1:8000/api/sales', {params : {id : user.id}}).
        then(async (response)=> {
           const ids =  getArrayId(response.data);
            await axios.get('http://127.0.0.1:8000/api/getPosts',{ params: {ids : ids}}).
            then((e)=>  {
                const posts = getArrayPosts(e.data);
                setPosts(posts);
            })
        })
      },[])
   
    return (<>
     <View style ={MainPageStyle.contentContainer}>
        <Text style = {MainPageStyle.headerh1}>swipe on an item to delete</Text>
        {
              posts ? <View>
                
                     {
                        posts.map((e)=> <PostOrder description= {e.description} img = {e.img} id = {e.id} title ={e.title} costs = {e.costs}/>)
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