const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to verify Google token
app.post("/verify-token", async (req, res) => {
  const { credential } = req.body;

  try {
    const decodedToken = jwt.decode(credential); // Decode Google JWT token
    if (!decodedToken) {
      return res.status(400).json({ error: "Invalid Token" });
    }

    res.json({
      success: true,
      user: {
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
