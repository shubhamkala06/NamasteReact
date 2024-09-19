import { useState } from "react";


const Search = (l)=>{
    const {setResList,Data} = l;
    const [Srch,setSrch] = useState("");
    const changeInputVal = function(e){
        setSrch(e.target.value);
    }

    const search = (e)=>{
        if(e.type == "keydown" && e.key == "Enter"){
            setResList(Data.filter((r)=>{
                if(r.info.name.toLowerCase().indexOf(Srch.toLocaleLowerCase())!=-1){
                    return true;
                }
                else{
                    return false;
                }
            }))
        }
        else if(e.type == "click"){
            setResList(Data.filter((r)=>{
                if(r.info.name.toLowerCase().indexOf(Srch.toLocaleLowerCase())!=-1){
                    return true;
                }
                else{
                    return false;
                }
            }))
        }
    }

    return(
        <div className="search">
            <span><i className="ri-search-line srch" onClick={search}></i></span>
            <div className="division"></div>
            <input type="text" className="searchField" placeholder="Search for restraunt, cuisine or a dish" value={Srch} onKeyDown={search} onChange={changeInputVal}></input>
        </div>
    );
}

export default Search;