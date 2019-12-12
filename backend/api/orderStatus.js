module.exports = app => {

    const status = async (req, res) => {

        try {

            const awaitingBudget = await app.db('ordensDeServico')
                .count('situacao as awaitingBudget')
                .where({ situacao: 'Aguardando Orçamento' })
                .first()

            const awaitingAuthorization = await app.db('ordensDeServico')
                .count('situacao as awaitingAuthorization')
                .where({ situacao: 'Aguardando Autorização' })
                .first()

            const authorizedBudget = await app.db('ordensDeServico')
                .count('situacao as authorizedBudget')
                .where({ situacao: 'Orçamento Autorizado' })
                .first()

            const awaitingRemoval = await app.db('ordensDeServico')
                .count('situacao as awaitingRemoval')
                .where({ situacao: 'Aguardando Retirada' })
                .first()

            const st = {
                ...awaitingBudget,
                ...awaitingAuthorization,
                ...authorizedBudget,
                ...awaitingRemoval
            }

            res.json(st)
        } catch (err) {
            res.status(500).send(err)
        }

    }

    return { status }
}