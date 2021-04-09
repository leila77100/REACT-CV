import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
           <Navigation/>
           <div className="homeContent">
               <div className="content">
                   <h1>SIDA Leila</h1>
                   <h2>Chef de projet</h2>
                   <div className="pdf">
                       <a href='./media/CVCHEFDEPROJET.pdf' target="blank">Télécharger CV</a>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Home;