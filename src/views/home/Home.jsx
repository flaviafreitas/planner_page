import './index.scss'
import Tabela from '../../components/table/table'

export default function Home({ data }) {
    return (
        <>
            <main className="home">
                <h1 className="home__titulo">Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            </main>
            <Tabela data={ data }/>
        </>
    )
}