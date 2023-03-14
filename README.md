# Steps to Run the App locally


## Installation of public folder dependencies

```bash
  cd public
  npm install
```

## Install the Server Dependencies
```bash
  cd server
  npm install
```

### In the Server Directory there's a .env file. Change the value of mongodb inside the file. Set the value as your mongodb connection url.

Use default PORT and MongoURL, if you are using MongoDB for the first time.

## Start the server
```bash
  cd server
  yarn start
```

## Start the react (public)
```bash
  cd public
  yarn start
```

Now the chat application would be running successfully on localhost.
