import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="brand-block">
                <span className="brand-name">VertAtlas</span>
                <span className="brand-subtitle">Traitement intelligent du jardin</span>
            </div>
            <nav className="site-nav" aria-label="Navigation principale">
                <a href="#services">Traitements</a>
                <a href="#croissance">Croissance</a>
                <a href="#galerie">Galerie</a>
                <a href="#reservation">Reservation</a>
            </nav>
            <a className="header-cta" href="#reservation">Diagnostic gratuit</a>
        </header>
    );
};

export default Header;
