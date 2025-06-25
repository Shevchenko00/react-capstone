import greekSalad from "../../images/greekSalad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import lemonDessert from "../../images/lemonDessert.jpg";
import './Specials.css'
const Specials = () => {
    return (
        <>
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
        </>
    )
}

export default Specials;