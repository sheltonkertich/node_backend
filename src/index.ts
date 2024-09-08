import "reflect-metadata";
import { AppDataSource } from "./datasource.config";
import { Post } from "./entities/Post";

AppDataSource.initialize()
    .then(async () => {
        console.log("Data Source has been initialized!");

        // Create a new post
        const post = new Post();
        post.titlee = "my first post";      

        // Save the post in the database
        await AppDataSource.manager.save(post);
        console.log("User has been saved: ", post);

        // Load posts from the database
        const users = await AppDataSource.manager.find(Post);
        console.log("Loaded users: ", users);
    })
    .catch((error) => console.log("Error during Data Source initialization: ", error));
