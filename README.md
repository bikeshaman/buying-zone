# Buying Zone

> Where purchasing is made easy

Discovering all the features, info, and technology a product offers is great, but what about when it
comes time to purchase? Buying Zone makes purchasing easy by summarizing a product's name,
average ratings, and a brief description, and by allowing any desired options to be selected before
making it yours with just the click of a button.

## Table of Contents

1. [Features](#features)
1. [Development](#development)
1. [Deployment](#deployment)
1. [Contributing](#contributing)
1. [Links](#links)

## Features

- Present key details relevant to purchasing a product in one consolidated place
- Allow selection of color and size options
- Display whether a product is in-stock, based on options and quantity selected
- Allow for a purchase to be started at the click of a button

## Development

Setting Buying Zone up for development is quick and easy!

First, be sure to have [MongoDB](https://docs.mongodb.com/manual/installation/) (@ version 4+) and
[Node.js](https://nodejs.org/en/download/) (@ version 9+) installed. Next, fork the repository, and
on your development machine run the following commands.

```bash
git clone https://github.com/<your-path>/buying-zone.git
cd buying-zone/
npm install
```

Running Buying Zone for development requires at least two open terminal sessions:

### First terminal:
```bash
npm run build:dev
```
- Compiles the project using webpack in development mode. The `--watch` flag is set so changes are
automatically re-compiled

### Second terminal:
```
npm run server:dev
```
- Starts a local server listening at port 3001. Uses `nodemon` to restart the server upon changes to
files
- Visit http://localhost:3001/ to see the app running in the browser

### Additional development options:

#### Seeding the database

```
npm run seed
```

- Seeds the database with mock data by running `node ./database/seed.js`

#### Manual database queries

- Ensure MongoDB is running
- From within the `mongo` shell, run `use trekbikes`, then query the database as desired

See [MongoDB docs](https://docs.mongodb.com/manual/mongo/) for more detailed information on running
MongoDB and the `mongo` shell

#### Testing

```
npm test
```
- Checks all `.js` and `.jsx` files against Airbnb style guide using ESLint in pretest
- Runs all test suites

## Deployment

Buying Zone is not yet deployable. Please check back later!

## Contributing

This project is being used for education purposes, and is not intended to be openly contributed to.
That being said, any feedback or suggestions are warmly welcomed, and may even enhance the
education process! Feel free to contact adam.gipril@icloud.com directly with any suggestions or
improvements.

## Links

- Project homepage: https://github.com/hrr38hana/buying-zone
- Issue tracker: https://github.com/hrr38hana/buying-zone/issues
- Related projects:
  - https://github.com/hrr38hana/reviews_module
  - https://github.com/hrr38hana/andrewpiao1-service
  - https://github.com/hrr38hana/NapoleonDLP-Service
