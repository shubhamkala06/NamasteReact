import RestrauntInfoCard from "./RestrauntInfoCard";
import RestrauntMenuSection from "./RestrauntMenuSection";
import ShimmerCard from "../ShimmerCard";
import useRestrauntMenu from "../../utils/useRestrauntMenu";

const RestrauntPage = ()=>{
    const t = location.pathname.split('-');
    const resInfo = useRestrauntMenu(t[t.length-1]);

    if(!resInfo){
        const num = 12;
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
        <div className="RestrauntPageContainer">
            <div className="RestrauntPage">
                <h1 className="RestrauntName">{resInfo?.['data']?.['cards']?.[2]?.['card']?.['card']?.['info']?.['name']}</h1>
                <RestrauntInfoCard {...resInfo}/>
                <div className="MenuHeading">
                        MENU
                </div>
                <RestrauntMenuSection {...resInfo}/>
            </div>
        </div>
    )
}

export default RestrauntPage;