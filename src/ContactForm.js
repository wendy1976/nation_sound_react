import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Validation de formulaire
        if (formData.fullName && formData.email && formData.subject && formData.message) {
            // Envoi des données du formulaire à un serveur
            console.log(formData);
            setFormSubmitted(true);
        } else {
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    }

    return (
        <div>
            {formSubmitted ? (
                <p>Merci pour votre message! Nous vous répondrons dès que possible.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom complet:
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
                    </label>
                    <label>
                        Adresse e-mail:
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </label>
                    <label>
                        Objet:
                        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleInputChange} />
                    </label>
                    <button type="submit">Envoyer</button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;
