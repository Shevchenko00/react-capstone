import './App.css';
import FooterSection from "./components/Footer/Footer";
import NavSection from "./components/Nav/Nav";
import HeaderSection from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Logo from './images/Logo.svg'
import restauranfood from './images/restauranfood.jpg'
import greekSalad from './images/greekSalad.jpg'
import lemonDessert from './images/lemonDessert.jpg'
import bruchetta from './images/bruchetta.svg'
import nike from './images/nike.jpg'
import john from './images/john.jpg'
import loice from './images/loice.jpg'
import adriana from './images/adriana.jpg'
import Adrian from './images/Adrian.jpg'
import Mario from './images/Mario.jpg'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
        </Routes>
    );
}

export default App;
