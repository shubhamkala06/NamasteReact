import React from 'react';
import { IMG_URL} from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const Card = (l)=>{
    const navigate = useNavigate();
    function toResMenu(e){
        const t = l['name'].split(" ").join('-').toLowerCase()+'-'+l['areaName'].split(" ").join('-').toLowerCase()+'-'+l['id'];
        navigate(`/restraunts/${t}`);
    }


    return (
        <div className="card" onClick={toResMenu}>
            <div className="cardImg">
                <img src={IMG_URL+l["cloudinaryImageId"]}></img>
            </div>
            <div className="cardInfo">
                <div className="cardName">
                    {l["name"]}
                </div>
                <div className="cardCuisines">
                    {l['cuisines'].join(", ")}
                </div>
                <div className="cardRating">
                    {`Ratings - ${l["avgRating"]}`}
                </div>
                <div className="cardLocation">
                    {l["areaName"]}
                </div>
            </div>
        </div>
    )
};

export const GoodRatedRestraunt = ()=>{
    return ((props)=>{
        return(
            <div className='goodRatedRestrauntContainer'>
                <div className='goodLabel'>Top Rated</div>
                <Card {...props}/>
            </div>
        );
    });
}

export default Card;