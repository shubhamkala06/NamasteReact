import MenuItemCategory from "./MenuItemCategory";
import MenuNestedCategory from "./MenuNestedCategory";

const RestrauntMenuSection = (props)=>{
    const menus = props?.['data']?.['cards']?.[4]?.['groupedCard']?.['cardGroupMap']?.['REGULAR']?.['cards'];
    menus.shift();
    menus.shift();
    menus.pop();
    menus.pop();
    return(
        <div className="MenuSection">
            {menus.map((e,index)=>(
                e?.["card"]?.['card']?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"?
                <MenuItemCategory {...e?.["card"]?.['card']} key={index}/> :
                e?.["card"]?.['card']?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"?
                <MenuNestedCategory {...e?.["card"]?.['card']} key={index}/>:<></>
            )
            )}
        </div>
    );
};

export default RestrauntMenuSection;