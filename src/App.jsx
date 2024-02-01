// src/App.js
import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setItems(data.slice(0, 6)); // Display the first 6 items
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-4 font-mono">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-500"> List of Data</h1>
      <DataTable items={items} />
    </div>
  );
}

export default App;
