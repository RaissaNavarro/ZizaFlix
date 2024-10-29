import estilos from './BarradeNavegacao.module.css'

export function BarradeNavegacao(){
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Series</li>
            </ul>
        </nav>
    )
}