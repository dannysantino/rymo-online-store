# Rymo Online Store

Rymo Store is a full stack eCommerce web app designed to provide a seamless and intuitive user experience. It is built with the MERN stack (MongoDB, Express.js, React.js, Nodejs).

Deployed on Netlify **[here](https://rymostore.netlify.app)**

## Features

- A modern and responsive design that looks great on all devices
- A user-friendly interface that makes it easy to navigate and view available products in the store
- Add-to-cart functionality with Redux and Redux Thunk integration for managing application state
- Integration with Axios for making HTTP requests to the backend API

## Requirements

- MongoDB
- Mongoose
- Express
- React - v17.0.2
- Node.js - v18.12.1
- React Router Dom - v6.2.1
- Redux - v4.1.2
- Axios
- Dotenv

## Getting Started

1. Clone the repository

`git clone https://github.com/dannysantino/rymo-online-store.git`

2. Install dependencies

`cd rymo-online-store/backend`
`npm install`

`cd ../frontend`
`npm install`


3. Set up a MongoDB database, add the `URI` and a `PORT` number to a `.env` file in the root directory

`touch .env`

Input the following
`PORT=5000`
`MONGO_URI=[your_mongo_uri]`

4. Start the development servers

In the root directory, run
`npm start`

And in a separate terminal, run
`npm run client`

Alternatively, you can run `npm install` in the root directory to install **[concurrently](https://github.com/open-cli-tools/concurrently#readme)**, a tool that runs multiple commands simultaneously. Then, you can start both servers with `npm run dev`

The backend app should be running on http://localhost:5000, with the frontend on http://localhost:3000

## Built with

- [MongoDB](https://www.mongodb.com)
- [Express.js](https://expressjs.com)
- [React.js](https://reactjs.org)
- [Node.js](https://nodejs.org)

## Contributing

If you would like to contribute to this project, please follow these guidelines:
- Fork the repository and make your changes on a separate branch
- Test your changes thoroughly to ensure they work as expected
- Open a pull request and describe your changes

All contributions are greatly appreciated!