// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Sample data
const products = [
  { id: 1, name: 'Product A', sustainabilityScore: 85, carbonFootprint: 50, packaging: 'Recyclable', sourcing: 'Ethical' },
  { id: 2, name: 'Product B', sustainabilityScore: 70, carbonFootprint: 65, packaging: 'Non-recyclable', sourcing: 'Local' },
  // More products...
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
