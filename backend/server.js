const { createClient } = require("@supabase/supabase-js");

// Load environment variables from .env file
require("dotenv").config();

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

// Server running port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
