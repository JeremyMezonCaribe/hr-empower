import axios from "axios";
import { GetAuthenticationToken } from "./autenticacionService";
import { AUTH_API } from "@/shared/constants/auth";

export const GetAllVacations = async () => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/vacaciones`,
    { headers: { Authorization: token || "" } }
  );
  return data;
};

export const GetVacationById = async (id) => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/vacaciones/${id}`,
    { headers: { Authorization: token || "" } }
  );
  return data;
};

export const CreateVacation = async (vacation) => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/vacaciones`,
    vacation,
    { headers: { Authorization: token || "" } }
  );
  return data;
};

export const ModifyVacation = async (id, vacation) => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.put(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/vacaciones/${id}`,
    vacation,
    { headers: { Authorization: token || "" } }
  );
  return data;
};

export const DeleteVacation = async (id) => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/vacaciones/${id}`,
    { headers: { Authorization: token || "" } }
  );
  return data;
};
