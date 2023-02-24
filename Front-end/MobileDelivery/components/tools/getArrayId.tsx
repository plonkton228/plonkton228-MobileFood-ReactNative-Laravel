import { IPost } from "../templates/IPost";
import { ISale } from "../templates/ISale";

export const getArrayId = (sales : ISale[])=> {
    const idPost : string[] = [];
    sales.map((e)=> idPost.push(e.post_id));
    return idPost;
}



export const getArrayPosts = (posts : IPost[][])=> {
    const decpost: IPost[] = [];
    posts.forEach((e)=> {
       e.map(e => decpost.push(e))
    })
 return decpost
}