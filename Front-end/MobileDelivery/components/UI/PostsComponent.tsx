import { View , TouchableOpacity, Image, Text} from "react-native"
import { PostStyle } from "../styles/PostStyle"
import { IPost } from "../templates/IPost"

const PostComponent  : React.FC<IPost> = ({title,img,costs,description})=> {
    return(<>
        <View style = {PostStyle.MainContainer}>
            <Image style ={PostStyle.imgStyle} source={require('../image/PostsImage/Food.png')}/>
            <Text>{title}</Text>
            <Text>{costs}</Text>
        </View>
    </>)
}
export default PostComponent