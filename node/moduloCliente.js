//aqui usará módulos 
//importar como commonsJS é com require, mas ele foi modificado para import [módulo-nome] from 'caminho relativo':
//O ponto barra referenciando módulo que está dentro do sistema/pasta
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.bomDias) //retorna 'bom dia'
console.log(moduloB.blz) //retorna 'tudo bem'
console.log(moduloB.funfun()) //retorna valor da função
console.log(moduloB)