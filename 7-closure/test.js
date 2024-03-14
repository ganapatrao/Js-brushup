const express = require('express');
const app = express();

// Middleware function to log request method and URL
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware function
});

// Middleware function to check if user is logged in
function isLoggedIn(req, res, next) {
    if (req.query.loggedIn === 'true') {
        next(); // User is logged in, pass control to the next middleware
    } else {
        res.status(401).send('Unauthorized'); // User is not logged in, send unauthorized response
    }
}

// Protected route using isLoggedIn middleware
app.get('/profile', isLoggedIn, (req, res) => {
    res.send('Welcome to your profile');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
