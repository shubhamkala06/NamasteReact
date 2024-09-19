import React from "react";
import Creator from "./Creator";
// const About = ()=>{
//     return (
//         <h1>About Page</h1>
//     )
// }

class About extends React.Component{
    render(){
        return (
            <div className="aboutContainer">
                <Creator/>
            </div>
        );
    }
}

export default About;