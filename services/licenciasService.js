import axios from 'axios';

export const GetAllLicenses = () => {
    const {data} = axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/licencias`);
    return data;
}

export const GetLicensesById = (id) => {
    const {data} = axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/licencias/${id}`);
    return data;
}

export const CreateLincense = (license) => {
    const {data} = axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/licencias`,license);
    return data;
}

export const ModifyLincense = (id,license) => {
    const {data} = axios.put(`${process.env.NEXT_PUBLIC_API_HOST}/api/licencias/${id}`,license);
    return data;
}

export const DeleteLicense = (id) => {
    const {data} = axios.delete(`${process.env.NEXT_PUBLIC_API_HOST}/api/licencias/${id}`);
    return data;
}