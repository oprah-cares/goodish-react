import React, { useEffect, useState } from 'react';

const Home = () => {
  const [amount, setAmount] = useState(0);
  const [csrfToken, setCsrfToken] = useState('');

  const fetchCSRFToken = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/get_csrf_token/');
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  };

  const handleWaterConsumption = (amount) => {
    setAmount(amount);
  };

  const handleSubmit = () => {
    fetch('http://localhost:8000/api/water/', { //need to change url!!! //
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`, // Use a function to get the token ~dynamically~
        'X-CSRFToken': csrfToken, // include the CSRF token in the headers
      },
      body: JSON.stringify({ ounces: amount }),
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error submitting water intake:', error);
      });
  };

  const getAuthToken = () => {
    // get the authentication token from local storage
    return localStorage.getItem('authToken') || '';
  };

  return (
    <div>
      <head>
    <meta name="csrf-token" content="{% csrf_token %}" />
      </head>
      
    </div>
  );
};

export default Home;
