import MenuCategory from "./MenuCategory";

const MenuNestedCategory = (props)=>{
    const {title,categories} = props;
    return (
        <div className="nestedCategoryContainer">
            <h2>{title}</h2>
            {categories.map((c,index)=>(
                <MenuCategory {...c} key={index}/>
            ))}
        </div>
    );
};


export default MenuNestedCategory;