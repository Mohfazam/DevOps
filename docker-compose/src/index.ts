import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.json({
        Message: "Get Endpoint"
    });
});

app.post("/", (req, res) => {
    res.json({
        Message: "Post Endpoint"
    });
});


app.listen(3000, () => {
    console.log("Server Running on poer 3000");
});