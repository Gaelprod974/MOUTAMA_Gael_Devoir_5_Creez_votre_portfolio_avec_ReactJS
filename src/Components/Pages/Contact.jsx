
const Contact = () => {
  return (
    <>
    <div className="TitreContact">
      <h1>Contact</h1>
      <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
      <hr />
    </div>

    <div className="container">
      {/* Section Formulaire */}
      <div className="form-section">
        <h2>Formulaire de contact</h2>
        <hr />
        <form>
          <input type="text" name="nom" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre adresse email" required />
          <input type="tel" name="telephone" placeholder="Votre numéro de téléphone" required />
          <input type="text" name="sujet" placeholder="Sujet" required />
          <textarea name="message" rows="13" placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>

      {/* Section Coordonnées */}
      <div className="info-section">
        <h2>Mes coordonnées</h2>
        <hr />
        <h4>John Doe</h4>
        <p>40 rue Laure Diebold</p>
        <p>69009 Lyon, France</p>
        <p>10 20 30 40 50 60</p>
        <p>john.doe@gmail.com</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.4454062965146!2d4.803611715623093!3d45.77719857910596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eacbd4973013%3A0x3f3b24514ec1e2e9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1696622467753!5m2!1sen!2sfr"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>    
    </>
  )
}

export default Contact;