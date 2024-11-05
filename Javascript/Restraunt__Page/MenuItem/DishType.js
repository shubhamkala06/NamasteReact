const DishType = (props)=>{
    return (
    <>
        {props.isVeg==1?<img className="vegIcon" src="https://img.icons8.com/?size=100&id=61083&format=png&color=000000"></img>:<img className="nonVegIcon" src="https://img.icons8.com/?size=100&id=61082&format=png&color=000000"></img>}
    </>
    );
}

export default DishType;