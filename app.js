const playBtn = document.getElementById('playBtn')
const title = document.getElementById('title')
const playZone = document.getElementById('playZone')
const playData = document.getElementById('playData')
const fiveBtn = document.getElementById('fiveBtn')
const sevenBtn = document.getElementById('sevenBtn')
const tenBtn = document.getElementById('tenBtn')
const bombImg = document.getElementById('bombImg')
const row = document.getElementsByClassName('row')
const divSizeBorder = document.getElementById('divSizeBorder')
const zone = document.getElementsByClassName('zone')
const redFlag = document.getElementsByClassName('redFlag')
const exitGameBtn = document.getElementById('exitGameBtn_id')
const exitGameWindow = document.getElementById('exitGameWindow')
const exitGameOk = document.getElementById('exitGameOk')
const exitGameCansel = document.getElementById('exitGameCansel')
const restartGameWindow = document.getElementById('repeatGameWindow')
const restartGameBtn = document.getElementById('repeatGameBtn_id')
const restartGameOk = document.getElementById('repeatGameOk')
const restartGameCansel = document.getElementById('repeatGameCansel')
const backgroundMusic = document.getElementById('backgroundMusic')
const volumeBtn = document.getElementById('volumeBtn')
const volumeUpImg = document.getElementById('volumeUpImg')
const volumeMuteImg = document.getElementById('volumeMuteImg')
const titleGameOver = document.getElementById('titleGameOver')
const logOutImg = document.getElementById('logOutImg')
const repeatImg = document.getElementById('repeatImg')
const btnContainer = document.getElementById('btnContainer')

backgroundMusic.volume = 0.07
let playMusic = false

volumeBtn.onclick = () => {
    if (playMusic == false){
        volumeUpImg.style.display = 'block'
        volumeMuteImg.style.display = 'none'
        backgroundMusic.volume = 0.07
        backgroundMusic.play()
        playMusic = true
    }
     else   {
        volumeUpImg.style.display = 'none'
        volumeMuteImg.style.display = 'block'
        backgroundMusic.volume = 0
        playMusic = false
    }
}

backgroundMusic.onended = () => {
        backgroundMusic.currentTime = 0
        backgroundMusic.play()
    
}

 let extGmCl = () => {
    exitGameWindow.style.display = 'block'
    exitGameWindow.classList.add('appearance')
    if(exitGameWindow.style.display == 'block'){
        restartGameBtn.onclick = 'none'
    }

}

exitGameBtn.onclick = extGmCl

exitGameCansel.onclick = () =>{
    exitGameWindow.style.display = 'none'
    restartGameBtn.onclick = restGmCl    
}

exitGameOk.onclick = () =>{

    if(restartGameBtn.style.width == '13vh'){
        exitGameBtn.style.display = 'none'
        restartGameBtn.style.display = 'none'
        title.classList.add('appearance')

        setTimeout(() => {
            titleNormal()
        }, 450)
    
        setTimeout(() => {
            title.style.top = '22%'
        }, 450.1)
    }
    else{
        exitGameBtn.classList.add('fadeOutAnimacion')
        restartGameBtn.classList.add('fadeOutAnimacion')
        title.style.top = '22%'
    }

    exitGameWindow.style.display = 'none'
    playZone.style.display = 'none'
    playBtn.style.display = 'flex'
    divSizeBorder.style.display = 'block'
    restartGameBtn.onclick = restGmCl
    titleGameOver.classList.add('fadeOutAnimacion')

    createField()

    setTimeout(() => {
        exitGameBtn.style.display = 'none'
        exitGameBtn.classList.remove('fadeOutAnimacion')
        restartGameBtn.style.display = 'none'
        restartGameBtn.classList.remove('fadeOutAnimacion')
        titleGameOver.classList.remove('fadeOutAnimacion')

        btnStyleStandart()

    }, 500)

}

let restGmCl = () => {
    restartGameWindow.style.display = 'block'
    restartGameWindow.classList.add('appearance')
    if(restartGameWindow.style.display == 'block'){
        exitGameBtn.onclick = 'none'
    }
}

restartGameBtn.onclick = restGmCl

restartGameOk.onclick = () => {

    if(restartGameBtn.style.width == '13vh'){
        fch = true
    }

    if(fch == true && restartGameBtn.style.width == '13vh' ){
        restartGameBtn.style.display = 'none'
        exitGameBtn.style.display = 'none'

        setTimeout(() => {
            restartGameBtn.style.display = 'block'
            exitGameBtn.style.display = 'block'
            fch = false
        }, 1)
    }

    

    createField()
    playGame()
    titleNormal()
    restartGameWindow.style.display = 'none'
    exitGameBtn.onclick = extGmCl
    
    
   
}

restartGameCansel.onclick = () => {
    restartGameWindow.style.display = 'none'
    exitGameBtn.onclick = extGmCl

}

let gameOver = () => {

    title.classList.add('fadeOutAnimacion')
    titleGameOver.classList.add('appearance')
    titleGameOver.style.display = 'block'

    setTimeout(() => {
        title.style.display = 'none'
        title.classList.remove('fadeOutAnimacion')
        playZone.classList.remove('appearance')
    }, 500)    

    setTimeout(() => {
        playZone.classList.add('fadeOutAnimacion')
        exitGameBtn.classList.add('fadeOutAnimacion')
        restartGameBtn.classList.add('fadeOutAnimacion')
    }, 1000)

    setTimeout(() => {
        btnStyleGameOver()
        playZone.style.display = 'none'
        playZone.classList.remove('fadeOutAnimacion')
    }, 1450)
    
    setTimeout(() => {
        exitGameBtn.classList.remove('fadeOutAnimacion')
        restartGameBtn.classList.remove('fadeOutAnimacion')
    }, 1500)
    
}

let cels = 49
let numRows = 7
let numColumns = 7
let divSizeNum = 8
let numBomb = 9
let flagSize = 8
let bombSize = 7.5
let fch = false

let formatChanges = () => {

    if(fch == false){
        exitGameBtn.style.display = 'block'
        restartGameBtn.style.display = 'block'
    }
    title.style.top = '12.5%'
    playBtn.style.display = 'none'
    playZone.style.display = 'flex'
    playZone.style.opacity = 1
    divSizeBorder.style.display = 'none'
    playZone.classList.add('appearance')
    exitGameBtn.classList.add('appearance')
    restartGameBtn.classList.add('appearance')
    
}

let inputData = () => {
    let divSizeBorderVal = document.getElementById('divSizeBorder').value

    if(divSizeBorderVal == '5'){
        numRows = 5
        numColumns = 5
        divSizeNum = 11
        flagSize = 11
        bombSize = 10.5
        cels = 25
        numBomb = 4

    }

   else if(divSizeBorderVal == '7'){
        numRows = 7
        numColumns = 7
        divSizeNum = 8
        flagSize = 8
        bombSize = 7.5
        cels = 49
        numBomb = 9

    }

    else{
        numRows = 10
        numColumns = 10
        divSizeNum = 6
        flagSize = 6
        bombSize = 5.35
        cels = 100
        numBomb = 17
    }
}

let flagSiz = (inp, size, display) => {
   inp.innerHTML = ` <img id="redFlag" class="redFlag" src="images/redFlag.png" alt="" style="display: ${display}; width: ${size}vh; height: ${size}vh;"></img> `
}

let bombSiz = (inp, b, size) => {
    inp[b].innerHTML = `<img class="bomb" src="images/mine.png" style="display: block; width: ${size}vh; height: ${size}vh;" alt="bomb">`
}

let creatingPlayArea = () => {

    let playZoneElement = document.querySelector('.playZone')

 for(let i = 0; i < numRows; i++){

    let row = document.createElement('div')
    row.classList.add('row')
    playZoneElement.appendChild(row)

    for(let j = 0; j < numColumns; j++){

        let newDivs = document.createElement('div')
        newDivs.classList.add('zone')
        newDivs.style.display = 'block'
        newDivs.style.width = `${divSizeNum}vh`
        newDivs.style.height = `${divSizeNum}vh`
        row.appendChild(newDivs)

        newDivs.oncontextmenu = (event) => {
            if(redFlagPresence == false){
                event.preventDefault();
                flagSiz(newDivs, flagSize, 'block')
                redFlagPresence = true
            }
            else {
                event.preventDefault();
                flagSiz(newDivs, flagSize, 'none')
                redFlagPresence = false
            }
        }
    }
}
}

let createField = () =>{
    const existPlayArea = document.querySelectorAll('.zone')
    existPlayArea.forEach(div => div.remove())
}

let redFlagPresence = false

let bombIndex = () => {

    for(let i = 0; i < numBomb; i++){
    
            let bombIndex = Math.floor(Math.random() * cels)

            if(zone[bombIndex].classList.contains('bomb') !== true){

            zone[bombIndex].classList.add('bomb')
            console.log('бомб') 
            bombSiz(zone, bombIndex, bombSize)
            zone[bombIndex].onclick = () => { 
            zone[bombIndex].innerHTML = `<img class="bomb" id="mine1" src="images/mine.png" style="display: block; width: ${bombSize}vh; height: ${bombSize}vh;" alt="bomb">` 
        }
        zone[bombIndex].onclick = gameOver
        }
    }
}

const playGame = () => {
    inputData()
    formatChanges()
    creatingPlayArea()  
    bombIndex()
    btnStyleStandart()
   
 }

 playBtn.onclick = playGame

let btnStyleGameOver = () => {
    exitGameBtn.style.transition = '0s'
    exitGameBtn.style.position = 'static'
    exitGameBtn.style.order = '2'
    exitGameBtn.style.marginLeft = '7px'
    exitGameBtn.style.width = '13vh'
    exitGameBtn.style.height = '13vh'
    logOutImg.style.width = '10vh'
    logOutImg.style.height = '10vh'

    restartGameBtn.style.order = '1'
    restartGameBtn.style.position = 'static'
    restartGameBtn.style.marginRight = '7px'
    restartGameBtn.style.width = '13vh'
    restartGameBtn.style.height = '13vh'
    restartGameBtn.style.transition = '0s'
    repeatImg.style.height = '10vh'
    repeatImg.style.width = '10vh'


}

let btnStyleStandart = () => {
    exitGameBtn.style.position = 'absolute'
    exitGameBtn.style.margin = '0'
    exitGameBtn.style.top = '5%'
    exitGameBtn.style.left = '5%'
    exitGameBtn.style.width = '7.5vh'
    exitGameBtn.style.height = '7.5vh'
    logOutImg.style.width = '5.7vh'
    logOutImg.style.height = '5.7vh'

    restartGameBtn.style.top = '13%'
    restartGameBtn.style.left = '5%'
    restartGameBtn.style.position = 'absolute'
    restartGameBtn.style.width = '7.5vh'
    restartGameBtn.style.height = '7.5vh'
    repeatImg.style.height = '5.7vh'
    repeatImg.style.width = '5.7vh'
}

let titleNormal = () => {
    title.style.display = 'block'
    title.style.top = '12.5%'

    titleGameOver.style.display = 'none'
}

