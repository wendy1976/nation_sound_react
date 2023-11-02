import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from './assets/imagesEtLogo/images/logo2.png';

function Footer() {
  return (
    //Début du footer 1ére colonne avec la marque et un paragraphe
    <footer className="container-fluid bgYellow" id="mainFooter">
      <section className="row pt-4 gx-4 mb-4">
        <div className="col-12 col-md-4 col-lg-4">
          <div className="marque pe-5 me-5">
            <h2 className="h3">Live Events</h2>
            <img className="img-fluid w-50" src={logo} alt="Logo Live Events" />
          </div>
        </div>
        
        <div className="col-12 col-md-4 col-lg-4">
          <div className="liens me-5 pe-4">
            <h2 className="h3">Liens</h2>
            <ul>
              <li><a href="/page1">Page 1</a></li>
              <li><a href="/page2">Page 2</a></li>
              <li><a href="/page3">Page 3</a></li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-4">
        <div className="row">
      <div className="reseauxSociaux me-5 pe-4">
        <a className="facebook custom-icon-color me-4" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" role="button" id="facebook">
          <FaFacebook style={{ fontSize: '60px' }} />
        </a>
        <a className="twitter custom-icon-color me-4" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" role="button" id="twitter">
          <FaTwitter style={{ fontSize: '60px' }} />
        </a>
        <a className="instagram custom-icon-color " href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" role="button" id="instagram">
          <FaInstagram style={{ fontSize: '60px' }} />
        </a>
      </div>
    </div>
          <div className="row">
      <div className="reseaux me-5 pe-4">
        <a className="youtube custom-icon-color me-4" href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" role="button" id="youtube">
          <FaYoutube style={{ fontSize: '60px' }} /> {/* Utilisation de l'icône YouTube */}
        </a>
        <a className="snapchat custom-icon-color me-4 " href="http://www.snapchat.com" target="_blank" rel="noopener noreferrer" role="button" id="snapchat">
          <FaSnapchat style={{ fontSize: '60px' }} />{/* Utilisation de l'icône Snapchat */}
        </a>
        <a className="linkedin custom-icon-color" href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" role="button" id="linkedin">
          <FaLinkedin style={{ fontSize: '60px' }} /> {/* Utilisation de l'icône LinkedIn */}
        </a>
      </div>
    </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
