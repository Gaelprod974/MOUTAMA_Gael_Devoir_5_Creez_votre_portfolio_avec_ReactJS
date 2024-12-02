
import PortfolioCard from '../PortfolioCard';
import imagefreshFood from '../../Images/portfolio/fresh-food.jpg'
import imageRestaurantAkira from '../../Images/portfolio/restaurant-japonais.jpg'
import imagebienetre from '../../Images/portfolio/espace-bien-etre.jpg'
import imageseo from '../../Images/portfolio/seo.jpg'
import imagecoder from '../../Images/portfolio/coder.jpg'
import imagescreens from '../../Images/portfolio/screens.jpg'


const projects = [
  {
      title: 'Fresh Food',
      description: 'Site de vente de produit frais en ligne.',
      image: imagefreshFood,
      link: '#',
      techno:'Site réalisé avec PHP et MySQL'
  },
  {
      title: 'Restaurant Akira',
      description: 'Site de vente de produit frais en ligne.',
      image: imageRestaurantAkira,
      link: '#',
      techno:'Site réalisé avec PHP et MySQL'

  },
  {
      title: 'Espace bien-être',
      description: 'Site de vente de produit frais en ligne.',
      image: imagebienetre,
      link: '#',
      techno:'Site réalisé avec PHP et MySQL'

  },
  {
      title: 'SEO',
      description: "Amélioration de référencement d'un site e-commerce.",
      image: imageseo,
      link: '#',
      techno:'Site réalisé avec PHP et MySQL'

  },
  {
      title: "Création d'une API ",
      description: "Création d'une API RESTFULL publique",
      image: imagecoder,
      link: '#',
      techno:'Site réalisé avec PHP et MySQL'

  },
  {
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      image: imagescreens,
      link: '#',
      techno:'Site réalisé avec PHP et MySQL'

  },
];

const PorteFolio = () => {
  return (
    <>
    <div className='PorteFolio'>
      <h1>Porte Folio</h1>
      <p>Voici quelques-unes de mes réalisations.</p>
      <hr />
    </div>
    <div className="container my-5">
            <div className="row g-4">
                {projects.map((project, index) => (
                    <PortfolioCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      techno={project.techno}
                    />
                ))}
            </div>
        </div>

   
    
    
    </>
    
  )
  }
  
  export default PorteFolio;