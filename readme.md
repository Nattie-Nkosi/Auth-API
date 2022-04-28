# AUTHENTICATION API STARTER

---

### DESCRIPTION

This is a Authentication Service API starter files. [Link]('https://auth-api-typescript.herokuapp.com/')

---

### TECH STACK

- TypeScript
- ExpressJS
- MongoDB

---

### RUN THE AUTH SERVICE API

**Fist Time**

- Install [NodeJS](https://nodejs.org/).
- Install TypeScript globally on Terminal using `npm install -g typescript`.
- Check to see if TypeScript was installed successfully by running `tsc -v`.
- Create a MongoURI key at [MongoDB](https://www.mongodb.com/atlas).
- Create a .env file on root folder and place set your MongoURI key e.g (`MONGO_URL`='mongourl').
- Inside a .env file set your `JWT_KEY` token (`JWT_KEY`='jwtKey').
- Inside app.ts set up cors middleware, just set your client url `URL_API` to allow API to receive requests from your client.
- On your CMD, Git Bash or Terminal run `npm i` to install dependencies.
- Run the APi `npm run dev`.

The API runs on port `http://localhost:3000`.
Use [Postman API Platform](https://www.postman.com/) to send http requests on port `3000`.

---

### AUTH SERVICE ENDPOINTS

- POST signup user: http://localhost:3000/api/users/signup

- POST signin user: http://localhost:3000/api/users/signin

- GET current user: http://localhost:3000/api/users/currentuser

- POST signout user: http://localhost:3000/api/users/signout
