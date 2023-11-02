
import React, { useState } from 'react';
import NewsletterForm from './NewsletterForm';

function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire à votre serveur ici
  };

  return (
    <div>
      <h1>Inscription à la newsletter</h1>
      <NewsletterForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Newsletter;