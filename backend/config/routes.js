module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/clients')
        .post(app.api.clients.save)
        .get(app.api.clients.get)

    app.route('/clients/:id')
        .put(app.api.clients.save)
        .get(app.api.clients.getById)

    app.route('/products')
        .post(app.api.products.save)
        .get(app.api.products.get)

    app.route('/products/:id')
        .put(app.api.products.save)
        .get(app.api.products.getById)

    app.route('/order')
        .post(app.api.serviceOrder.save)
        .get(app.api.serviceOrder.get)

    app.route('/order/:id')
        .put(app.api.serviceOrder.save)
        .get(app.api.serviceOrder.getById)
}