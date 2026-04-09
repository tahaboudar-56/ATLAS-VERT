import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';

interface GrowthStage {
    name: string;
    detail: string;
    days: string;
    fill: string;
    image: string;
}

const services = [
    {
        title: 'Analyse du sol',
        description: 'Mesure du pH, test des nutriments et plan de correction naturel pour relancer la vie microbienne.',
        duration: '1 jour',
        highlight: 'Sol sain',
    },
    {
        title: 'Traitement anti-parasites bio',
        description: 'Protocoles a base de plantes compagnes et solutions douces pour proteger vos cultures.',
        duration: '2 a 3 jours',
        highlight: 'Protection',
    },
    {
        title: 'Programme de nutrition',
        description: 'Calendrier d amendement saisonnier pour stimuler la croissance sans produits agressifs.',
        duration: '4 semaines',
        highlight: 'Croissance',
    },
    {
        title: 'Suivi d arrosage intelligent',
        description: 'Repartition des apports selon exposition, type de sol et meteo locale de votre zone.',
        duration: 'En continu',
        highlight: 'Eau maitrisee',
    },
];

const growthStages: GrowthStage[] = [
    {
        name: 'Germination',
        detail: 'La graine se reveille et amorce sa premiere racine.',
        days: 'Jours 1-5',
        fill: '25%',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1100&q=80',
    },
    {
        name: 'Jeune pousse',
        detail: 'La tige sort du sol et les premieres feuilles captent la lumiere.',
        days: 'Jours 6-15',
        fill: '50%',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1100&q=80',
    },
    {
        name: 'Developpement',
        detail: 'Les branches se renforcent et la plante gagne en volume.',
        days: 'Jours 16-28',
        fill: '75%',
        image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1100&q=80',
    },
    {
        name: 'Floraison',
        detail: 'Les fleurs apparaissent et la plante atteint son plein potentiel.',
        days: 'Jours 29-45',
        fill: '100%',
        image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&w=1100&q=80',
    },
];

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1460533893735-45cea2212645?auto=format&fit=crop&w=1200&q=80',
        alt: 'Jardin traite avec VertAtlas',
        caption: 'Avant et apres un traitement complet',
    },
    {
        src: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&w=1200&q=80',
        alt: 'Equipe de jardinage en intervention',
        caption: 'Intervention precise par zone',
    },
    {
        src: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=80',
        alt: 'Plantes en croissance dans un jardin',
        caption: 'Suivi de croissance semaine par semaine',
    },
];

const Home: React.FC = () => {
    return (
        <div className="page">
            <Header />

            <main>
                <section className="hero section">
                    <div className="hero-copy animate-enter">
                        <p className="hero-tag">Plateforme de gestion du traitement de jardin</p>
                        <h1>VertAtlas fait grandir vos plantes, du diagnostic a la floraison.</h1>
                        <p>
                            Planifiez les soins, suivez les etapes de croissance et visualisez les resultats avec une methode
                            naturelle adaptee a votre terrain.
                        </p>
                        <div className="hero-actions">
                            <a href="#reservation" className="btn btn-primary">Demarrer le traitement</a>
                            <a href="#croissance" className="btn btn-outline">Voir la croissance</a>
                        </div>
                    </div>

                    <div className="growth-visual" aria-hidden="true">
                        <div className="sun"></div>
                        <div className="soil"></div>
                        <div className="seed"></div>
                        <div className="stem"></div>
                        <div className="leaf leaf-left"></div>
                        <div className="leaf leaf-right"></div>
                        <div className="flower"></div>
                    </div>
                </section>

                <section id="services" className="section">
                    <div className="section-header">
                        <h2>Traitements disponibles</h2>
                        <p>Des interventions claires avec priorite sur la sante du sol et la croissance durable.</p>
                    </div>
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

                <section id="croissance" className="section">
                    <div className="section-header">
                        <h2>Comment les plantes grandissent</h2>
                        <p>Chaque etape est tracee pour adapter le traitement au bon moment.</p>
                    </div>
                    <div className="growth-grid">
                        {growthStages.map((stage, index) => (
                            <article className="growth-card" key={stage.name}>
                                <img src={stage.image} alt={stage.name} loading="lazy" />
                                <div className="growth-content">
                                    <p className="growth-step">Etape {index + 1}</p>
                                    <h3>{stage.name}</h3>
                                    <p>{stage.detail}</p>
                                    <span>{stage.days}</span>
                                    <div className="progress-track">
                                        <div className="progress-fill" style={{ width: stage.fill }}></div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="galerie" className="section">
                    <div className="section-header">
                        <h2>Galerie VertAtlas</h2>
                        <p>Des images reelles de jardins traites et suivis en croissance.</p>
                    </div>
                    <div className="gallery-grid">
                        {galleryImages.map((item) => (
                            <figure className="gallery-card" key={item.src}>
                                <img src={item.src} alt={item.alt} loading="lazy" />
                                <figcaption>{item.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                <section id="reservation" className="section booking-section">
                    <div className="booking-layout">
                        <div className="booking-copy">
                            <h2>Plan de traitement personnalise</h2>
                            <p>
                                Decrivez votre jardin, choisissez la zone a traiter et recevez un protocole clair pour lancer
                                la croissance.
                            </p>
                            <ul className="stats-list">
                                <li>
                                    <strong>24h</strong>
                                    <span>Delai moyen de reponse</span>
                                </li>
                                <li>
                                    <strong>92%</strong>
                                    <span>Jardins avec croissance amelioree</span>
                                </li>
                                <li>
                                    <strong>100% bio</strong>
                                    <span>Traitements doux pour le sol</span>
                                </li>
                            </ul>
                        </div>
                        <BookingForm />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
