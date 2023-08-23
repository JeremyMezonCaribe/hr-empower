import axios from 'axios';

export const GetAllUsers = () => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/usuarios`);
    return data;
}

export const GetUserById = (id) => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/usuarios/${id}`);
    return data;
}

export const CreateUser = (user) => {
    const {data} = axios.post(`${process.env.PUBLIC_NEXT_API_HOST}/api/usuarios`,user);
    return data;
}

export const ModifyUser = (id,user) => {
    const {data} = axios.put(`${process.env.PUBLIC_NEXT_API_HOST}/api/usuarios/${id}`,user);
    return data;
}

export const DeleteUser = (id) => {
    const {data} = axios.delete(`${process.env.PUBLIC_NEXT_API_HOST}/api/usuarios/${id}`);
    return data;
}