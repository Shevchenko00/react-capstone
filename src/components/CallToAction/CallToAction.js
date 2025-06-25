import restauranfood from "../../images/restauranfood.jpg";
import './CallToAction.css'
const CallToAction = () => {
    return (<section className='title'>
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
        <img src={restauranfood} alt='food example'/>
    </section>)
}

export default CallToAction;