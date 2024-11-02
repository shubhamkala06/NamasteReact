import MenuItem from "./MenuItem";

const MenuItemCategory = (props)=>{
    const {title,itemCards} = props;
    
    return (
        <div className="itemCategoryContainer">
            <h2 className="itemCategoryTitle">{title}</h2>
            {itemCards.map((item)=>{
                const index = item?.["card"]?.["info"]?.["id"];
                return <MenuItem key = {index} {...item}/>
            })}
        </div>
    );
};


export default MenuItemCategory;

