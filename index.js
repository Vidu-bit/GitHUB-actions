const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.get('/client', (req, res) => {
  res.json('Hello Client!');
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const close =  () => {
    server.close();
}

module.exports = { app, close };
