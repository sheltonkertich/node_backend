import "reflect-metadata";
import { AppDataSource } from "./datasource.config";
import { Post } from "./entities/Post";
import express, { Request, Response } from "express";

const app = express();
const port = 4000;

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");

    // Create a new post
    const post = new Post();
    post.title = "my first post";

    // Save the post in the database
    await AppDataSource.manager.save(post);
    console.log("User has been saved: ", post);

    // Load posts from the database
    const users = await AppDataSource.manager.find(Post);
    console.log("Loaded users: ", users);
  })
  .catch((error) =>
    console.log("Error during Data Source initialization: ", error)
  );

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
