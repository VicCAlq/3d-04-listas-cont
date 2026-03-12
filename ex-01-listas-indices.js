/* Questão 1 */
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]

export const resposta01 = frutas[1]

/* Questão 2 */
export const resposta02 = frutas[frutas.length - 1]

/* Questão 3 */
frutas[3] = "abacaxi"
export const resposta03 = frutas

/* Questão 4 */
frutas.push("limão")
export const resposta04 = frutas

/* Questão 5 */
let troca = frutas[2]
frutas[2] = frutas[5]
frutas[5] = troca

export const resposta05 = frutas

/* Questão 6 */
const numeros = [7, 2, 4, 9, 8, 6, 1]

export const resposta06 = numeros[0] * numeros[numeros.length - 2]

/* Questão 7 */
const lista07 = [1, 7, 2, 4, 9, 8, 6]

export const resposta07 = lista07

/* Questão 8 */
let soma = lista07[0] + lista07[1] + lista07[2] + lista07[3] + lista07[4] + lista07[5] + lista07[6]

lista07[7] = soma

export const resposta08 = lista07

/* Questão 9 */
let lista09 = [lista07[0], lista07[5], lista07[2], lista07[1], lista07[4], lista07[3], lista07[6]]

export const resposta09 = lista09

/* Questão 10 */
let lista10 = [
  lista07[lista07.length - 1],
  lista07[lista07.length - 2],
  lista07[lista07.length - 3]
]

export const resposta10 = lista10