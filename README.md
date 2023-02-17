# Getting Started with Mariolle

This project was created with [Create React App]
To use this App refer to this code and follow instruction in the README [GitHub Repo](https://github.com/Fadila-Ali/PERN-portfolio-backend)

# Description

Mariolle is an e-commerce app that allows users to sell and/or buy costumes.

# Instructions

- Install these packages

* `npm init -y`
* `npm i express`
* `npm i cors`
* `npm i morgan`
* `npm i express-validator`
* `npm i dotenv`
* `npm i pg`
* `npm i pg-promise`
* And add this `"db:init": "psql -U postgres -f db/schema.sql", "db:seed": "psql -U postgres -f db/seed.sql"` to your `package.json`

- `touch .env` and add this
`PORT=(frontend localhost number eg:3333) PG_HOST=localhost PG_PORT=(you database port number eg: 5432) PG_DATABASE=store_inventory PG_USER=postgres`

* Run command `npm run db:init` to create the TABLE and `npm run db:seed` to seed the TABLE

* Run command `nodemon` to start server
