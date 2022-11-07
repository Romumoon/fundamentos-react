import produtos from "../../data/produtos"

export default props => {

    const produtosTd = produtos.map(produto => {
        return(
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosTd}
                </tbody>
            </table>
        </div>
    )
}