import express from "express"
import apiRouter from "../api/router"

const Router = (server) => {

    // Home route. We'll end up changing this to our main front end index later.
    server.get('/', function (req, res) {
        return res.status(200).sendFile('home.html', {root: './src/Home'})
    });

    //Project router
    server.use('/api', apiRouter)

    // server.use('/api/project', projectRoutes);
    // server.use('/api/pages', pagesRoutes);
    // server.use('/api/user', usersRoutes);
}

export default Router