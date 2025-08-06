const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample default route
app.get('/', (req, res) => {
    res.send('Shule Backend is Running!');
});

// Import and use employee routes
const employeeRoutes = require('./routes/employees');
app.use('/api/employees', employeeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

