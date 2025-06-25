import './CustomersSay.css'
import nike from "../../images/nike.jpg";
import adriana from "../../images/adriana.jpg";
import loice from "../../images/loice.jpg";
import john from "../../images/john.jpg";


const CustomersSay = () => {
    return(
        <>
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
        </>
    )
}


export default CustomersSay;