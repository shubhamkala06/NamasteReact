import React, { useEffect, useState } from "react";
import Card, { GoodRatedRestraunt } from "./Card";
import ShimmerCard from "./ShimmerCard";
import Search from "./Search";
import ActionButtons from "./ActionButtons";
import { COORDINATES } from "../utils/constants";

const Body = ()=>{
    const [Restraunts,setRestraunts] = useState([]);
    const [ResData,setResData] = useState([]);
    const FetchData = async function(){
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?${COORDINATES}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json_data = await data.json();
        let json = json_data?.["data"]?.["cards"]?.["4"]?.["card"]?.["card"]?.["gridElements"]?.["infoWithStyle"]?.["restaurants"];
        setRestraunts(json);
        setResData(json);
    }

    useEffect(()=>{
        FetchData();
    },[]);

    const GoodRated = GoodRatedRestraunt(Card);

    if(ResData.length===0){
        const num = 8;
        return (
        <>
            <div className="ShimmerControls">
                <div className="ShimmerSearch">

                </div>
                <div className="ShimmerFilter">
                    <div className="ShimmerIcon"></div>
                </div>
            </div>
            <div className="cardsContainer">
                {Array(num).fill().map((e,index)=>(
                    <ShimmerCard key={index}/>
                )
                )}
            </div>
        </>
        )
    }
    return (
        <>
            <div className="controls">
                <Search Data = {ResData} setResList = {setRestraunts}/>
                <ActionButtons setRestraunts = {setRestraunts} ResData = {ResData}/>
            </div>
            <div className="cardsContainer">
                {
                    Restraunts.map((e)=>(
                        e.info.avgRating>4.3?<GoodRated key={e.info.id} {...e.info}/>
                        :
                        <Card key={e.info.id} {...e.info}/>
                    ))
                }
            </div>
        </>
    )
};

export default Body;