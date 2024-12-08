import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Style/Footer.css';
import './Components/Style/NavBar.css'
import './Components/Style/MentionsLegales.css';
import './Components/Style/Services.css';
import './Components/Style/Contact.css';
import './Components/Style/PortFolio.css';
import '@fontsource/nunito-sans/400.css'; 
import '@fontsource/nunito-sans/600.css'; 
import './index.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
reportWebVitals();
