# E-Commerce Website Backend
This is a backend build in partnership with an pre-existing e-commerce site frontend.  Given the prevalence of ecommerce in retail trends and day-to-day life, this is an exercise to understand the fundamental architecture of e-commerce platforms.

This project leverages Express.js API to use Sequelize to interact with a MySQL database.

## Summary
tbd


## Installation & Usage
Ensure you have Node.js installed locally to install packages to and from the public npm registry. [Node.js installation documentation.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. CLone the repository to your local machine.

2. Install dependencies `npm install`
Required when when you first set up the project for local development or use OR if any changes are made to the project's dependencies. [More Node information here.](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

3. Set up your database mysql shell from the db folder in your terminal with `mysql -u root -p` Steps 2-4 need to be run after after any changes to your batabase or database modules.

4. `source schema.sql` to use the updated schema.

5. `quit` to exit your mysql shell.

6. From the root folder, add the seed data to your now established database with `npn run seed`

7. Then, start the application with `npm start`

## Techonologies used
* [Expressjs](https://expressjs.com/) - Leveraged for API's, utility methods and middleware.
* [MySQL2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js.
* [Sequelizejs](https://sequelize.org/) -  Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. Used for database creation and management via Models abstraction of database tables.
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