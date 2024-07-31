import '../App.css';
import CallToAction from './CallToAction'
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';


const Home = () => {
    return (
        <>
                <CallToAction />
                <Specials />
                <CustomersSay />
                <Chicago />
        </>
    )
}

export default Home;