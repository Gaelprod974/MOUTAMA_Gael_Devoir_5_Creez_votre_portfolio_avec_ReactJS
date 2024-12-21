import React, { useState, useEffect } from 'react';
import '../Style/Home.css';
import MonImage from "../../Images/john-doe-about.jpg"; // Import de l'image locale
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [show, setShow] = useState(false);
  const [githubData, setGithubData] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    // Récupération des données GitHub au chargement de la page
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données GitHub:", error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <>
      <div className="ImageAccueil">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web fullstack</h2>
        <button className="btn-en-savoir-plus" onClick={handleShow}>En savoir plus</button>
      </div>
      <div className="row">
  <section className="col-md-5 cadre">
    <h3>A propos </h3>
    <hr className="border-primary" />
    <img className='ImageAPropos' src={MonImage} alt="John Doe" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </section>
  <section className="col-md-5 cadre">
    <h3>Mes compétences</h3>
    <hr className="border-primary" />
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
      <ProgressBar variant="primary" now={50} />
    </div>
  </section>
</div>


      <Modal show={show} onHide={handleClose} dialogClassName="modal-dark custom-modal">
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          {githubData ? (
            <div className="d-flex align-items-center">
              {/* Avatar prend 50% */}
              <div className="flex-grow-1" style={{ flexBasis: '50%' }}>
                <img 
                  src={githubData.avatar_url} 
                  alt="Avatar GitHub" 
                  className="img-fluid" 
                  style={{ width: '100%', height: 'auto' }} 
                />
              </div>
              {/* Texte prend le reste */}
              <div className="flex-grow-1" style={{ flexBasis: '50%' }}>
                <p><strong>Nom d'utilisateur :</strong> {githubData.name}</p>
                <p><strong>Bio :</strong> {githubData.bio}</p>
                <p><strong>Nombre de repositories publics :</strong> {githubData.public_repos}</p>
                <p><strong>Followers :</strong> {githubData.followers}</p>
                <p><strong>Following :</strong> {githubData.following}</p>
              </div>
            </div>
          ) : (
            <p>Chargement des données...</p>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
