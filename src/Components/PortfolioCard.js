import React from 'react';

const PortfolioCard = ({ title, description, image, link, techno, }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body portfolioCard">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary btn-custom">Voir le projet</a>
                </div>
                <div className="card-footer text-muted">
                    {techno}
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
