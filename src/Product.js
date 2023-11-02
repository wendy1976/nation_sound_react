import React from 'react';

//Création du rendu d'une fiche produit
const Product = ({ id, name, description, dateConcert, scene, price, image, onAddToCart }) => {
  return (
    <div className='product-card col-12 col-md-3 bgLightGreen mt-1 ms-1 pt-3 pb-3 me-2'>
      <div id="card" className='border ps-3 pe-2 pb-2'>
        <img className="img-fluid pt-4" src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Date du concert : {dateConcert}</p>
        <p>Scène : {scene}</p>
        <p className="price"><strong>Prix : {price}€</strong></p>
        <button onClick={() => onAddToCart(id)}>Ajouter au panier</button>
        </div>
    </div>
  );
};

export default Product;