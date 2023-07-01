let enterGame = document.querySelector('.input-group-text')
let valueGame = document.querySelector('.form-control')
let resultGame = document.querySelector('#game-img')
enterGame.addEventListener('click', () => { 
    let endResult = resultGame.innerHTML.split("/")
    endResult = endResult[7]
    endResult = endResult.replace('_0.jpg">','')
    input=valueGame.value
    if (endResult.toUpperCase() === input.toUpperCase())
        alert("Chính cmn xác")
    else {
        console.log(`${endResult}|${input}`)
        alert("Sai cmnr")
    }
 })
