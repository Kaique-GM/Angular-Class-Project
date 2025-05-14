
const produtos = [{ id: 1, nome: 'produto 1', valor: 50, temEstoque: true }];
let ultimoId = 1;

exports.post = (req, res) => {
    const { nome, valor, temEstoque } = req.body;
    const produto = { id: ultimoId, nome, valor, temEstoque };
    ultimoId++;
    produtos.push(produto);
    res.status(201).json(produto);
}

exports.getAll = (req, res) => {
    res.json(produtos);
}

exports.getID = (req, res) => {
    const { id } = req.params;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
}

exports.put = (req, res) => {
    const { id } = req.params;
    const { nome, valor, temEstoque } = req.body;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produto.nome = nome;
    produto.valor = valor;
    produto.temEstoque = temEstoque;
    res.json(produto);
}
exports.delete = (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex((p) => p.id == id);
    if (index === -1) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produtos.splice(index, 1);
    res.status(204).send();
}