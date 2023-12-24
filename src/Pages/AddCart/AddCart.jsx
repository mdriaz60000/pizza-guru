
import { useEffect, useState } from 'react';
import SaveCart from '../../Components/SaveCart/SaveCart';
import { Button } from 'flowbite-react';


const AddCart = () => {

    const [addCarts, setCarts] = useState([])
    const [noDatafound, setNoDataFound] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

 useEffect(()=>{
    const addCartItems = JSON.parse(localStorage.getItem('addCart'))
    if (addCartItems) {
        setCarts(addCartItems)
        // const priceIn = parseInt(price)
        // const pricepf = parseFloat(priceIn)

     const total = addCartItems.reduce((preValue, currentItem )=> preValue + currentItem.price,0)
     setTotalPrice(total)
    }
    else{
        setNoDataFound(addCartItems)
    }
 },[])
 const handleDelete = () =>{
    localStorage.clear()
    setCarts([])
    setNoDataFound('')
 }
    return (
        <div>
          
            {noDatafound ?<p> {noDatafound}</p>
            :

            <div className=''>
                <p>price : {totalPrice}</p>
                {addCarts.length > 0 &&    <Button onClick={handleDelete} className='mx-auto my-9'>delete Cart</Button>}
           
             <div className='grid md:grid-cols-3'>  
               {addCarts?.map(addCart=> <SaveCart addCart={addCart} key={addCart.id} ></SaveCart>)} 
                 </div>
            </div>

        }
          
        </div>
    );
};

export default AddCart;