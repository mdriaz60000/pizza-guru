import { useLoaderData } from "react-router-dom";
import Pizza from "../../../Components/Pizza/Pizza";


const Pizzas = () => {
    const pizzas = useLoaderData()

    return (
        <div className=" grid md:grid-cols-3 gap-6 ">
         {
              pizzas?.map(pizza => <Pizza key={pizza.id} pizza={pizza}></Pizza> )
         }
        </div>
    );
};

export default Pizzas;