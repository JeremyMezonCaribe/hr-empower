import axios from 'axios';

export const getAllDepartamentos = () => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/departamentos`);
    return data
}