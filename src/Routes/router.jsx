import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Header from "../Layout/Header";
import SinglePage from "../pages/SinglePage";
import ContactUs from "../pages/ContactUs";

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
            },
            
             {
                path : '/portfolio/:Id', element : <SinglePage/>
            },
             {
                path : '/contact-us', element : <ContactUs/>
            }
        ]
    }
])


export default router