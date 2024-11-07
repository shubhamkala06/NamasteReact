import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Nav";
import Body from "./Body";
import RestrauntPage from "./Restraunt__Page/RestrauntPage"
import About from "./About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux Store/Store";


const App = ()=>{
    return (
        <Provider store={Store}>
            <Header/>
            <Outlet/>
        </Provider>
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