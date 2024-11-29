import Accordion from 'react-bootstrap/Accordion';

const MentionsLegales = () => {
  return (
    <>
    <div className="Mentions-Legales">
      <h1>Mentions Légales</h1>  
      <div className='Accordion'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Editeur du site</Accordion.Header>
        <Accordion.Body>
          <h4>John Doe</h4>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50 60</p>
          <p>john.doe@gmail.com</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
          <h4>alwaysdata</h4>
          <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
          <p>www.alwaysdata.com</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
          <h4>Crédits</h4>
          <p>Ce site a été réalisé par John Doe, étudiant au Centre Européen de formation.</p>
          <p>Les images utilisées sur ce site sont libres de droits er ont été obtenues sur le siet Pixabay</p>
          <p>la favicon de ce site a été fournie par John Doe Icons erstellt von FFreepik - Flaticon</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
    </>
  )
  }
  
  export default MentionsLegales;


