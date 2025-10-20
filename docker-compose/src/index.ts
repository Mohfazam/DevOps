import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
  const data = await prismaClient.user.findMany();

  res.json({
    data,
  });
});

app.post("/", async (req, res) => {

  await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  
  res.json({
    Message: "Post Endpoint",
  });
});

app.listen(3000, () => {
  console.log("Server Running on poer 3000");
});
