import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('Loading...');

  useEffect(() => {
    axios.get('http://localhost:5039/Test')
      .then(response => setName(response.data))
      .catch(error => {
        console.error('Error fetching name:', error);
        setName('Error fetching name');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My Name</h1>
      <p>{name}</p>
    </div>
  );
}

export default App;