import { createBrowserRouter } from "react-router-dom";
import MySliderCom from "../components/MySliderCom";
import MyImageComp from "../components/MyImagesComp";
import PageNotFound from "../components/PageNotFound";
import ParentComp from "../components/ParentComp";
import ReactHooks from "../hooks/ReactHooks";
import UseStateHookComp from "../hooks/UseStateHookComp";
import UseEffectHookComp from "../hooks/UseEffectHookComp";
import MainDashBoardComp from "../layout/MainDashBoardComp";
import MyDashBoard from "../Task/MyDashBoard";
import VirtualDOMComp from "../components/VirtualDOMComp";
import FormValComp from "../Forms/FormValComp";
import ProductDashboardComp from "../CRUD/ProductDashboardComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateComp from "../CRUD/ProductUpdateComp";
import LoginComp from "../layout/LoginComp";
import ProctedRouting from "./ProctedRouting";


const router = createBrowserRouter([

    { path: "", element: <LoginComp /> },

    {path:"mydashboard",
        // element:<MyDashBoard /> ,
        element:<ProctedRouting Component={MyDashBoard} /> ,
         children: [

        // Default Routing
        { path: "", element: <MySliderCom /> },

        // Naming Routing
        { path: "mySlider", element: <MySliderCom /> },
        { path: "myImg", element: <MyImageComp /> },
        {path:"virtualDOM",element:<VirtualDOMComp />},
        {path:"formVal",element:<FormValComp />},
        {path:"productDB",element:<ProductDashboardComp />},
        {path:"productAdd",element:<ProductAddComp />},
        {path:"productUpdate",element:<ProductUpdateComp />},
        {path:"productUpdate/:id",element:<ProductUpdateComp />},

           // Parametermizing Routing
           { path: "parent/:id", element: <ParentComp /> },
           { path: "parent", element: <ParentComp /> },

           //child routing
           {
               path: "reactHook", element: <ReactHooks />, children: [
                   { path: "usestate", element: <UseStateHookComp /> },
                   { path: "useeffect", element: <UseEffectHookComp /> }
               ]
           }

        
]
},{path:"virtualDOM",element:<VirtualDOMComp />},
    {path: "main", element: <MainDashBoardComp />, children: [

            // Default Routing
            { path: "", element: <MySliderCom /> },

            // Naming Routing
            { path: "mySlider", element: <MySliderCom /> },
            { path: "myImg", element: <MyImageComp /> },
            { path:"virtualDOM",element:<VirtualDOMComp />},
            // Parametermizing Routing
            { path: "parent/:id", element: <ParentComp /> },
            { path: "parent", element: <ParentComp /> },

            //child routing
            {
                path: "reactHook", element: <ReactHooks />, children: [
                    { path: "usestate", element: <UseStateHookComp /> },
                    { path: "useeffect", element: <UseEffectHookComp /> }
                ]
            },

        ]
    },



    // Wirld-card Routing
    { path: "*", element: <PageNotFound></PageNotFound> }
])

export default router;