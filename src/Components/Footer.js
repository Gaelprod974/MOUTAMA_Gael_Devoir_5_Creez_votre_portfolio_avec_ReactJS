import { Link} from 'react-router-dom';


function Footer() {
  return (
    <footer class="footer">
        <div class="footer-column">
            <h4>John Doe</h4>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50 60</p>
            <p>john.doe@gmail.com</p>
        </div>
        <div class="footer-column">
        <h4>Liens Utiles</h4>
            <div class="liensUtiles">
                <Link to="/">Accueil</Link>
                <Link to="/Services">Services</Link>
                <Link to="/PorteFolio">Portfolio</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/MentionsLegales">Mention Légales</Link>
            </div>
           
        </div>
        <div class="footer-column">
        <h4>Mes dernières réalisations</h4>
            <div class="MesDernieresRealisations">
                <Link to="/PorteFolio">Fresh Food</Link>
                <Link to="/PorteFolio">Restaurant Akira</Link>
                <Link to="/PorteFolio">Espace bien-être</Link>
                <Link to="/PorteFolio">SEO</Link>
                <Link to="/PorteFolio">Création d'une API</Link>
                <Link to="/PorteFolio">Maquette d'un site</Link>
            </div> 
        </div>
    </footer>
      )
};

export default Footer;
