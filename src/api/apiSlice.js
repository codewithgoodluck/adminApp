import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const user = createApi({
    baseQuery : fetchBaseQuery({baseUrl:"http://161.35.218.95:3000"}),
    reducerPath:"testApi",
    endpoints:(builder)=>({
        createLogin:builder.mutation({
            query:(body)=>({
                url:"/api/admin/login",
                method:"POST",
                body,
            })
    
        })

    })

})

export const {
    useCreateLoginMutation,
    useGet
} = user

export const countries = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com'}),
    reducerPath: "testApi",
    tagTypes: ["countires"],
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => '/v3.1/all',
            providesTags: ["countires"]
        })
    })
});

export const { useGetCountriesQuery} = countries;


