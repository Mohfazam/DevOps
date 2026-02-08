import { prismaClient } from "db/client";
import express from "express"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        Message: "Hello"
    });
});

app.get("/users", (req, res) => {
    prismaClient.user.findMany().then(users => {
        res.json(users);
    }).catch(err => {
        res.status(500).json({error: err.message});
    });
});

app.post("/user", (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400).json({error: "Username and password are required"});
    }

    prismaClient.user.create({
        data:{
            username, password
        }
    }).then(user => {
        res.status(201).json({Message: "User created Successfully", user});
    }).catch(err => {
        res.status(500).json({ error: err.message });
    });
});


app.listen(8080, () => {
    console.log("HTTP Sever running on port 8080");
})