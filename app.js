const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/comments", async (req, res) => {
    await axios.get("https://jsonplaceholder.typicode.com/comments?postId=3").then((response) => {
        return res.status(200).json({message: "success", data: response.data});
    }).catch((err) => {
        return res.status(500).json({message: "server error"});
    });
})

app.listen(4000, () => {
    console.log("listening on port 4000");
})