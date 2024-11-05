import { IMG_URL } from "../../../utils/constants";
const DishImage = (props)=>{
    return(
        <div className="itemImg">
            {props.imageId===undefined?
                (<p className="addBtn1">ADD</p>)
            :
                (<>
                    <img src={IMG_URL+props.imageId}></img>
                    <p className="addBtn2">ADD</p>
                </>)
            }
        </div>
    );
};
export default DishImage;