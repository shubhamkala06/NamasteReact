import Type from "./MenuItem/DishType";
import DishHeading from "./MenuItem/DishHeading";
import DishPrice from "./MenuItem/DishPrice";
import DishRating from "./MenuItem/DishRating";
import DishDescription from "./MenuItem/DishDescription";
import DishImage from "./MenuItem/DishImage";

const MenuItem = (props)=>{
    const {name,ratings,description,imageId,isVeg} = props?.["card"]?.["info"];
    return (
        <div className="menuItemContainer">
            <div className="itemInfo">
                <Type isVeg={isVeg}/>
                <DishHeading name={name}/>
                <DishPrice {...props}/>
                <DishRating ratings={ratings}/>
                <DishDescription description={description}/>
            </div>
            <DishImage imageId={imageId}/>
        </div>
        
    );
};

export default MenuItem;