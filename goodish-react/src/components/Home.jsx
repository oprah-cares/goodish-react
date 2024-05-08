import React, { useState } from 'react';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Handle success response
    } catch (error) {
      console.error('Error:', error);
      // Handle error response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <br />
      <br />
      <label>
        First Name:
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label><br />
      <label>
        Last Name:
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label><br />
      <label>
        Email:
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label><br />
      <label>
        Phone number:
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;
