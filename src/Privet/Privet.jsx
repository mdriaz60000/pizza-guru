import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";


const Privet = ({children }) => {
    const {user , loading} = useContext(AuthContext)
    if (loading) {
        return  <Spinner aria-label="Large spinner example" size="lg" />
    }
 if (user) {
    return children
 }

    return <Navigate to='/' ></Navigate>
};

export default Privet;