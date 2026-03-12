/* Questão 1
Crie uma lista chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item.
*/
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]

export const resposta01 = frutas[1]


/* Questão 2
Armazene na variável "resposta02" o último item da lista usando length.
*/
export const resposta02 = frutas[frutas.length - 1]


/* Questão 3
Altere o quarto item da lista para "abacaxi".
*/
frutas[3] = "abacaxi"

export const resposta03 = frutas


/* Questão 4
Acrescente a fruta "limão" no final da lista.
*/
frutas[frutas.length] = "limão"

export const resposta04 = frutas


/* Questão 5
Troque as posições de "laranja" e "manga".
*/
let temp = frutas[2]
frutas[2] = frutas[5]
frutas[5] = temp

export const resposta05 = frutas


/* Questão 6
Crie um array chamado "numeros" com: 7,2,4,9,8,6,1.
Multiplique o número do índice 0 pelo penúltimo.
*/
const numeros = [7, 2, 4, 9, 8, 6, 1]

export const resposta06 = numeros[0] * numeros[numeros.length - 2]


/* Questão 7
Avance todos os números uma posição e mande o último para o início.
Resultado esperado: 1,7,2,4,9,8,6
*/
const lista07 = [
  numeros[6],
  numeros[0],
  numeros[1],
  numeros[2],
  numeros[3],
  numeros[4],
  numeros[5]
]

export const resposta07 = lista07


/* Questão 8
Adicione ao final da lista a soma de todos os números anteriores.
*/
const soma =
  lista07[0] +
  lista07[1] +
  lista07[2] +
  lista07[3] +
  lista07[4] +
  lista07[5] +
  lista07[6]

const lista08 = [
  lista07[0],
  lista07[1],
  lista07[2],
  lista07[3],
  lista07[4],
  lista07[5],
  lista07[6],
  soma
]

export const resposta08 = lista08


/* Questão 9
Mude:
- O segundo item para a quarta posição
- O quarto item para a sexta posição
- O sexto item para a segunda posição
*/
const lista09 = [
  lista07[0],
  lista07[5],
  lista07[2],
  lista07[1],
  lista07[4],
  lista07[3],
  lista07[6]
]

export const resposta09 = lista09


/* Questão 10
Crie uma nova lista com:
- último item
- penúltimo item
- antepenúltimo item
*/
const lista10 = [
  lista07[lista07.length - 1],
  lista07[lista07.length - 2],
  lista07[lista07.length - 3]
]

export const resposta10 = lista10