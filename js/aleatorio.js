export function aleatorio (liata){
    //Trecho de código suprimido
}
const nomes = ["Rubia", "Gisele"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()*lista.length);   
    return lista [posicao];
 }

 export const nome = aleatorio(nomes)