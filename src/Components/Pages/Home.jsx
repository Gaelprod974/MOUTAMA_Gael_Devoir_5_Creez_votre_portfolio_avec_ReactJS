import '../Style/Home.css';
import MonImage from "../../Images/john-doe-about.jpg"; // Import de l'image locale
import ProgressBar from 'react-bootstrap/ProgressBar';


const Home = () => {
  return (
    <>
    <div className="ImageAccueil">
      <h1>Bonjour, je suis John Doe</h1>
      <h2>Développeur web fullstack</h2>
      <button className="btn-en-savoir-plus">En savoir plus</button>

    </div>
    <div className="container">
    <section className="section1">
      <h3>A propos </h3>
      <hr />
      <img src={MonImage} alt="Photo de John Doe" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      
    </section>
    <section className="section2">
      <h3>Mes compétences</h3>
      <hr />
      <div>
        <h4>HTML5 90%</h4>
        <ProgressBar variant="danger" now={90} />
        <h4>CSS3 80%</h4>
        <ProgressBar variant="info" now={80} />
        <h4>JAVASCRIPT 70%</h4>
        <ProgressBar variant="warning" now={70} />
        <h4>PHP 60%</h4>
        <ProgressBar variant="success" now={60} />
        <h4>REACT 50%</h4>
        <ProgressBar variant="ptimary" now={50} />

    </div>

    </section>
  </div>
  </>
  )
}

export default Home;