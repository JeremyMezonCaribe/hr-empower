import axios from 'axios';

export const GetAllRoles = () => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/roles`);
    return data;
}

export const GetRoleById = (id) => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/roles/${id}`);
    return data;
}