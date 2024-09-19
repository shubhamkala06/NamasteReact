import { IMG_URL } from "../utils/constants";
import { MyContext } from "./Context/MyContext";
import { useContext } from "react";

const MenuItem = (props)=>{
    const {name,ratings,description,imageId,isVeg} = props?.["card"]?.["info"];
    const {setName} = useContext(MyContext);
    return (
        <div className="menuItemContainer">
            <div className="itemInfo">
                {isVeg==1?<img className="vegIcon" src="https://img.icons8.com/?size=100&id=61083&format=png&color=000000"></img>:<img className="nonVegIcon" src="https://img.icons8.com/?size=100&id=61082&format=png&color=000000"></img>}
                <p className="itemHeading">
                    {name}
                </p>

                <div className="itemCost">
                    {'offerTags' in props?.["card"]?.["info"]?
                    <div>
                        <span className="strikeThroughCost">&#8377; {props?.["card"]?.["info"]?.price/100||props?.["card"]?.["info"]?.defaultPrice/100} </span>
                        <span className="cost">&#8377; {props?.["card"]?.["info"]?.["finalPrice"]/100}</span>
                    </div>
                    :
                    <span className="cost">&#8377; {props?.["card"]?.["info"]?.["price"]/100||props?.["card"]?.["info"]?.["defaultPrice"]/100}</span>}
                </div>

                {
                    Object.keys(ratings?.aggregatedRating).length==0?
                    <></>
                    :
                    <div className="ItemRating">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" fillcolor="#1BA672">
                            <rect width="14" height="14" fill="white"></rect>
                            <path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#1BA672"></path>
                        </svg>
                        <span className="rating">{ratings?.["aggregatedRating"]?.["rating"]}</span> <span className="ratingCount">({ratings?.["aggregatedRating"]?.["ratingCountV2"]})</span>
                    </div>
                }

                <div className="ItemDescription">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <div className="itemImg" onClick={()=>{
                setName(name);
            }}>
                <img src={IMG_URL+imageId}></img>
                <p>ADD</p>
            </div>
        </div>

    );
};

export default MenuItem;