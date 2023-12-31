import { faExclamationCircle, faLaptop, faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Faq from './Faq';
import Layout from './Layout';
import InfosImage from './assets/imagesEtLogo/images/Infos.jpg';
import accessibiliteImage from './assets/imagesEtLogo/images/accessibilite.jpg';
import barImage from './assets/imagesEtLogo/images/bar.jpg';
import campingImage from './assets/imagesEtLogo/images/camping.jpg';
import hotelImage from './assets/imagesEtLogo/images/hotel.jpg';
import restaurationImage from './assets/imagesEtLogo/images/restauration.jpg';
import ticketImage from './assets/imagesEtLogo/images/ticket.jpg';
import transportImage from './assets/imagesEtLogo/images/transport.jpg';

function Infos() {
    return (
        <Layout>
            <div className='text-center bgWhite'>
                <h1 className="text-center pink mb-0 mt-3 pt-0 pb-5">Informations pratiques et FAQ</h1>
                <img
                    src={InfosImage}
                    alt="présentation de la page infos"
                    style={{ maxWidth: '70%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
                
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="#section1">Transport</a></li>
                    <li><a href="#section2">Logement</a></li>
                    <li><a href="#section3">Restauration & Bar</a></li>
                    <li><a href="#section4">Accessibilité</a></li>
                    <li><a href="#section5">Infos vente</a></li>
                    <li><a href="#section6">FAQ</a></li>
                </ul>
            </div>

            {/* Section Transport */}
            <section className='text-center bgWhite' id="section1">
                <h2 className='text-center pink mb-0 mt-3 pt-0 pb-5'>Transport</h2>
                <img
                src={transportImage}
                alt="Transport"
                style={{ display: 'block', margin: '0 auto', maxWidth: '70%', height: 'auto' }}
                />
                <div className="pinkSeparator"></div> 
                <div>
                    <h3 className='pink mt-5'>En train</h3>
                    <p>Cliquez ici pour modifier ce texte. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <a href="https://www.sncf-connect.com/" target="_blank" rel="noopener noreferrer">
                    <button className="myButton mb-3">En train &#10132;</button>
                    </a>
                </div>

                <div>
                    <h3 className='pink mt-3'>En bus</h3>
                    <p>Cliquez ici pour modifier ce texte. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <a href="https://www.ratp.fr/plan-bus" target="_blank" rel="noopener noreferrer">
                    <button className="myButton mb-3">En bus &#10132;</button>
                    </a>
                </div>

                <div>
                    <h3 className='pink mt-3'>En voiture</h3>
                    <p>Cliquez ici pour modifier ce texte. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    <a href="https://www.google.fr/maps/" target="_blank" rel="noopener noreferrer">
                    <button className="myButton mb-3">En voiture &#10132;</button>
                    </a>
                </div>
                <div>
                    <h3 className='pink mt-3'>Les parkings à proximité</h3>
                    <p>Cliquez ici pour modifier ce texte. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    <a href="lien_vers_site_web_4" target="_blank" rel="noopener noreferrer">
                    <button className="myButton mb-5">Les parkings &#10132;</button>
                    </a>
                </div>
            </section>

            {/* Section Logement */}
            <section className='text-center bgWhite' id="section2">
                <h2 className='text-center pink mb-0 mt-3 pt-0 pb-5'>Logement</h2>
                <img
                src={campingImage}
                alt="Camping"
                style={{ display: 'block', margin: '0 auto', maxWidth: '70%', height: 'auto' }}
                />
                <div className="pinkSeparator"></div>
                <div>
                    <h3 className='pink mt-5'>Le camping du festival</h3>
                    <h4 className='pink mt-5'>Le camping est gratuit pour tous les festivaliers ayant acheté le PASS 2 Jours ou 3 Jours.</h4>
                    <p>Le camping est monté pour l’occasion, et vous permettra de planter votre tente et de faire de nouvelles rencontres. Il vous propose les services suivants:</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>Epicerie temporaire</li>
                        <li>Espace de vie, douches…</li>
                        <li>Equipe présente 24h/24</li>
                        <li>Bornes de rechargements mobiles</li>
                        <li>Accueil possible jusqu’à la dernière minute (selon les places disponibles)</li>
                    </ul>
                </div>
                
                <img
                src={hotelImage}
                alt="Hôtel"
                style={{ display: 'block', margin: '0 auto', maxWidth: '70%', height: 'auto' }}
                />
                <div className="pinkSeparator"></div>
                <div>
                    <h3 className='pink mt-5'>Les hôtels aux alentours</h3>
                    <p>Si vous préférez un certain confort, nous vous proposons une liste d’hôtels aux alentours du festival:</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>HOTEL IBIS</li>
                        <li>B&B HOTEL</li>
                        <li>HOTEL CAMPANILE</li>
                        <li>HOTEL F1</li>
                        <li>HOTEL CitizenM</li>
                    </ul>
                </div>
            </section>

            {/* Section Restauration & Bar */}
            <section className='text-center bgWhite' id="section3">
                <h2 className='text-center pink mb-0 mt-3 pt-0 pb-5'>Restauration & Bar</h2>
                <img
                src={restaurationImage}
                alt="Restauration"
                style={{ display: 'block', margin: '0 auto', maxWidth: '70%', height: 'auto' }}
                />
                <div className="pinkSeparator"></div>
                <div>
                    <h3 className='pink mt-5'>Les restaurants du festival</h3>
                    <p>Le festival vous propose une sélection de restaurants pour vous restaurer entre deux concerts:</p>
                    <h4 className='pink mt-5'>Foodtruck : « La Charrette de papy »</h4>
                    <p>Dans une ambiance très conviviale, « La Charrette de papy » vous propose une large carte de sandwichs, des hamburgers, des pizzas, des frites, des boissons et des desserts.</p>
                   
                    <h4 className='pink mt-5'>Restauration du monde: « L’Epicurium »</h4>
                    <p>« L’Epicurium » vous propose une très grande diversité de cuisine du monde: asiatique (sushis, nems, brochettes, rouleaux de printemps entre autres),végétarienne (salades, pokébowl…), espagnole (tapas, paella…).</p>
                    
                    <h4 className='pink mt-5'>Restauration du terroir: « La cuisine des bichettes »</h4>
                    <p>Dans une ambiance chaleureuse, « La cuisine des bichettes », vous propose une très grande variété de plats traditionnels (poulet basquaise, choucroute…), de planchettes (fromages, charcuterie), des huîtres, de la mouclade et autres fruits de mer, de salades, de quiches, et de crêpes (galettes bretonnes), et de succulents desserts (profiteroles, tartes, glaces, crème brûlée…)</p>
                </div>
                <h3 className='pink mt-5'>Le bar du festival</h3>
                <img
                src={barImage}
                alt="Bar Nation Sounds"
                style={{ display: 'block', margin: '0 auto', maxWidth: '70%', height: 'auto' }}
                />
                <div className="pinkSeparator"></div>

            </section>

            {/* Section Accessibilité */}
            <section className='text-center bgWhite' id="section4">
                <h2 className='text-center pink mb-0 mt-3 pt-0 pb-5'>Accessibilité</h2>
                <img
                src={accessibiliteImage}
                alt="Accessibilité"
                style={{ display: 'block', margin: '0 auto', maxWidth: '70%', height: 'auto' }}
                />
                <div className="pinkSeparator"></div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faExclamationCircle} className='pink' style={{ fontSize: '3em' }} />
                    </div>
                    <h3 className='pink mt-5 '>Signalez vous avant d’acheter vos billets!</h3>
                    <p>Le festival cherche à améliorer l’accueil des Personnes en Situation de Handicap. Des solutions vous sont proposées pour rendre le festival accessible à tous.</p>
                    <p>Seules les personnes possédant <strong>UN JUSTIFICATIF DE HANDICAP</strong><em> (Carte d’invalidité, Carte priorité pour personne handicapée, Carte européenne de stationnement, Carte mobilité inclusion…)</em> pourront accéder à l’entrée et aux places dédiées après bien sûr avoir été enregistrées.
                    <strong> A NOTER !</strong> Pour des raisons de sécurité et de confort, le nombre de places est limité au niveau des plateformes et des places assises. Une fois la capacité d’accueil maximum atteinte, nous ne pourrons donc pas répondre favorablement aux nouvelles inscriptions.</p>
                </div>
            </section>

            {/* Section Infos vente */}
            <section className='text-center bgWhite' id="section5">
                <h2 className='text-center pink mb-0 mt-3 pt-0 pb-5' >Infos vente</h2>
                <img
                src={ticketImage}
                alt="Ticket"
                style={{ display: 'block', margin: '0 auto', maxWidth: '70%', height: 'auto' }}
                />
                <div className="pinkSeparator"></div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faLaptop} className='pink' style={{ fontSize: '3em' }} />
                    </div>
                    <h3 className='pink mt-5'>En ligne</h3>
                    <p>Pour acheter votre billet, rendez-vous sur notre BILLETTERIE EN LIGNE</p>
                    <div>
                        <FontAwesomeIcon icon={faStore} className='pink' style={{ fontSize: '3em' }} />
                    </div>
                    <h3 className='pink mt-5'>En magasin</h3>
                    <p>Liste des points de vente: Fmac, Leplerc, Ochamps, Culturo, Carrif</p>
                </div>
            </section>

            {/* Section FAQ */}
            <section className='text-center bgWhite' id="section6">
                <h2 className='text-center pink mb-0 mt-3 pt-0 pb-5'>FAQ</h2>
            <Faq /> {/* Intégrez votre composant FAQ ici */}
            </section>
        </Layout>
    );
}

export default Infos;
