import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Nav";
import Body from "./Body";
import RestrauntPage from "./RestrauntPage"
import About from "./About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";


const App = ()=>{
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element : <Body/>
            },
            {
                path:"/offers",
                element:<>
                    <h1>This page shows offer!!</h1>
                </>
            },
            {
                path:"/help",
                element:<About/>
            },
            {
                path:"/restraunts/:resID",
                element:<RestrauntPage/>
            },
        ]
    }
])

root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router = {appRouter}/>);