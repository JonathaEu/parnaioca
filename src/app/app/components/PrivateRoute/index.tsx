import { APP_ROUTES } from "@/app/app/constants/app-route";
import Unauthorized from "@/functions/UnAuthAlert";
import { checkUserAuth } from "@/functions/checkUserAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react"


type PrivateRouteProps = {
    children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { push } = useRouter();
    const isUserAuthenticated = checkUserAuth();

    useEffect(() => {
        if (!isUserAuthenticated) {
            push(APP_ROUTES.public.home);
            Unauthorized();
        }

    }, [isUserAuthenticated, push]);

    return (
        <>
            {!isUserAuthenticated && null}
            {isUserAuthenticated && children}
        </>
    )
}

export default PrivateRoute;