# E-Commerce Website Backend
This is a backend build in partnership with an pre-existing e-commerce site frontend.  Given the prevalence of ecommerce in retail trends and day-to-day life, this is an exercise to understand the core architecture of e-commerce platforms as it is often a fundamental body of work for full stack developers. 

## Summary
This project leverages Express.js API to use Sequelize to interact with a MySQL database. The work in this project can largely be explored through Insomnia, Postman, or any API testing interface.  

* Connection to the project database using Sequelize is established via a environment variable file (.env) with the database name, a MySQL username, and a MySQL password.
* A development database is created and is seeded with test data via schema commands in the mysql shell and seed commands in CLI.
* The server is started and the Sequelize models are synced to the MySQL database upon using singular CLI command `npm start`
* Hitting any API GET routes for database tables (Categories, Products, or Tags) returns the data for each of these in a formatted JSON object.
* Leveraging API POST, PUT, and DELETE routes, the user is able to create, udate, and delete data records in database tables (Category, Tag, and Product).

## Installation & Usage
Ensure you have Node.js installed locally to install packages to and from the public npm registry. [Node.js installation documentation.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Clone the repository to your local machine.

2. Install dependencies `npm install`
Required when when you first set up the project for local development or use OR if any changes are made to the project's dependencies. [More Node information here.](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

3. Set up your database mysql shell from the db folder in your terminal with `mysql -u root -p` Steps 2-4 need to be repeated after after any changes to your database or database modules.

4. `source schema.sql` to use the updated schema.

5. `quit` to exit your mysql shell.

6. From the root folder, add the seed data to your now established database with `npn run seed`

7. Then, start the application with `npm start`. 

## Techonologies used
* [Expressjs](https://expressjs.com/) - Leveraged for API's, utility methods, and middleware.
* [MySQL2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js.
* [Sequelizejs](https://sequelize.org/) -  Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. Used for database creation and management via Models abstraction of database tables.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Module that loads environment variables from a .env file into process.env
* [NPM](https://www.npmjs.com/) - Node package manager, used in conjunction with JS and Inquirer to support application logic and Command Line interface.
* [Node](https://nodejs.org/en/) - Asynchronous event-driven JavaScript runtime environment that executes JavaScript code outside a web browser
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) - Core app logic
* [Git](https://git-scm.com/doc) - Version control system to track changes to source code
* [GitHub](https://docs.github.com/en) - Hosts the code repository

## Authors
Sarah Hollingsworth
* [Github](https://github.com/sahhollingsworth)
* [LinkedIn](https://www.linkedin.com/in/sarahhollingsworth/)

## Acknowledgements
* [Ed Timmer's](https://medium.com/@edtimmer) demo of Sequelize model associations via the article, ["Sequelize's BelongsTo & HasMany Associations"](https://medium.com/@edtimmer/sequelize-associations-basics-bde90c0deeaa)