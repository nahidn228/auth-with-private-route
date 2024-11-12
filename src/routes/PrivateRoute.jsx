import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>;
    </div>
  );
};

export default PrivateRoute;
