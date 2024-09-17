import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";

import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";



const PrivateRoute = ({ children, redirectTo = "/" }) => {
    
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? children : <Navigation redirectTo={redirectTo}/>
}

export default PrivateRoute