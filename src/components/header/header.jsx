import './index.scss'

export default function Navbar() {
    return (
        <div className="header">
            <div className="header__btn disabled">
                Organização
            </div>
            <a href="/">
                <div className="header__btn show">
                    Tarefas
                </div>
            </a>
        </div>
    )
}