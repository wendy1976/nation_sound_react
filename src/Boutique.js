import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//Import de mes composants
import Footer from './Footer';
import Header from './Header';
import ProductList from './ProductList';




//Appels de mes composants pour ma page boutique
function Boutique() {
  return (
    <div>      
      <Header />     
        <h1 className="text-center pink mb-0 mt-3 pt-0 pb-5 boutique">BOUTIQUE</h1>  
        <ProductList />
      <Footer />
    </div>
  );
}

export default Boutique;
