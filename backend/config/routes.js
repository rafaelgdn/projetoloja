const admin = require('./admin')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        // .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        // .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(app.api.user.getById)

    app.route('/clients')
        // .all(app.config.passport.authenticate())
        .post(app.api.clients.save)
        .get(app.api.clients.get)

    app.route('/clients/:id')
        // .all(app.config.passport.authenticate())
        .put(admin(app.api.clients.save))
        .get(app.api.clients.getById)

    app.route('/products')
        // .all(app.config.passport.authenticate())
        .post(app.api.products.save)
        .get(app.api.products.get)

    app.route('/products/:id')
        // .all(app.config.passport.authenticate())
        .put(admin(app.api.products.save))
        .get(app.api.products.getById)

    app.route('/service-order')
        // .all(app.config.passport.authenticate())
        .post(app.api.serviceOrder.save)
        .get(app.api.serviceOrder.get)

    app.route('/service-order/:id')
        // .all(app.config.passport.authenticate())
        .put(admin(app.api.serviceOrder.save))
        .get(app.api.serviceOrder.getById)

    app.route('/status')
        // .all(app.config.passport.authenticate())
        .get(app.api.orderStatus.status)

    app.route('/order-filter')
        .get(app.api.orderFilter.get)
}