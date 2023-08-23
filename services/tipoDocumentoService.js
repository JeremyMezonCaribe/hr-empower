import axios from 'axios';

export const GetAllDocumentTypes = () => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/tipodocumento`);
    return data;
}

export const GetDocumentTypeById = (id) => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/tipodocumento/${id}`);
    return data;
}