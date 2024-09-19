
const ActionButtons = (l)=>{
    const {setRestraunts,ResData} = l;
    return (
        <div className="actionButtons">
            <div className="filter" onClick={()=>{
                setRestraunts(ResData.filter((e)=>{
                    return e.info.avgRating>4.2;
                }));
            }}>
                <i className="ri-filter-line filterIcon"></i>
            </div>
        </div>
    )
}

export default ActionButtons;