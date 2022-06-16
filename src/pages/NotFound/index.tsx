import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <h1>página não encontrada</h1>
            <Link to='/' >Voltar para home</Link>
        </>

    )
}