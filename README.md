## Dependencies to import

express
cors
mongoose

# Backend

start mongo in console

## Create server folder

npm init
install dependencies
create .gitignore file

### index.js

import express. Call express from require express, initialise an app from express(), import router from router file set the port.

Serve static files through express.static - use path to client folder. Set up bodyparsing and sort out the router.

app.use(cors)

Start listening to check that the server is listening.

## Create models folder

### newModel.js

Initialise mongoose and create schema - give schema a lowercase name.

Create an instance of mongoose.model with an uppercase version of the name as the const and the dbName and schemaName as args.

Export created const.

## Create controllers folder

### new-controller.js

Import newModel

export functions that we want to use in the routing logic.

Remember that with express we use (req,res) as the args. These functions need to be async await.

## Create router.js

Import express and use .Router(). Import controllers using spread.

Sort out routing logic and end of URL. Export router.

## index.js

import mongoose, make sure router is imported and declared.

Add mongoose connect within the app.listen and use a console.log to show you're connected.

# Frontend

Create new app using npx create-react-app my-app

## Create ApiService file

Add base url and create a basic fetchRequest function, will use this in order to build the subsequent functionality

## Integrate ApiService into App.js

Use ApiService within the useEffect in order to get the topics, then setTopics

## Create basic file structure

Render basic info from topics in order to make sure get is working, minimal styling.

Begin to create, modify and export all files into the relevant ones we need.

## ApiService file

Build functionality one at a time, test and move onto the next.

## Styling

Style towards the end, don't waste too much time in the test - make sure it's functional first.
