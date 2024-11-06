//requisição http(s) é feita usando o axios
import axios from "axios";

//hook: são os auxilios que tenho para deixar minha programação mais robusta, e flexivel.
//useState controla o estado atual da minha varivel
//useEffect manipula a visualização do componente em tela
import React, {useState, useEffect} from "react";

//importo o componente card
import { Card } from './Card';
import estilos from './Lista.module.css';
 
 //preciso de um endereço e uma chave para fazer a comunicação dele com a API
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';
 
export function Lista(){
    const [movies, setMovies] = useState([]);
 
    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
          .then(response => {
            console.log(response.data.results);
            setMovies(response.data.results);
          })
          .catch(error => {
            console.log('Error', error);
          });
      }, []);
 
    return(
      <div className={estilos.conteiner}>
        <figure style={{display: 'flex', flexWrap: 'wrap'}}>
          {movies.map(movie=>(
            <Card key={movie.id} movie={movie}/>
          ))}
 
        </figure>
       
      </div>
    );
 
}
 