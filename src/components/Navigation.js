import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img width="250" src="./media/leilasida.jpg" alt="profil-pic"/>
                    <h3>SIDA Leila</h3>
                </div>  
            </div>  
              <div className="navigation">
                  <ul>
                      <li>
                      {/* activeClassName permet de gérer l'élément quand il est actuf par exemple sa couleur */}
                     <NavLink exact to="/" activeClassName="navActive"> 
                     <i className= "fas fa-home"></i> 
                     <span>Accueil</span>
                     </NavLink>
                     </li>
                     <li>
                     <NavLink exact to="/competences" activeClassName="navActive"> 
                     <i className= "fas fa-mountain"></i> 
                     <span>Compétences</span>
                     </NavLink>
                     </li>
                     <li>
                     <NavLink exact to="/portfolio" activeClassName="navActive"> 
                     <i className= "fas fa-images"></i> 
                     <span>Portfolio</span>
                     </NavLink>
                     </li>
                     <li>
                     <NavLink exact to="/contact" activeClassName="navActive"> 
                     <i className= "fas fa-address-book"></i> 
                     <span>Contact</span>
                     </NavLink>
                     </li>
                  </ul>

              </div>
              <div className="socialNetwork">
                  <ul>
                 <li>
                     <a href= "https://www.linkedin.com/in/leila-sida-871278144" rel="noopener noreferrer" target= "_blank" ><i className="fab fa-linkedin"/></a>
                </li> 
                <li>
                     <a href= "https://www.linkedin.com/in/leila-sida-871278144" target= "_blank" rel="noopener noreferrer"><i className="fab fa-github"/></a>
                </li>
                <li>
                     <a href= "https://www.linkedin.com/in/leila-sida-871278144" target= "_blank" rel="noopener noreferrer"><i className="fab fa-twitter"/></a>
                </li>
                </ul>
                <div className="signature">
                   <p>Leila SIDA - 2021</p>
                </div>
              </div>

        </div>
    );
};

export default Navigation;