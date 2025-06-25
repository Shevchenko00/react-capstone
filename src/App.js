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

function App() {
    return (
        <>
            <HeaderSection>
                <NavSection>
                    <ul className='title__navigate'>
                        <img className='logo__head' alt='header logo' src={Logo}/>
                        <li className='title__li'><a href='#'>Home</a></li>
                        <li className='title__li'><a href='#'>About</a></li>
                        <li className='title__li'><a href='#'>Menu</a></li>
                        <li className='title__li'><a href='#'>Reservations</a></li>
                        <li className='title__li'><a href='#'>Order Online</a></li>
                        <li className='title__li'><a href='#'>Login</a></li>
                    </ul>
                </NavSection>
            </HeaderSection>
            <MainSection>
                <section className='title'>
                    <div className="title-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            We are a family owned<br/>
                            Mediterranean restaurant,<br/>
                            focused on traditional<br/>
                            recipes served with a modern<br/>
                            twist<br/>
                        </p>
                        <button className='btn'>Reserve a table</button>
                    </div>
                    <img src={restauranfood} alt='food example' />
                </section>
                <div className='specials_container'>
                    <h1 className='specials_title'>Specials</h1>
                    <button className='btn specials_btn'>On the Menu</button>
                </div>

                <section className='specials'>
                    <article className='card'>
                        <img src={greekSalad} alt='greek salad logo'/>
                        <h2>Greek salad</h2>
                        <p className='price'>$12.99</p>
                        <p>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Aenean in
                            arcu dapibus, aliquam ligula
                            et, pretium turpis. Mauris maximus
                            mi a </p>
                        <a href='#'>Order a delivery</a>

                    </article>

                    <article className='card'>
                        <img src={bruchetta} alt='bruchetta logo'/>
                        <h2>Bruchetta</h2>
                        <p className='price'>$12.99</p>
                        <p>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Aenean in
                            arcu dapibus, aliquam ligula
                            et, pretium turpis. Mauris maximus
                            mi a </p>
                        <a href='#'>Order a delivery</a>
                    </article>
                    <article className='card'>
                        <img src={lemonDessert} alt='lemon dessert logo'/>
                        <h2>Lemon Dessert</h2>
                        <p className='price'>$12.99</p>
                        <p>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Aenean in
                            arcu dapibus, aliquam ligula
                            et, pretium turpis. Mauris maximus
                            mi a </p>
                        <a href='#'>Order a delivery</a>
                    </article>
                </section>
                <section className="testimonials">
                    <div className="testimonials__wrapper">
                        <h1>Testimonials</h1>

                        <div className="feedback__container">
                            <article className="feedback__cards">
                                <h2>⭐⭐⭐⭐⭐</h2>
                                <img src={nike} alt="mike" />
                                <h2>Mike</h2>
                                <p>Description</p>
                            </article>

                            <article className="feedback__cards">
                                <h2>⭐⭐⭐⭐⭐</h2>
                                <img src={adriana} alt="adriana" />
                                <h2>Ariana</h2>
                                <p>Description</p>
                            </article>

                            <article className="feedback__cards">
                                <h2>⭐⭐⭐⭐⭐</h2>
                                <img src={loice} alt="loice" />
                                <h2>Loice</h2>
                                <p>Description</p>
                            </article>

                            <article className="feedback__cards">
                                <h2>⭐⭐⭐⭐⭐</h2>
                                <img src={john} alt="john" />
                                <h2>John</h2>
                                <p>Description</p>
                            </article>
                        </div>
                    </div>
                </section>
                <section className="aboutUs">
                    <div className="about-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu
                            dapibus, aliquam ligula et, pretium turpis. Mauris maximus mi a venenatis
                            tincidunt. Nunc at diam blandit, porta enim quis, lacinia lacus. Morbi
                            vehicula libero ut vulputate cursus. Aliquam bibendum, nisi ac sodales
                        </p>
                    </div>
                    <div className="about-images">
                        <img src={Adrian} alt="Adrian" className="image-back" />
                        <img src={Mario} alt="Mario" className="image-front" />
                    </div>
                </section>

            </MainSection>
            <FooterSection className='footer'>


                <div className='footer_sections'>
                    <h1>Doormat
                        Navigation</h1>
                    <NavSection>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Menu</a></li>
                            <li><a href='#'>Reservations</a></li>
                            <li><a href='#'>Order Online</a></li>
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

export default App;
