import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link,  useLoaderData,  useParams } from "react-router-dom";
import DetailsCart from "./DetailsCart";


const Details = () => {

const pizzas = useLoaderData()
// console.log(pizzas)
    const {id} = useParams()
    // console.log(id)
  const [foods, setFoods] = useState({})
 
   useEffect(()=>{
    const findPizza = pizzas?.find(pizza=> pizza.id===id)
    // console.log(findPizza)
      setFoods(findPizza)
     },[pizzas, id])
    //  console.log(foods)

    return (
     
      <div className=" flex justify-center items-center ">

  <DetailsCart foods={foods} ></DetailsCart>
    

      </div>
    );
};

export default Details;