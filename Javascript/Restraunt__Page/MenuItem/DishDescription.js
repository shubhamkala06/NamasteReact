import { useState } from "react";

const DishDescription = (prop)=>{
    const {description} = prop;
    const [expand,setExpand] = useState(false);
    return description===undefined?
        (<></>)
    :
        description.length<=120?
            <div className="itemDescription">
                <span>{description}</span>
            </div>
        :
        (
            <div className="itemDescription">
                <p>
                    {!expand?
                        <>
                            <span>{description.slice(0,120)}</span>
                            <span onClick={()=>{setExpand(true)}} className="expand">...read more</span>
                        </>
                    :
                        <span>{description}</span>
                    }
                </p>
            </div>
        );
};

export default DishDescription;