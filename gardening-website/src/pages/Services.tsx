import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
    {
        title: 'Analyse du sol',
        description: 'Bilan complet de la fertilite et plan de correction naturel.',
        duration: '1 jour',
        highlight: 'Sol sain',
    },
    {
        title: 'Traitement anti-parasites bio',
        description: 'Protection douce avec solutions naturelles et prevention ciblee.',
        duration: '2 a 3 jours',
        highlight: 'Protection',
    },
];

const Services: React.FC = () => {
    return (
        <section className="simple-page">
            <h1>Services VertAtlas</h1>
            <p>Nos interventions couvrent diagnostic, traitement et suivi de croissance.</p>
            <div className="service-grid">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        duration={service.duration}
                        highlight={service.highlight}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
