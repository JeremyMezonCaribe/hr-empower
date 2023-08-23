import axios from 'axios';

export const GetAllEmployees = () => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/empleados`);
    return data;
}

export const GetEmployeeById = (id) => {
    const {data} = axios.get(`${process.env.PUBLIC_NEXT_API_HOST}/api/empleados/${id}`);
    return data;
}

export const CreateEmployee = (employee) => {
    const {data} = axios.post(`${process.env.PUBLIC_NEXT_API_HOST}/api/empleados`,employee);
    return data;
}

export const ModifyEmployee = (id,employee) => {
    const {data} = axios.put(`${process.env.PUBLIC_NEXT_API_HOST}/api/empleados/${id}`,employee);
    return data;
}

export const DeleteEmployee = (id,employee) => {
    const {data} = axios.delete(`${process.env.PUBLIC_NEXT_API_HOST}/api/empleados/${id}`,employee);
    return data;
}

