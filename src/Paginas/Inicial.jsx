import { Cabecalho } from '../Componentes/Cabecalho';
import { BarraNavegacao } from '../Componentes/BarraNavegacao';
import { Conteudo } from '../Componentes/Conteudo';

export function Inicial(){
    return(
        <>
        <Cabecalho />
        <BarraNavegacao/>
        <Conteudo />
        </>
    )

}