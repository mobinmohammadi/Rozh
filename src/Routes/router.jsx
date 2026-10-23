import { createBrowserRouter } from "react-router-dom";
import Home from "../assets/Page/Home";
import Portfolio from "../assets/Page/Portfolio";
import Header from "../assets/Layout/Header";

 const router = createBrowserRouter([
    {
        path : '/',
        element : <Header/>,
        errorElement : "",
        children : [
            {
                index : true , element : <Home/>,
                
            },
            {
                path : '/portfolio', element : <Portfolio/>
            }
        ]
    }
])


export default router