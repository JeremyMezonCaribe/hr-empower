import { AUTH_API } from '@/shared/constants/auth';
import axios from 'axios';
import { GetAuthenticationToken } from './autenticacionService';

export const GetDeparments = async () => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/departamentos`,{headers:{Authorization: token}});
    return data;
}

export const GetDepartamentbyId = async (id) => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/departamentos/${id}`,{headers:{Authorization: token}});
    return data;
}

export const CreateDepartament = async (departamento) => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/departamentos/`,departamento,{headers:{Authorization: token}});
    return data;
}