import { MapPostTemplate } from "../templates/IMapPost";
import { IPost } from "../templates/IPost";
import { ISale } from "../templates/ISale";

export const getArrayId = (sales : ISale[])=> {
    const idPost : string[] = [];
    const counterPost : number[] = [];
    sales.map((e)=> idPost.push(e.post_id));
    sales.map((e)=> counterPost.push(e.counter))
    return {idPost,  counterPost};
}

export const FullPosts = (posts : IPost[][], counter : number[])=>
{
  const DecPosts : MapPostTemplate[] = [];
  posts.forEach((element,index)=> {
      element.forEach((e)=> {
            DecPosts.push({...e, counter: counter[index]})
      })
  })
   return DecPosts
}
