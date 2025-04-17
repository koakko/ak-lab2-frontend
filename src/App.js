import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('/api')
      .then(response => setMessage(response.data.message))
      .catch(error => setMessage('Error fetching data'));
  }, []);

  return (
    <div className="App">
      <h1>Simple Web App</h1>
      <p>Message from Backend: {message}</p>
    </div>
  );
}

export default App;