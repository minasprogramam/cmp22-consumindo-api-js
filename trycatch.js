const nome = "Lorena"

try {
  nome = "Flávia"
} catch(err) {
  console.log('Capturei um erro no try: ', err)
}

console.log(nome)

console.log('Fim')
