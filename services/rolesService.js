import { AUTH_API } from '@/shared/constants/auth';
import axios from 'axios';
import { GetAuthenticationToken } from './autenticacionService';

export const GetAllRoles = async () => {
    const {token} = await GetAuthenticationToken(AUTH_API);
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/roles`,{headers:{Authorization: token || ""}});
    return data;
}

export const GetRoleById = async (id) => {
    const {token} = await GetAuthenticationToken(AUTH_API);
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/roles/${id}`,{headers:{Authorization: token || ""}});
    return data;
}