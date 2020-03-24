import express from 'express'

// App Imports
import serverInitialisation from './setup/serverInitialisation'
import startServer from "./setup/startServer"

// Create express server
const server = express();

// Setup server
serverInitialisation(server);

// Start server
startServer(server);