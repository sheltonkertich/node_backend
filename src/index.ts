import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Post } from "./entities/Post";

AppDataSource.initialize()
    .then(async () => {
        console.log("Data Source has been initialized!");

        // Create a new user
        const post = new Post();
        post.title = "my first post";     

        // Save the user in the database
        await AppDataSource.manager.save(post);
        console.log("User has been saved: ", post);

        // Load users from the database
        const users = await AppDataSource.manager.find(Post);
        console.log("Loaded users: ", users);
    })
    .catch((error) => console.log("Error during Data Source initialization: ", error));
