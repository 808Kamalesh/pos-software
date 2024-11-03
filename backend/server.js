const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const posRoutes = require('./routes/pos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', posRoutes); // Use POS routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
