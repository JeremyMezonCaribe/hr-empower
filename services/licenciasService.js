import axios from "axios";
import { GetAuthenticationToken } from "./autenticacionService";
import { AUTH_API } from "@/shared/constants/auth";

export const GetAllLicenses = async () => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/licencias`,
    { headers: { Authorization: token || "" } }
  );
  return data;
};

export const GetLicensesById = async (id) => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/licencias/${id}`,
    { headers: { Authorization: token || "" } }
  );
  return data;
};

export const CreateLincense = async (license) => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/licencias`,
    license,
    { headers: { Authorization: token || "" } }
  );
  return data;
};

export const ModifyLincense = async (id, license) => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.put(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/licencias/${id}`,
    license,
    { headers: { Authorization: token || "" } }
  );
  return data;
};

export const DeleteLicense = async (id) => {
  const { token } = await GetAuthenticationToken(AUTH_API);
  const { data } = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/licencias/${id}`,
    { headers: { Authorization: token || "" } }
  );
  return data;
};
