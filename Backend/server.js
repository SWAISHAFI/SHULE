const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

const employeeRoutes = require('./routes/employees');
app.use('/api/employees', employeeRoutes);

// Ensure data folder exists
const fs = require('fs');
const dataFolderPath = path.join(__dirname, 'data');
if (!fs.existsSync(dataFolderPath)) fs.mkdirSync(dataFolderPath);

app.listen(5000, () => console.log('Server running on port 5000'));
