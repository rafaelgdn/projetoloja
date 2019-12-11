module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const product = { ...req.body }
        if (req.params.id) product.id = req.params.id

        existsOrError(product.marca, 'Marca do Produto não informada')
        existsOrError(product.modelo, 'Modelo do Produto não informado')

        if (product.id) {
            app.db('produtos')
                .update(product)
                .where({ id: product.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('produtos')
                .insert(product)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }

    }

    const get = (req, res) => {
        app.db('produtos')
            .select('id', 'marca', 'modelo', 'defeito', 'serie', 'acessorios')
            .then(product => res.json(product))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('produtos')
            .select('id', 'cpf', 'nome', 'email', 'telefone')
            .where({ id: req.params.id })
            .first()
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
}