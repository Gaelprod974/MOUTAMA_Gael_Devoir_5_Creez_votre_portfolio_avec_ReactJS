import React from 'react';
import NavBar from './Components/NavBar';


function App() {
    return (
        <>
          <header>
              <NavBar />
          </header>
          <main>
            
          </main>
          <footer class="footer">
            <div class="footer-column">
              <h4>Colonne 1</h4>
              <p>Contenu de la première colonne.</p>
            </div>
            <div class="footer-column">
              <h4>Colonne 2</h4>
              <p>Contenu de la deuxième colonne.</p>
            </div>
            <div class="footer-column">
              <h4>Colonne 3</h4>
              <p>Contenu de la troisième colonne.</p>
            </div>
        </footer>

        </>
    );
}

export default App;
