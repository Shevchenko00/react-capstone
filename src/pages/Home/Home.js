import HeaderSection from "../../components/Header/Header";
import NavSection from "../../components/Nav/Nav";
import Logo from "../../images/Logo.svg";
import MainSection from "../../components/MainSection/MainSection";
import restauranfood from "../../images/restauranfood.jpg";
import greekSalad from "../../images/greekSalad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import lemonDessert from "../../images/lemonDessert.jpg";
import nike from "../../images/nike.jpg";
import adriana from "../../images/adriana.jpg";
import loice from "../../images/loice.jpg";
import john from "../../images/john.jpg";
import Adrian from "../../images/Adrian.jpg";
import Mario from "../../images/Mario.jpg";
import FooterSection from "../../components/Footer/Footer";
import './Home.css'
import CallToAction from "../../components/CallToAction/CallToAction";
import Specials from "../../components/Specials/Specials";
import CustomersSay from "../../components/CustomersSay/CustomersSay";
import Chicago from "../../components/Chicago/Chicago";
const Home = () => {
    return (
        <>
            <HeaderSection>
                <NavSection>
                    <ul className='title__navigate'>
                        <img className='logo__head' alt='header logo' src={Logo}/>
                        <li className='title__li'><a href='#'>Home</a></li>
                        <li className='title__li'><a href='#'>About</a></li>
                        <li className='title__li'><a href='#'>Menu</a></li>
                        <li className='title__li'><a href='/booking'>Reservations</a></li>
                        <li className='title__li'><a href='#'>Order Online</a></li>
                        <li className='title__li'><a href='#'>Login</a></li>
                    </ul>
                </NavSection>
            </HeaderSection>
            <MainSection>
                <CallToAction/>
               <Specials/>
                <CustomersSay/>
                <Chicago/>
        </MainSection>
            <FooterSection className='footer'>


                <div className='footer_sections'>
                    <h1>Doormat
                        Navigation</h1>
                    <NavSection>
                        <ul>
                            <li><a href='/booking'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Menu</a></li>
                            <li><a href='/booking'>Reservations</a></li>
                            <li><a href='/booking'>Order Online</a></li>
                            <li><a href='#'>Login</a></li>
                        </ul>
                    </NavSection>
                </div>
                <div className='footer_sections'>


                    <h1>Social media Links</h1>
                    <NavSection>
                        <ul>
                            <li><a href='#'>Adress</a></li>
                            <li><a href='#'>Phone number</a></li>
                            <li><a href='#'>Email</a></li>
                        </ul>
                    </NavSection>
                </div><div className='footer_sections'>


                <h1>Social media Links</h1>
                <NavSection>
                    <ul>
                        <li><a href='#'>Adress</a></li>
                        <li><a href='#'>Phone number</a></li>
                        <li><a href='#'>Email</a></li>
                    </ul>
                </NavSection>
            </div>
            </FooterSection>
        </>
    );
}

export default Home;