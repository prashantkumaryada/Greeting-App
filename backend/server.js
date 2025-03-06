const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend requests

// Greeting API endpoint
app.get("/api/greet", (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
