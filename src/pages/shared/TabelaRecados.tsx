
 interface props {
    titleCol1: string;
    titleCol2: string;
    tableBody: Array<recados>
}

export interface recados {
    itemCol1: string;
    itemCol2: string 
}

export default function TabelaRecados(props: props) {
    return(
<div className="container m-3 p-3 shadow rounded-3">
    <table className="table">
        <thead>
            <tr>
                <th scope="col">{props.titleCol1}</th>
                <th scope="col">{props.titleCol2}</th>
            </tr>
        </thead>
        <tbody>
            {props.tableBody.map((recado)=>{
                return (
                    <tr>
                        <td>{recado.itemCol1}</td>
                        <td>{recado.itemCol2}</td>
                    </tr>
                )
            })}

        </tbody>
    </table>
</div>
    )
}