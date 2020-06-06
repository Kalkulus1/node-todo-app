// set up home route
const homeRoute = (app) => {
    app.get('/', (req, res) => {
        res.redirect('/to-do');
    });

    app.get('/to-do', (req, res) => {
        res.status(200).json({
            message: 'Welcome to my todo app!',
        });
    });
};

module.exports = homeRoute;