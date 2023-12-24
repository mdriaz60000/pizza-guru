import { Button } from "flowbite-react";


const Services = () => {
    return (
        <div className=" grid md:grid-cols-2">
           <div className=" md:mt-28">
            <h1 className=" text-3xl text-blue-800 py-3">Our Best Foods</h1>
            <p className=" py-3">Order food online from one of the finest takeaways in town. Here at Jay’s Fast Food in Montrose, and are proud to serve the surrounding area. You can find our whole menu on our website, filled with mouth-watering dishes and catering for all kinds of different tastes!</p>
            <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
            </div> 
            <div>
            <img src="https://caspeerr.com/wp-content/uploads/2022/10/1600710931phpCcJhI0.webp" alt="" />
            </div>
        </div>
    );
};

export default Services;