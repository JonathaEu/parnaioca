import { APP_ROUTES } from "@/app/app/constants/app-route";

// @returns boolean
// @param asPath string
export const checkIsPublicRoute = (asPath: string) => {
    const appPublicRoutes = Object.values(APP_ROUTES.public);

    return appPublicRoutes.includes(asPath);
};