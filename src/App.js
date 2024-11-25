import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import PorteFolio from './Components/Pages/PorteFolio';
import Contact from './Components/Pages/Contact';
import MentionsLegales from './Components/Pages/MentionsLegales';



function App() {
    return (
        <>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Services' element={<Services />}></Route>
              <Route path='/PorteFolio' element={<PorteFolio />}></Route>
              <Route path='/Contact' element={<Contact />}></Route>
              <Route path='/MentionsLegales' element={<MentionsLegales />}></Route>


            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>

        </>
    );
}

export default App;
