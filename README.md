# React Node - Simple Users & Hobbies App.

A simple web app for managing Users and Hobbies, Node & Express & Prisma, React Hooks & MUI

Developed with Node v18.

## Getting Started - Dev Mode

`npm install`

## Adding link to your database

Add you link, e.g. : postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=SCHEMA

to the DATABASE_URL in the .env file.



Run: (Create the DB Models)

### `npx prisma migrate dev --name init`

### Run the server

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser (this is the build version of the react app).

## Running the React app

In another terminal run:

### `cd client`

### `npm i`

### `npm start`

Let it run on another port

You all set!


## Production (React App)

### `cd client`

### `npm run build`

Let it finish..

### `cd ..`

### `npm start`

Now the server is serving the build version of the React app.



