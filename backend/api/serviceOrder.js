module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = async (req, res) => {
        const os = { ...req.body }
        if (req.params.id) os.id = req.params.id

        try {
            existsOrError(os.cliente.nome, 'Nome do Cliente não informado')
            existsOrError(os.produto.marca, 'Marca do Produto não informada')
            existsOrError(os.produto.modelo, 'Modelo do Produto não informado')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (os.id) {

            try {
                await app.db('ordensDeServico').update({
                    situacao: os.situacao,
                    descricaoOrcamento: os.descricaoOrcamento,
                    valorOrcamento: os.valorOrcamento,
                    sinalOrcamento: os.sinalOrcamento,
                    obs: os.obs
                }).where({ id: os.id })

                await app.db('clientes').update({
                    nome: os.cliente.nome,
                    cpf: os.cliente.cpf,
                    email: os.cliente.email,
                    telefone: os.cliente.telefone
                }).where({ id: os.clienteId })

                await app.db('enderecos')
                    .update(os.cliente.endereco)
                    .where({ clienteId: os.clienteId })

                await app.db('produtos')
                    .update(os.produto)
                    .where({ id: os.produtoId })

                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }

        } else {

            //     app.db('clientes')
            //         .returning('id')
            //         .insert({ nome: os.cliente.nome })
            //         .then(id => {
            //             os.cliente.endereco.clienteId = id
            //             os.produto.clienteId = id
            //             os.clienteId = id

            //             app.db('enderecos')
            //                 .insert(os.cliente.endereco)
            //                 .then(_ => {

            //                     app.db('produtos')
            //                         .returning('id')
            //                         .insert(os.produto)
            //                         .then(idProd => {
            //                             os.produtoId = idProd

            //                             app.db('ordensDeServico')
            //                                 .insert({
            //                                     numero: os.numero,
            //                                     data: new Date(),
            //                                     situacao: os.situacao,
            //                                     clienteId: os.clienteId,
            //                                     produtoId: os.produtoId
            //                                 }).then(_ => res.status(204).send())
            //                         })
            //                 })
            //         })
            //         .catch(err => res.status(500).send(err))
            // }
            //
            //      Working! but i want some thing better.
            //

            try {

                const idClient = await app.db('clientes').returning('id').insert({
                    nome: os.cliente.nome,
                    cpf: os.cliente.cpf,
                    email: os.cliente.email,
                    telefone: os.cliente.telefone
                })

                const idProd = await app.db('produtos').returning('id').insert({
                    ...os.produto, clienteId: idClient
                })

                await app.db('enderecos').insert({
                    ...os.cliente.endereco, clienteId: idClient
                })

                await app.db('ordensDeServico').insert({
                    data: new Date(),
                    situacao: os.situacao,
                    descricaoOrcamento: os.descricaoOrcamento,
                    valorOrcamento: os.valorOrcamento,
                    obs: os.obs,
                    clienteId: idClient,
                    produtoId: idProd
                })

                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }

        }
    }

    const get = async (req, res) => {

        // app.db('ordensDeServico')
        //     .leftJoin('clientes', 'ordensDeServico.clienteId', 'clientes.id')
        //     .leftJoin('enderecos', 'clientes.id', 'enderecos.clienteId')
        //     .leftJoin('produtos', 'ordensDeServico.produtoId', 'produtos.id')
        //     .then(clientes => res.json(clientes))
        //     .catch(err => res.status(500).send(err))
        //
        //          Working! But a little messy, i need a better solution.
        //

        try {
            const ordensDeServico = await app.db('ordensDeServico')
            const clientes = await app.db('clientes')
            const enderecos = await app.db('enderecos')
            const produtos = await app.db('produtos')

            ordensCompletas = ordensDeServico.map(os => {
                os.produto = produtos.find(p => p.clienteId == os.clienteId)
                os.cliente = clientes.find(c => c.id == os.clienteId)
                os.cliente.endereco = enderecos.find(e => e.clienteId == os.clienteId)
                return os
            })

            res.json(ordensCompletas)
        } catch (err) {
            res.status(500).send(err)
        }




    }

    const getById = async (req, res) => {

        try {
            const os = await app.db('ordensDeServico').where({ id: req.params.id }).first()
            os.cliente = await app.db('clientes').where({ id: os.clienteId }).first()
            os.cliente.endereco = await app.db('enderecos').where({ clienteId: os.cliente.id }).first()
            os.produto = await app.db('produtos').where({ id: os.produtoId }).first()

            res.json(os)
        } catch (err) {
            res.status(500).send(err)
        }
    }

    return { save, get, getById }
}