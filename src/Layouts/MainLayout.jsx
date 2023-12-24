import { Outlet } from "react-router-dom";
import Navber from "../Components/Shered/Navber/Navber";
import Footerx from "../Components/Shered/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
          <Navber></Navber>
          <Outlet></Outlet>
          <Footerx></Footerx>
          
        </div>
    );
};

export default MainLayout;