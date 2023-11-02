import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Product from './Product';
import ProductFilter from './ProductFilter';
// Importation de toutes mes images de produits
import image14 from "./assets/imagesEtLogo/images/Aline_Garner.jpg";
import image4 from "./assets/imagesEtLogo/images/Celtic_Breeze.jpg";
import image6 from "./assets/imagesEtLogo/images/Chloe_Deschamps.jpg";
import image10 from "./assets/imagesEtLogo/images/DJ_ElectroFlow.jpg";
import image2 from "./assets/imagesEtLogo/images/Dark_Chords.jpg";
import image3 from "./assets/imagesEtLogo/images/Echoes_of_Zion.jpg";
import image9 from "./assets/imagesEtLogo/images/Guns_and_Glory.jpg";
import image1 from "./assets/imagesEtLogo/images/Joyful_Notes.jpg";
import image15 from "./assets/imagesEtLogo/images/Laurent_Miles.jpg";
import image11 from "./assets/imagesEtLogo/images/Leo_Kingston.jpg";
import image8 from "./assets/imagesEtLogo/images/Mythical_Storm.jpg";
import image5 from "./assets/imagesEtLogo/images/Neon_Groove.png";
import image12 from "./assets/imagesEtLogo/images/RobbyBarlow_Lou.jpg";
import image7 from "./assets/imagesEtLogo/images/Theo_Sunshine.jpg";
import image13 from "./assets/imagesEtLogo/images/Titanium.jpg";

const ProductList = () => {
  // État local pour les articles du panier
  const [cartItems, setCartItems] = useState([]);
  // État local pour afficher ou masquer la fenêtre contextuelle
  const [showPopup, setShowPopup] = useState(false);
  // État local pour les filtres de produits
  const [filters, setFilters] = useState({
    category: ["Tous"],
    price: {
      min: 0,
      max: 100
    },
    rating: {
      min:0,
      max:5
    }
  });

  const handleAddToCart = (productId) => {
     // Recherche de l'article existant dans le panier
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
       // Mise à jour de la quantité de l'article existant dans le panier
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedCartItems);// Mise à jour des articles du panier
    } else {
       // Recherche du produit correspondant à l'identifiant
      const product = products.find((product) => product.id === productId);

       // Création d'un nouvel article à ajouter au panier
      const productToAdd = {
        id: productId,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      };

      setCartItems([...cartItems, productToAdd]);// Ajout du nouvel article au panier
      setShowPopup(true);// Affichage de la fenêtre contextuelle
      setTimeout(() => {
        setShowPopup(false);// Masquage de la fenêtre contextuelle après 2 secondes
      }, 2000);
    }
  };

  const handleRemoveItem = (itemId) => {
    // Filtrer les articles du panier pour exclure celui avec l'ID donné
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);// Mise à jour des articles du panier
  };

  const handleClearCart = () => {
    setCartItems([]);// Définit un tableau vide pour les articles du panier
  };

  // Tous mes produits et leurs éléments
  const products = [
    {
      id: 23,
      name: "Joyful Notes",
      description: "Le duo Joyful Notes, est un groupe anglais de musique pop, composé de Jack Holmes et de sa sœur.Ils ont crée leur groupe en 2015 et ont eu tout de suite un franc succès avec leur premier single butterfly wings.",
      dateConcert:"Vendredi 21 Juin 2024 à 16h",
      scene: "Horizon Sonore",
      price: 42.99,
      image: image1,
      categories: ["Tous", "Pop"]
    },
    
    {
      id: 86,
      name: "Dark Chords",
      description: "Bienvenue sur la page concert de Dark Chords.Nous serons les premiers en France à vous faire découvrir le son métallique de ce groupe ténébreux, avec leur style Rock,",
      dateConcert:"Vendredi 21 Juin 2024 à 18h",
      scene: "Guitares en fusion",
      price: 42.99,
      image: image2,
      categories: ["Tous", "Rock"]
    },

    {
      id: 88,
      name: "Echoes of Zion",
      description: "Bienvenue sur la page concert de Echoes of Zion.Collectif Reggae extrêmement attendu sur notre festival, avec leur joie et bonne humeur,",
      dateConcert:"Vendredi 21 Juin 2024 à 20h",
      scene: "Reggae Vibes Haven",
      price: 42.99,
      image: image3,
      categories: ["Tous", "Reggae"]
    },

    {
      id: 90,
      name: "Celtic Breeze",
      description: "Ce groupe celtique Irlandais vous apportera sa beauté des sons d’Irlande, et vous fera voyager dans d’autres magnifiques contrées,",
      dateConcert:"Vendredi 21 Juin 2024 à 22h",
      scene: "Terre d’Emeraude",
      price: 42.99,
      image: image4,
      categories: ["Tous", "Celtique"]
    },

    {
      id: 92,
      name: "Neon Groove",
      description: "A ne pas louper!!! Une ascension mondiale fulgurante, avec ses mélodies accrocheuses et ses rythmes dansants, il est devenu un pilier des festivals de musique électronique.",
      dateConcert:"Vendredi 21 Juin 2024 à 00h",
      scene: "Cybergroove",
      price: 42.99,
      image: image5,
      categories: ["Tous", "Electro"]
    },

    {
      id: 94,
      name: "Chloé Deschamps",
      description: "L’artiste française pop de l’année! La petite Rochelaise vous apportera fraîcheur et douceur avec ses mélodies harmonieuses, et positives, sa voix à la « Vanessa » est charmante,",
      dateConcert:"Samedi 22 Juin 2024 à 16h",
      scene: "Horizon Sonore",
      price: 42.99,
      image: image6,
      categories: ["Tous", "Pop"]
    },

    {
      id: 98,
      name: "Théo Sunshine",
      description: "L’artiste « phare » du reggae, vous fera voyager sur l’île de la Réunion et sur ses plages,",
      dateConcert:"Samedi 22 Juin 2024 à 18h",
      scene: "Reggae Vibes Haven",
      price: 42.99,
      image: image7,
      categories: ["Tous", "Reggae"]
    },

    {
      id: 100,
      name: "Mythical Storm",
      description: "Le groupe écossais, vous emmènera dans leurs vertes contrées avec la voix exceptionnelle de la chanteuse Isabella,",
      dateConcert:"Samedi 22 Juin 2024 à 20h",
      scene: "Terre d’Emeraude ",
      price: 42.99,
      image: image8,
      categories: ["Tous", "Celtique"]
    },

    {
      id: 102,
      name: "Guns and Glory",
      description: "Le groupe anglais, mondialement connu vous surprendra avec leur son rock plein d’énergie électrique et de punch,",
      dateConcert:"Samedi 22 Juin 2024 à 22h",
      scene: "Guitares en fusion",
      price: 42.99,
      image: image9,
      categories: ["Tous", "Rock"]
    },

    {
      id: 105,
      name: "DJ ElectroFlow",
      description: "Le DJ bordelais, vous fera danser toute la nuit avec son son électro funk disco énergique et dynamique,",
      dateConcert:"Samedi 22 Juin 2024 à 00h",
      scene: "Cybergroove",
      price: 42.99,
      image: image10,
      categories: ["Tous", "Electro"]
    },

    {
      id: 107,
      name: "Léo Kingston",
      description: "Léo, pour le début de cette dernière journée de festival, vous fera danser et sourire avec sa musique positive et ensoleillée.",
      dateConcert:"Dimanche 23 Juin 2024 à 16h",
      scene: "Reggae Vibes Haven",
      price: 42.99,
      image: image11,
      categories: ["Tous", "Reggae"]
    },

    {
      id: 109,
      name: "Robby Barlow & Lou",
      description: "Duo à ne pas louper, entre la voix du crooner et la rafraîchissante Lou",
      dateConcert:"Dimanche 23 Juin 2024 à 18h",
      scene: "Horizon Sonore",
      price: 42.99,
      image: image12,
      categories: ["Tous", "Pop"]
    },

    {
      id: 111,
      name: "Titanium",
      description: "Ce groupe de heavy metal mondialement connu, est un incontournable de ce festival à ne pas manquer,",
      dateConcert:"Dimanche 23 Juin 2024 à 20h",
      scene: "Guitares en fusion",
      price: 42.99,
      image: image13,
      categories: ["Tous", "Rock"]
    },

    {
      id: 113,
      name: "Aline Garner",
      description: "Aline, risque de vous surprendre encore et toujours, avec ses chorégraphies et effets spéciaux,",
      dateConcert:"Dimanche 23 Juin 2024 à 22h",
      scene: "Horizon Sonore",
      price: 42.99,
      image: image14,
      categories: ["Tous", "Pop"]
    },

    {
      id: 115,
      name: "Laurent Miles",
      description: "Et pour clore ce festival en beauté, déhanchez vous sur le son électro hyper-dansant de Laurent Miles ",
      dateConcert:"Dimanche 23 Juin 2024 à 00h",
      scene: "Cybergroove",
      price: 42.99,
      image: image15,
      categories: ["Tous", "Electro"]
    },
  ];

  // Cocher automatiquement la case "Tous" lorsque la page est chargée
  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: "Tous",
    }));
  }, []);

  //  logique de filtrage
  const filteredProducts = products.filter((product) => {
    // Filtrage par catégorie
    if (
      filters.category.length > 0 &&
      !filters.category.includes("Tous") &&
      !product.categories.some((cat) => filters.category.includes(cat))
    ) {
      return false;
    }

    // Filtrage par prix
    if (
      filters.price.min !== "" &&
      filters.price.max !== "" &&
      (product.price < filters.price.min || product.price > filters.price.max)
    ) {
      return false;
    }

    // Filtrage par note
  if (filters.rating.min !== "" && filters.rating.max !== "" && (product.note < filters.rating.min || product.note > filters.rating.max)) {
    return false;
  }

    return true;
  });

  return (
    <div>
     <ProductFilter filters={filters} setFilters={setFilters} className='order-first filter-container-mobile ' />

     <div className="product-list row">
       {filteredProducts.map((product) => (
         <Product
           key={product.id}
           id={product.id}
           image={product.image}
           name={product.name}
           description={product.description}
           price={product.price}
           note={product.note}
           onAddToCart={handleAddToCart}
         />
       ))}
     </div>

     <Cart
       cartItems={cartItems}
       onRemoveItem={handleRemoveItem}
       onClearCart={handleClearCart}
     />

     {showPopup && <div className="popup">Produit ajouté au panier !</div>}
   </div>
 );
};


export default ProductList;
