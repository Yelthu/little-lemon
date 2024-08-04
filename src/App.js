import './App.css';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}

export default App;
