import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Meaux</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0648544483">
                                <span className="clickInput" onClick={() => { alert('Numéro de Téléphone Copié!') }}>06 48 54 44 83</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="leila.sida@outlook.com">
                                <span className="clickInput" onClick={() => { alert('Email Copié!') }}>leila.sida@outlook.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                                <h4>Twitter</h4>
                                <i className="fab fa-twitter"></i>
                            </a>
                            
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Contact;