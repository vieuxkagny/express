// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Vérifiez que l'URI MongoDB est bien chargé
console.log('Mongo URI:', process.env.MONGO_URI);

// Middleware pour parser le corps des requêtes
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Importer les routes
const userRoutes = require('./route/userRoute');

// Utiliser les routes
app.use('/api', userRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
