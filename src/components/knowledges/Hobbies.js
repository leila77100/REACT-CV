import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fab fa-ethereum"></i>
                    <span>Blockchain</span>
                </li>
                <li className="hobby">
                    <i className="fab fa-bitcoin"></i>
                    <span>DeFi</span>
                </li>
                <li className="hobby">
                    <i className="fab fa-tripadvisor"></i>
                    <span>Voyages</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>fitness</span>
                </li>
            </ul>
            
        </div>
    );
};

export default Hobbies;