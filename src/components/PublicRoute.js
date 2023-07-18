import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";

export default function PublicRoute () {
    const {user} = useUser();

    if(user === undefined) {
        return null;
    }
    else if (user) {
        return <Navigate to="/" />
    } else {
        return <Outlet />;
    }
}