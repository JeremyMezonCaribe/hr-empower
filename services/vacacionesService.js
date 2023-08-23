import axios from 'axios';

export const GetAllVacations = () => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/vacaciones`);
    return data;
}

export const GetVacationById = (id) => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/vacaciones/${id}`);
    return data;
}

export const CreateVacation = (vacation) => {
    const {data} = axios.post(`${process.env.PUBLIC_NEXT_API_HOST}/api/vacaciones`,vacation);
    return data;
}

export const ModifyVacation = (id,vacation) => {
    const {data} = axios.put(`${process.env.PUBLIC_NEXT_API_HOST}/api/vacaciones/${id}`,vacation);
    return data;
}

export const DeleteVacation = (id) => {
    const {data} = axios.delete(`${process.env.PUBLIC_NEXT_API_HOST}/api/vacaciones/${id}`);
    return data;
}