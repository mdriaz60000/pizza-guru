import { Card } from "flowbite-react";


const SaveCart = ({addCart}) => {

    const {id, name,title, price, rating, img, likecount} =addCart|| {}
    return (
        <div>
                <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {title}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       ${price}
      </p>
    </Card>
        </div>
    );
};

export default SaveCart;