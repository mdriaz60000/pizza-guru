import { Button, Card, Spinner } from "flowbite-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import {  Navigate } from "react-router-dom";


const DetailsCart = ({foods}) => {
  const {user,loading} = useContext(AuthContext)
    // console.log(foods)
    const {id, name,title, price, rating, img, likecount} = foods || {}

    const handleAdd = () =>{
if (user) {
  const addedCartarray = [];
      
  const addCartItems = JSON.parse(localStorage.getItem('addCart'))
 if (!addCartItems) {
  addedCartarray.push(foods)
  localStorage.setItem('addCart', JSON.stringify(addedCartarray))

 }
 else{

  const isExist = addCartItems.find(food => food.id===id)
    if (!isExist) {
      addedCartarray.push(...addCartItems, foods)
      localStorage.setItem('addCart', JSON.stringify(addedCartarray))
      Swal.fire({
        title: "successfully added cart!",
        icon: "success"
      });
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'allReady ache',
        icon: 'error',
        confirmButtonText: 'any cart try'
      })
    }
 
 }
} 
else{
confirm('login')
 
}
 
    }

    return (
        <Card
        className="max-w-sm "
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="data:image/jpeg;base64,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"
      >
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
           {name}
          </h5>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">
          <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          <Button
            href="#"
            onClick={handleAdd}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </Button>
        </div>
      </Card>
    );
};

export default DetailsCart;