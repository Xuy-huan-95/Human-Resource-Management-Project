import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Login, LoginResponse } from '../../interface/login'


export const LoginApi = createApi({
  reducerPath: 'Auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://em-v2.oceantech.com.vn/em/' }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Pick<Login, 'password' | 'username'>>({
      query: (data) => ({
        url: '/oauth/token',
        method: 'POST',
        body: {
          client_secret: 'core_client',
          grant_type: 'password',
          client_id: 'secret',
          username: data.username,
          password: data.password
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic Y29yZV9jbGllbnQ6c2VjcmV0'
        }
      })
    })
  })
})

export const { useLoginMutation } = LoginApi
