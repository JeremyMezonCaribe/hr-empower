import axios from 'axios';

export const GetDeparments = () => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/departamentos`);
    return data;
}

export const GetDepartamentbyId = (id) => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/departamentos/${id}`);
    return data;
}

export const CreateDepartament = (departamento) => {
    const {data} = axios.post(`${process.env.PUBLIC_NEXT_API_HOST}/api/departamentos/`,departamento);
    return data;
}