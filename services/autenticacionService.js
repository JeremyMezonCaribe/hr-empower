import axios from 'axios';

export const GetAuthenticationToken = async (loginInfo) => {
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth`,loginInfo);
    return data;
}