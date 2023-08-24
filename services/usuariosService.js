import { AUTH_API } from '@/shared/constants/auth';
import axios from 'axios';
import { GetAuthenticationToken } from './autenticacionService';

export const GetAllUsers = async () => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/usuarios`,{headers:{Authorization: token || ""}});
    return data;
}

export const GetUserById = async (id) => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/usuarios/${id}`,{headers:{Authorization: token || ""}});
    return data;
}

export const CreateUser =  async(user) => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/usuarios`,user,{headers:{Authorization: token || ""}});
    return data;
}

export const ModifyUser =  async(id,user) => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.put(`${process.env.NEXT_PUBLIC_API_HOST}/api/usuarios/${id}`,user,{headers:{Authorization: token || ""}});
    return data;
}

export const DeleteUser =  async(id) => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.delete(`${process.env.NEXT_PUBLIC_API_HOST}/api/usuarios/${id}`,{headers:{Authorization: token || ""}});
    return data;
}