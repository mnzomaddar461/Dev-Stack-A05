import Footer from "./Components/Footer";
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Technologies from "./Components/Technologies/Technologies"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div>
        <Nav/>
        <Hero/>
        <Technologies/>
        <ToastContainer position="bottom-right" autoClose={3000} />
        <Footer/>
      </div>
    </>
  )
}

export default App
