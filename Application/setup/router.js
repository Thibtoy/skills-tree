import express from "express"
import apiRouter from "../api/router"

const Router = (server) => {
    //Project router
    server.use('/api', apiRouter)

    // Home route. We'll end up changing this to our main front end index later.
    server.use('/', function (req, res) {
        return res.status(200).sendFile('index.html', {root: './src'})
    });

    // server.use('/api/project', projectRoutes);
    // server.use('/api/pages', pagesRoutes);
    // server.use('/api/user', usersRoutes);
}

export default Router