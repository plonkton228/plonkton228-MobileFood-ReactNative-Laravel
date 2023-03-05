import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const SaleApi = createApi(
   {
     reducerPath: "SaleReducer",
     baseQuery :fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/api"}),
     endpoints: (builder)=> ({
        addSale : builder.query({
          query: (id : {user_id: Number, post_id : string})=> ({
            url: '/sales',
            params: {
              user_id : id.user_id,
              post_id: id.post_id
            }
          })
        })
     })

   }
)