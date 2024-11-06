import estilos from './Card.module.css';
 
export function Card({ movie }){
    return(
        <div className={estilos.conteiner}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
            <p/>
            <p>{movie.overview}</p>
        </div>
    );
 
}
