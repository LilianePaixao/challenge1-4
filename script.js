let numberUser = prompt('Informe um número')
let numberUser2 = prompt('Informe o segundo número')

numberUser = Number(numberUser)
numberUser2 = Number(numberUser2)

let sum = numberUser + numberUser2

let sub = numberUser - numberUser2
let mult = numberUser * numberUser2
let div = numberUser / numberUser2
let rest = numberUser % numberUser2
let equal = numberUser == numberUser2 ? 'iguais' : 'diferentes'
let pair = sum % 2 == 0 ? 'par' : 'ímpar'


alert(`A soma dos dois número é ${pair}`)
alert(`Os dois números são ${equal} entre si`)
alert(`A soma dos dois números: ${sum}`)
alert(`A subtração dos dois números: ${sub}`)
alert (`A multiplicação dos dois números: ${mult}`)
alert(`A divisão dos dois números: ${div}`)
alert(`O resto da divisão dos dois números: ${rest}`)


