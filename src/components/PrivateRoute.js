import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";

export default function PrivateRoute() {
    const {user} = useUser();
    const location = useLocation();

    // this is when application isn't ready to provide user information yet
    if(user === undefined) {
        return null;
    }
    // this is when user value is truthy
    else if (user) {
        return <Outlet />;
    }
    // this is the case when user is null
    else {
        // storing the route that the user originally intends to go in a state prop of Navigate
        const url = location.pathname + location.search + location.hash;
        return <Navigate to="/login" state={{next: url}} />
    }
}