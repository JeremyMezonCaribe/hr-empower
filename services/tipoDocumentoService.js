import axios from 'axios';

export const GetAllDocumentTypes = () => {
    const {data} = axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/tipodocumento`);
    return data;
}

export const GetDocumentTypeById = (id) => {
    const {data} = axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/tipodocumento/${id}`);
    return data;
}