import { useState } from "react";
import { MyContext } from "./MyContext";

export const Ability = (props)=>{
    const [name,setName] = useState("Shubham");
    
    return(
        <MyContext.Provider value={{name,setName}}>
            {props.children}
        </MyContext.Provider>
    );
}