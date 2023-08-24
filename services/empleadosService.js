import { AUTH_API } from '@/shared/constants/auth';
import axios from 'axios';
import { GetAuthenticationToken } from './autenticacionService';

export const GetAllEmployees =async () => {
    const {token} = await GetAuthenticationToken(AUTH_API)
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/empleados`,{headers:{Authorization: token || ""}});
    return data;
}

export const GetEmployeeById =async (id) => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/empleados/${id}`);
    return data;
}

export const CreateEmployee = async(employee) => {
    try{
        const {token} = await GetAuthenticationToken(AUTH_API)
        const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/empleados`,employee,{headers:{Authorization: token || ""}});
        return data;

    }catch(Ex){
        console.log(Ex)
    }
}

export const ModifyEmployee = async(id,employee) => {
    const {data} = await axios.put(`${process.env.NEXT_PUBLIC_API_HOST}/api/empleados/${id}`,employee);
    return data;
}

export const DeleteEmployee = async(id,employee) => {
    const {data} = await axios.delete(`${process.env.NEXT_PUBLIC_API_HOST}/api/empleados/${id}`,employee);
    return data;
}

