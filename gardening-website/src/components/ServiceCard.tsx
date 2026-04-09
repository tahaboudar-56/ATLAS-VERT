import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    duration: string;
    highlight: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, duration, highlight }) => {
    return (
        <article className="service-card">
            <span className="service-pill">{highlight}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="service-meta">Duree moyenne: {duration}</p>
        </article>
    );
};

export default ServiceCard;
