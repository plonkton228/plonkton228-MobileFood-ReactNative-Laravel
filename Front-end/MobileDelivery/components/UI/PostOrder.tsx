
import { View, Text , Image} from 'react-native';
import { OrderStyle } from '../styles/OrderStyle';
import {IPost} from '../templates/IPost'
const PostOrder: React.FC<IPost> = ({title, description, img, costs})=> {
    console.log(title);
    return(<>
        <View style ={OrderStyle.PostContainer}>
           <Image style ={OrderStyle.ImagePost} source={require('../image/PostsImage/FoodSmall.png')}/>
            <View style = {OrderStyle.PostInner}>
                <Text style = {OrderStyle.TextPost}>{title}</Text>
                <Text style = {OrderStyle.CostPost}>{costs}</Text>
            </View>
        </View>
    </>)
}
export default PostOrder;