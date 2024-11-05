const DishPrice = (props)=>{
    return(
        <div className="itemCost">
            {
                !('offerTags' in props?.["card"]?.["info"])?
                (<span className="cost">&#8377; {props?.["card"]?.["info"]?.["price"]/100||props?.["card"]?.["info"]?.["defaultPrice"]/100}</span>)
                :
                (
                    JSON.stringify(props?.["card"]?.["info"]?.['offerTags'][0])==='{}'?
                    (<div>
                        <span className="strikeThroughCost">&#8377; {props?.["card"]?.["info"]?.price/100||props?.["card"]?.["info"]?.defaultPrice/100} </span>
                        <span className="cost">&#8377; {props?.["card"]?.["info"]?.["finalPrice"]/100}</span>
                    </div>)
                    :
                    (<div>
                        <span className="cost">&#8377; {props?.["card"]?.["info"]?.["price"]/100||props?.["card"]?.["info"]?.["defaultPrice"]/100}</span>
                        <span className="discountIcon"><i className="ri-price-tag-3-fill"></i></span><span className="discountPrice">{props?.["card"]?.["info"]?.['offerTags'][0]?.['title']} {props?.["card"]?.["info"]?.['offerTags'][0]?.['subTitle']}</span>
                    </div>)
                )
            }
        </div>
    );
};

export default DishPrice;