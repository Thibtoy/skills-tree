import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import router from "./router"
import databaseInitialisation from './databaseInitialisation'

const serverInitialisation = (server) => {
    console.info('SETUP - Loading modules...')
    // Request body parser
    databaseInitialisation()
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))

    // Request body cookie parser
    server.use(cookieParser())

    server.use(morgan('tiny'))
    // Enable CORS
    server.use(function(req, res, next){
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, application/json')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        res.setHeader('Access-Control-Allow-Credentials', true)
        next()
    })

    server.use('/dist', express.static('src/dist'))

    // Initializing our routes
    router(server);
}

export default serverInitialisation