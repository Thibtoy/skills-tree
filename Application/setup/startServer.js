// Start server
import serverConfig from '../config/server.json'
const PORT = process.env.PORT || serverConfig.PORT

const startServer = (server) => {
    console.info('SETUP - Starting server..')

    server.listen(PORT, (error) => {
        if (error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on http://localhost:${PORT} [DEV]`)
        }
    })
}

export default startServer