import './Chicago.css'
import Adrian from "../../images/Adrian.jpg";
import Mario from "../../images/Mario.jpg";

const Chicago = () => {
    return(
        <>
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
        </>
    )
}

export default Chicago;