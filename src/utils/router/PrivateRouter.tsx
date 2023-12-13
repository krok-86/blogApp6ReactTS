import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";

import { Navigate, Outlet } from "react-router-dom";

import { URLS } from "../../constants";

const PrivateRoute = () => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Outlet /> : <Navigate to={URLS.REG} replace />;
};
export default PrivateRoute;
