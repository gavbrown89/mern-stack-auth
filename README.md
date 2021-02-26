# MERN Stack Auth Application
### MongoDB, Express.js, React, Node.js
User registration and login authenticated application

## MongoDB setup
If you haven't used MongoDB before, head over to the following link and setup an account: https://www.mongodb.com/cloud/atlas

Once you have created an account and database find your MongoDB URI, then open your terminal and cd into the cloned directory.

When in the correct directory type the following to create a .env file:

```console
cd server/
touch .env
```

Then open the .env file and type the following, changing <YOUR_MONGO_DB_URI> to the one created in the above steps, the PORT number can be changed too aslong as it isn't set to 3000 because React uses 3000:

```console
PORT=3001
MONGO_URI=<YOUR_MONGO_DB_URI>
```

### Running the application
Using the terminals type the following commands to start running the Node.js server and React:

```console
cd server/
npm install && npm run dev
```

```console
cd client/
npm install && npm start
```