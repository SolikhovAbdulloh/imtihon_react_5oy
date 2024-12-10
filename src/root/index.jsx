import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Notfound from "../components/NotFaund";
import Karzinka from "../pages/Karzinka";
import Like_page from "../pages/Like";
import Products from "../components/Products";

export const root = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {   
                path:'/',
                element:<Products/>
            },
            {
                path:'/karzinka',
                element:<Karzinka/>
            },
            {
                path:'/like',
                element:<Like_page/>
            }
        ]
       
    },
     {
            path:'*',
            element:<Notfound/>
}
])
