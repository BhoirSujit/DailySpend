import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUserDataFromToken = () => {
    const token = getToken();

    if (!token) return null

    try {
        const decode = jwtDecode(token);
        return decode;
    } catch (error) {
        console.log(error);
        return null;
    }
}
