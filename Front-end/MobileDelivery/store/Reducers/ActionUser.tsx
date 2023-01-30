import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { DispatchState } from '..';
import { ILog } from '../../components/templates/ILog';
import { IReg } from '../../components/templates/IReg';
import { IUser } from '../../components/templates/IUser'
import { TemplateState, userSlice } from './userSlice';



export function SomeDo(log : ILog = {email : "", password: ""}){
    
    return async(dispatch : DispatchState)=> {
        try {
            dispatch(userSlice.actions.pinned());
            const respone = await axios.post<TemplateState>('http://127.0.0.1:8000/api/auth/login',{email: log.email, password: log.password});
            console.log(respone.data.access_token);
            dispatch(userSlice.actions.fullfield(respone.data))
        } catch (error) {
            dispatch(userSlice.actions.reject(String(error)))
        }
    }
}


export function RegUser(reg : IReg = {email : "", password: "", town : "", name : ""}) {
    return async (dispatch : DispatchState) => {
          try {
            dispatch(userSlice.actions.pinned());
            const response = await axios.post<TemplateState>('http://127.0.0.1:8000/api/auth/register', {email : reg.email, password: reg.password, town : reg.town, name : reg.name});
            dispatch(userSlice.actions.fullfield(response.data))
          } catch (error) {
            dispatch(userSlice.actions.reject(String(error)))
          }
    }
}
   
