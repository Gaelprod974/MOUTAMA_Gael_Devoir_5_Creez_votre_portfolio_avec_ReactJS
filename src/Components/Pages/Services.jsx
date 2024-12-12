import Banner from "../../Images/banner.jpg"; // Import de l'image locale
import UXImg from "../../Images/brush.svg";
import DEVImg from "../../Images/code-slash.svg";
import REFImg from "../../Images/search.svg";
import Card from 'react-bootstrap/Card';
import '../../Components/Style/Services.css';




const Services = () => {
  return (
    <>
    <div className="Services">
      <img src={Banner} alt="banner" />
      <h1>Mon offre de Services</h1>  
      <p>Voici les prestations sur lesquelles je peux intervenir</p>
      <hr className="border-primary" />
    </div>
    <div className="cards-container">
  <div className="Card">
    <Card className="ServiceCard">
      <Card.Body>
      <img 
            src={UXImg} 
            alt="UX Design" 
          />
        <Card.Title className="CardTitle">UX Design</Card.Title>
        <Card.Text>
          L'UX Design est une discipline que consiste à concevoir des produits (site web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préocupations. L'objectif est de rendre l'experience utilisateur la plus fluide et agréable possible.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="Card">
    <Card className="ServiceCard" >
      <Card.Body>
       <img 
            src={DEVImg} 
            alt="Développement web" 
          />
        <Card.Title className="CardTitle">Développement web</Card.Title>
        <Card.Text>
          Le développement de sites wed consiste a créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="Card">
    <Card className="ServiceCard" >
      <Card.Body>
        <img 
            src={REFImg} 
            alt="Référencement" 
          />
        <Card.Title className="CardTitle">Référencement</Card.Title>
        <Card.Text>
          Le référencement naturel (SEO) est une technique que consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>








    </>
  )
  }
  
  export default Services;