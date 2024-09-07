environment
# node v20.17.0
initialize a node project
# npm init -y  

initialize git on current repo
# git init .

use yarn as a package manager
# installed yarn globbaly 

switch to typescript and make the current project communicate with each other
install dev dependencies
# yarn add typescript ts-node @types/node

add a script ts node to run any typescript file
# yarn add -D ts-node
you can then edit script on package json

get a typescript configuration file ( select y and select node ) **** optionAL. CHECK NEXT OPTIONAL WITH WATCHERS
# npx tsconfig.json

add a script watch in scripts (optimize and speed code)
# "watch":"tsc -w",
  -to use watch run `yarn watch` and it will compile the code and create a dist folder
  - you can run the production code in the dist folder by using `node dist/index.js`
  -optionally you can add the dist file in the scripts files ie add ` "start":"node dist/index.js", `

install node demone to listen to any changes in our file and rerun it
# yarn add nodemon -D
 -use it as a dev dependency in script files ` "dev":"nodemon dist/index.js", `
 - if you want you can use it with ts-node ` "dev2":"nodemon --exec ts-node src/index.ts", `
 -run now `yarn-dev`

 ` at this point you have two terminals, one running as watcher and the other reexecuring the code in the dist folder automatically`

 --------working with typeORM--------------------
 TypeORM is an Object-Relational Mapping (ORM) tool for TypeScript and JavaScript (ES7, ES6, ES5). It helps developers interact with databases more easily by mapping database tables to JavaScript/TypeScript objects. With TypeORM, you can perform database operations using objects and class methods, rather than writing raw SQL queries.

# yarn add typeorm --save
# yarn add reflect-metadata --save
and import it somewhere in the global place of your app (for example in app.ts): ` import "reflect-metadata" `
# yarn add @types/node --save-dev
install database driver. for postgresql below
# npm install pg --save


