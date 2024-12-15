import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Notfound from "../components/NotFaund";
import Karzinka from "../pages/Karzinka";
import Like_page from "../pages/Like";
import Products from "../components/Products";
import Dashboard from "../dashboard";
import All_products from "../dashboard/all_product";
import Edit_products from "../dashboard/edit_component";
import Delete_products from "../dashboard/delete_product";
import Add_product from "../dashboard/add_product";

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
            },
            {
                path:'/dashboard',
                element:<Dashboard/>,
                children:[
                    {
                        path:'/dashboard/all',
                        element:<All_products/>,

                    },
                    {
                        path:'/dashboard/edit',
                        element:<Edit_products/>
                    },
                    {
                        path:'/dashboard/delete',
                        element:<Delete_products/>
                    },
                    {
                        path:'/dashboard/add',
                        element:<Add_product/>
                    }
                ]
            }
        ]
       
    },
     {
            path:'*',
            element:<Notfound/>
}
])
