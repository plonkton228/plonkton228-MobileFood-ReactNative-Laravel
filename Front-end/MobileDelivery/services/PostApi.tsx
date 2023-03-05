import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://127.0.0.1:8000/api'}),
    endpoints:(build)=>({
        fetchPostById: build.query({
            query: (id: number)=>({
                url: `/posts`,
                params:{
                    id: id
                }
            })
        }),
        fetchPostByIds: build.query({
            query: (id: number)=> ({
                url: `/posts/${id}`,
            
                params: {
                    id:id
                }
            })
           
        }),
        fetchSalesById: build.query({
            query: (id: number) => ({
                url: `/sales`,
                params : {
                    id:id
                }
            })
        })
    })
})