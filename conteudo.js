// assincronicidade 

// console.log('oi, ')

// setTimeout(() => {
//   console.log('tudo ')
// }, 3000)

// console.log('bem ?')


function promessa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // return reject(Error('BUGOU!'))
      return resolve('Leide')}, 3000)
  })
}

// promessa()
// .then((resposta) => console.log(resposta))
// .catch((error) => console.error(error))

async function resolverPromessa() {
  try {
    const resposta = await fetch()
    console.log(resposta)
  }
  catch(error) {
    console.error('Capturei um erro no try: ', error)
  }
}

resolverPromessa()

