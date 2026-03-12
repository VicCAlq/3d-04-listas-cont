
const numeros = [7, 2, 4, 9, 8, 6, 1]
// Operações necessárias e resposta a partir da linha abaixo
export const resposta06 = numeros[0] * numeros[numeros.length - 2]

/* Questão 7
Seguindo com a lista criada na questão 7, utilizando os índices de cada item,
avance eles em uma posição (e mande o último item para a primeira posição),
de modo que a lista se torne 1, 7, 2, 4, 9, 8, 6. Armazene a lista na
variável "resposta07"
*/let temporario = numeros[numeros.length - 1]
numeros[6] = numeros[5]
numeros[5] = numeros[4]
numeros[4] = numeros[3]
numeros[3] = numeros[2]
numeros[2] = numeros[1]
numeros[1] = numeros[0]
numeros[0] = temporario
// Operações necessárias e resposta a partir da linha abaixo
export const resposta07 = numeros

/* Questão 8
Continuando com a lista da questão 7, adicione no final da lista o resultado
da soma de todos os números anteriores da lista. Retorne a lista completa na
variável "resultado08". É proibido usar métodos de listas e funções.
*/
// Operações necessárias e resposta a partir da linha abaixo
let soma =
numeros[numeros.length - 1] + 
numeros[numeros.length - 2] + 
numeros[numeros.length - 3] + 
numeros[numeros.length - 4] + 
numeros[numeros.length - 5] + 
numeros[numeros.length - 6] + 
numeros[numeros.length - 7]

numeros[numeros.length] = soma 
export const resposta08 = numeros
console.log(numeros)

/* Questão 9
Ainda com a lista da questão 7, mude:
- O segundo item para a quarta posição
- O quarto item para a sexta posição
- O sexto item para a segunda posição
E retorne a lista completa na variável "resultado09"
*/
// Operações necessárias e resposta a partir da linha abaixo
//1, 37, 2, 6, 9, 8, 4
[numeros[1], numeros[3], numeros[5]] = [numeros[5], numeros[1], numeros[3]] 
export const resposta09 = numeros
console.log(resposta09)
/* Questão 10
Finalizando com a lista da questão 7, crie uma nova lista com três itens onde:
- O primeiro item da nova lista é o último da anterior
- O segundo item da nova lista é o penúltimo da anterior
- O terceiro item da nova lista é o antepenúltimo da anterior
*/

//7, 2, 4, 9, 8, 6, 1

// Nova lista abaixo
const final = [37, 6, 4]
// Operações necessárias e resposta a partir da linha abaixo
export const resposta10 = final