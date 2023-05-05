//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss'


import About from './components/About';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Offer from './components/Offer';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Feature/>
      <Offer/>
      <About/>
      <Contact/>
    </>
  );
}

export default App;
