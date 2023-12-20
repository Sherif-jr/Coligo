import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const isLoggedIn = useSelector(
    (state: { auth: { isLoggedIn: boolean } }) => state.auth.isLoggedIn
  );
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
