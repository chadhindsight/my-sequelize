const express = require('express');
const PORT = 15000;
const app = express();

// Allows you to parse the body
app.use(express.json());

//Database
const db = require('./config/db');

// baddie routes
const baddieRouter = require("./routes/baddies");

const cors = require("cors");

app.use(
    cors({
        origin: "http://localhost:5173",
        allowedHeaders: ["Content-Type", "Authorization"],
        methods: ["GET", "POST", "PATCH", "DELETE"],
    })
);



// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// route handler following Dakota's example
app.use("/api/baddies", baddieRouter);
app.listen(PORT, console.log(`Server started on port ${PORT}`));