import estilos from './Cabecalho.module.css';
import Profs from '../assets/Profs.png'
import User from '../assets/User.png'

export function Cabecalho(){
    return(
    <header className={estilos.conteiner}>
        <img className={estilos.avatar} src={Profs} />
        <div className={estilos.rightContainer}>
            <h1>ZIZA</h1>
            <img className={estilos.user} src={User} />
        </div>
    </header>
    )
}
