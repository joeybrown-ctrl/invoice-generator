const express = require("express");

const app = express();
app.use(express.json());
app.listen(8080, () => console.log("server running on port 8080"));