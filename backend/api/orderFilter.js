module.exports = app => {
    const get = async (req, res) => {
        try {
            const ordensDeServico = await app.db('ordensDeServico')
            const clientes = await app.db('clientes')
            const enderecos = await app.db('enderecos')
            const produtos = await app.db('produtos')

            const ordensCompletas = ordensDeServico.map(os => {
                os.produto = produtos.find(p => p.clienteId == os.clienteId)
                os.cliente = clientes.find(c => c.id == os.clienteId)
                os.cliente.endereco = enderecos.find(e => e.clienteId == os.clienteId)
                return os
            })

            const OrderAwaitingBudget = ordensCompletas.filter(order => {
                return order.situacao == "Aguardando Orçamento"
            })

            const OrderAwaitingAuthorization = ordensCompletas.filter(order => {
                return order.situacao == "Aguardando Autorização"
            })

            const OrderAuthorizedBudget = ordensCompletas.filter(order => {
                return order.situacao == "Orçamento Autorizado"
            })

            const OrderAwaitingRemoval = ordensCompletas.filter(order => {
                return order.situacao == "Aguardando Retirada"
            })

            const allFilters = {
                OrderAwaitingBudget,
                OrderAwaitingAuthorization,
                OrderAuthorizedBudget,
                OrderAwaitingRemoval
            }

            res.json(allFilters)
        } catch (err) {
            res.status(500).send(err)
        }
    }

    return { get }
}