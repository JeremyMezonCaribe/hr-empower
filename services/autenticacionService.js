import axios from 'axios';

export const GetAuthenticationToken = (loginInfo) => {
    const {data} = axios.post(`${process.env.PUBLIC_NEXT_API_HOST}/api/auth`,loginInfo);
    return data;
}