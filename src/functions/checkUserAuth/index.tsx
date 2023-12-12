import { parseCookies } from "nookies";

export const checkUserAuth = () => {
    const cookies = parseCookies();
    const userToken = cookies.token
    return !!userToken;
};