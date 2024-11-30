import Banner from "../../Images/banner.jpg"; // Import de l'image locale
import UXImg from "../../Images/brush.svg";
import DEVImg from "../../Images/code-slash.svg";
import REFImg from "../../Images/search.svg";
import Card from 'react-bootstrap/Card';



const Services = () => {
  return (
    <>
    <div className="Services">
      <img src={Banner} alt="banner" />
      <h1>Mon offre de Services</h1>  
      <p>Voici les prestations sur lesquelles je peux intervenir</p>
      <hr />
    </div>
    <div className="cards-container">
  <div className="Card">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <img 
            src={UXImg} 
            alt="UX Design" 
          />
        <Card.Title className="CardTitle">UX Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="Card">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
       <img 
            src={DEVImg} 
            alt="Développement web" 
          />
        <Card.Title className="CardTitle">Développement web</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="Card">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <img 
            src={REFImg} 
            alt="Référencement" 
          />
        <Card.Title className="CardTitle">Référencement</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>








    </>
  )
  }
  
  export default Services;