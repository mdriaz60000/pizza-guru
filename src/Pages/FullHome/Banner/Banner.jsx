import { Carousel } from "flowbite-react";


const Banner = () => {
    return (
        <div className="h-40 w-58 sm:h-40 sm:w-40 xl:h-[500px] 2xl:h-[500px] lg:w-[1100px] mx-auto">
      <Carousel>
        <img className="h-full w-full" src="https://img.freepik.com/free-photo/pleased-happy-young-woman-gazes-with-happiness-points-with-thumb-aside-free-space-eats-pizza-shows-direction-keeps-jaw-dropped-exclaims-happiness-isolated-yellow-wall_273609-29201.jpg?size=626&ext=jpg&uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais" alt="..." />
        <img className="h-full w-full" src="https://img.freepik.com/premium-photo/portrait-two-hungry-young-men-eating-pizza_171337-33384.jpg?size=626&ext=jpg&uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais" alt="..." />
        <img className="h-full w-full" src="https://img.freepik.com/free-photo/smiling-good-looking-deliveryman-with-pizza-boxes_273609-31433.jpg?w=900&t=st=1703159000~exp=1703159600~hmac=2f860da350c986ba4c1f286438585714d39f72e13615a44672b6d2fe4b1a8c3d" alt="..." />
        <img className="h-full w-full" src="https://t3.ftcdn.net/jpg/06/35/12/22/240_F_635122206_unCE4PHUv7xaguV7NUjdQJE7TRdjwY7L.jpg" alt="..." />
        <img className="h-full w-full" src="https://img.freepik.com/free-photo/pizza-delivery-man-talking-mobile_1368-3765.jpg?size=626&ext=jpg&uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais" alt="..." />
      </Carousel>
    </div>
    );
};

export default Banner;