import React from 'react';

function NewsletterForm({ formData, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Prénom:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
      <br />
      <label htmlFor="lastName">Nom:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
      <br />
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <br />
      <button type="submit">S'abonner</button>
    </form>
  );
}

export default NewsletterForm;