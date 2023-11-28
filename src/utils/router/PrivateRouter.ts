import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";


const PrivateRoute = () => {
    const isAuth = useSelector(selectIsAuth);   
    return (
isAuth ? <Outlet /> : <Navigate to="/registration" replace = {true}/>
    );
};
export default PrivateRoute;