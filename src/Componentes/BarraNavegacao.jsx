import estilos from './BarraNavegacao.module.css';

export function BarraNavegacao(){

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