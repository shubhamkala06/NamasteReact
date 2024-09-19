import React from "react";

class Creator extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            user:{
                name:"UserName",
                loc:"UserLocation",
                cont:"UserContact",
            }
        };
    }

    async componentDidMount(){
        const data = await fetch(`https://api.github.com/users/shubhamkala06`);
        const json = await data.json();
        this.setState({user:json});
    }

    render(){
        const {name,location,email,avatar_url} = this.state.user;
        return(
            <div className="creatorContainer" style={{padding:'10px 15px',margin:'10px 20px'}}>
                <img src={avatar_url} style={{width:'80px',height:'80px',margin:'5px'}}></img>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <p>Contact: {email}</p>
            </div>
        );
    }
}

export default Creator;