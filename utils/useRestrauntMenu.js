import { useEffect, useState } from "react";
import { COORDINATES } from "./constants";

const useRestraunMenu = (resId)=>{
    const [res,setRes] = useState(null);
    
    const fetchData = async ()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&${COORDINATES}&restaurantId=${resId}`);
        const json_data = await data.json();
        setRes(json_data);
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return res;
}

export default useRestraunMenu;