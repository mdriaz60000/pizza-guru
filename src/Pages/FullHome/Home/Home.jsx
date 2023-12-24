

import Banner from "../Banner/Banner";
import Pizzas from "../Pizzas/Pizzas";
import Services from "../Services/Services";


const Home = () => {

    return (
        <div>
         <Banner></Banner>
         <div>
          <p className=" text-4xl font-bold text-center py-10">Pizza Categories</p>
      <Pizzas ></Pizzas>

      <p className=" text-4xl font-bold text-center mt-10">Our Serviceses</p>
      <Services></Services>
         </div>
   
        

        </div>
    );
};

export default Home;