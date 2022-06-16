import TabelaRecados, { recados } from "../shared/TabelaRecados";
import {Link} from 'react-router-dom'

export default function ListaMercado() {
    const listaMercado: recados[] = [
    {
        itemCol1: 'farinha',
        itemCol2: "2 kg"
    },
    {
        itemCol1: 'açucar',
        itemCol2: "1 kg"
    },
    {
        itemCol1: 'ovos',
        itemCol2: "12 un"
    },
]

    return (
        <>
            <h1 className="text-center">Lista de compras</h1>
            <TabelaRecados titleCol1="Item" titleCol2="Quantidade" tableBody={listaMercado} />
            <Link to='/'>voltar para home</Link>
        </>
    )
}