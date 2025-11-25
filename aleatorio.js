const nomes = ["Tamiris","Laura","Eduardo","Nathieli","Lauana","Denise","Emer"];



export function aleatorio(lista){
const posicao = Math.floor(Math.random()*lista.length);
return lista[posicao];
}

export const nome = aleatorio(nomes);