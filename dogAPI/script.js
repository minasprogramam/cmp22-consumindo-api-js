// Exercício dos doguinhos com fetch()

const container = document.getElementById('demo')

async function pegarDoguinho(raca) {
  try {
    const resposta = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
    // console.log(resposta)
    const dadosDoguinho = await resposta.json()
    // console.log(dadosDoguinho)
    const image = document.createElement('img') // <img class="image" src="https://images.dog.ceo/breeds/beagle/n02088364_6611.jpg">
    image.setAttribute('src', dadosDoguinho.message)
    image.setAttribute('class', "image")
    container.appendChild(image)
  }
  catch(erro) {
    console.error("Capturei um erro:? ", erro)
  }
}

pegarDoguinho('akita')

/*
fetch(url) <-----

fetch(url, {
  method: 'GET, POST, PUT, DELETE',
  headers: {},
  body: {},
})

*/
