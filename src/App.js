
import { useEffect, useState } from 'react';
import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';
import Service from './sections/Service';
import Team from './sections/Team';
import Navbar from './components/Navbar';
import Loading from './sections/Loading';

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // const test = window.setTimeout(() => {
    //   setShow(false);
    // }, 1500);
    // return () => {
    //   clearInterval(test);
    // };
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1500);
  }, []);

  return (
    <>
      {show ? <Loading /> :
        <>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Service />
          <Team />
          <Contact />
        </>
      }
    </>
  );
}

export default App;
