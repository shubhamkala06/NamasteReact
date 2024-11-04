import MenuItem from "./MenuItem";

const MenuCategory = (props)=>{
    const {title,itemCards} = props;
    return (
        <div className="categoryContainer">
            <h2 className="categoryTitle">{title}</h2>
            {itemCards.map((item)=>(
                <MenuItem key={item?.["card"]?.["info"]?.["id"]} {...item}/>
            ))}
        </div>
    );
};

export default MenuCategory;