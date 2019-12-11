module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const client = { ...req.body }
        if (req.params.id) client.id = req.params.id

        existsOrError(client.nome, 'Nome não informado')

        if (client.id) {
            app.db('clientes')
                .update(client)
                .where({ id: client.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('clientes')
                .insert(client)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('clientes')
            .select('id', 'cpf', 'nome', 'email', 'telefone')
            .then(client => res.json(client))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('clientes')
            .select('id', 'cpf', 'nome', 'email', 'telefone')
            .where({ id: req.params.id })
            .first()
            .then(client => res.json(client))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
}