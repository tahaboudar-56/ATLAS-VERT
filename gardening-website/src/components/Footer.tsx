import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <h2>VertAtlas</h2>
                <p>Nous soignons les jardins avec des traitements naturels et un suivi de croissance precis.</p>
            </div>
            <div className="footer-meta">
                <p>{new Date().getFullYear()} VertAtlas</p>
                <p>contact@vertatlas.fr | +212 6 00 00 00 00</p>
            </div>
        </footer>
    );
};

export default Footer;
