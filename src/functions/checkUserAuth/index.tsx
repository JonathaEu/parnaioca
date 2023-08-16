import { getTokenLocal } from "../get-token";

export const checkUserAuth = () => {
    const userToken = localStorage.getItem('ACCESS_TOKEN');

    return !!userToken;
};