import { BrowserRouter, Routes,Route } from "react-router-dom";
import Homerouter from "./pages/home/home";
import LoginForm from "./pages/login/login";
import RegisterForm from "./pages/register/register";
import UrlShortener from "./pages/shorten_url/shorten-url";
import Redirecturl from "./pages/shorten_url/redirecturl";

const AppRoutes = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Homerouter/>}/>;
                    <Route path='/' element={<LoginForm />}/>;
                    <Route path='/register' element={<RegisterForm />}/>;
                    <Route path='/shorten-url' element={<UrlShortener />}/>;
                    <Route path='/shorturl/:url_id' element={<Redirecturl />}/>;
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;