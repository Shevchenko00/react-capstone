import './App.css';
import FooterSection from "./components/Footer";
import NavSection from "./components/Nav";
import HeaderSection from "./components/Header";
import MainSection from "./components/MainSection";

function App() {
    return (
        <>
            <HeaderSection>
                <img alt='header logo' src=''/>
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
            </HeaderSection>
            <MainSection>
                <section className='title'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned
                        Mediterranean restaurant,
                        focused on traditional
                        recipes served with a modern
                        twist</p>
                </section>
                <section className='specials'>
                    <h1>Specials</h1>
                    <article className='card'>
                        <img src='' alt='greek salad logo'/>
                        <h2>Greek salad</h2>
                        <p>$12.99</p>
                        <p>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Aenean in
                            arcu dapibus, aliquam ligula
                            et, pretium turpis. Mauris maximus
                            mi a </p>
                        <a href='#'>Order a delivery</a>
                    </article>

                    <article className='card'>
                        <img src='' alt='bruchetta logo'/>
                        <h2>Bruchetta</h2>
                        <p>$12.99</p>
                        <p>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Aenean in
                            arcu dapibus, aliquam ligula
                            et, pretium turpis. Mauris maximus
                            mi a </p>
                        <a href='#'>Order a delivery</a>
                    </article>
                    <article className='card'>
                        <img src='' alt='lemon dessert logo'/>
                        <h2>Lemon Dessert</h2>
                        <p>$12.99</p>
                        <p>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Aenean in
                            arcu dapibus, aliquam ligula
                            et, pretium turpis. Mauris maximus
                            mi a </p>
                        <a href='#'>Order a delivery</a>
                    </article>
                </section>
                <section className="Testimonials">
                    <article className='feedback__cards'>
                        <img src='' alt='mike'/>
                        <h2>Mike</h2>
                        <p>Description</p>
                    </article>
                    <article className='feedback__cards'>
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <img src='' alt='adriana'/>
                        <h2>Ariana</h2>
                        <p>Description</p>
                    </article>
                    <article className='feedback__cards'>
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <img src='' alt='loice'/>
                        <h2>Loice</h2>
                        <p>Description</p>
                    </article>
                    <article className='feedback__cards'>
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <img src='' alt='john'/>
                        <h2>John</h2>
                        <p>Description</p>
                    </article>
                </section>
                <section className='aboutUs'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean in arcu  dapibus, aliquam ligula et, pretium
                        turpis. Mauris maximus mi a venenatis tincidunt. Nunc at
                        diam blandit, porta enim quis, lacinia  lacus.
                        Morbi vehicula libero ut vulputate cursus.
                        Aliquam bibendum, nisi ac sodales</p>
                    <img alt='adrian photo'/>
                    <img alt='mario photo'/>
                </section>
            </MainSection>
            <FooterSection>
                <img alt='footer logo'/>
                <h1>Doormat Navigation</h1>
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

                <h1>Contact</h1>
                <NavSection>
                    <ul>
                        <li><a href='#'>Adress</a></li>
                        <li><a href='#'>Phone number</a></li>
                        <li><a href='#'>Email</a></li>
                    </ul>
                </NavSection>

                <h1>Social medoa Links</h1>
                <NavSection>
                    <ul>
                        <li><a href='#'>Adress</a></li>
                        <li><a href='#'>Phone number</a></li>
                        <li><a href='#'>Email</a></li>
                    </ul>
                </NavSection>
            </FooterSection>
        </>
    );
}

export default App;
