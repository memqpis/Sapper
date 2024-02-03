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


let cels = 49
let numRows = 7
let numColumns = 7
let divSizeNum = 8
let numBomb = 9
let flagSize = 8
let bombSize = 7.5

let formatChanges = () => {

    title.style.top = '10%'
 playBtn.style.display = 'none'
 playZone.style.display = 'flex'
 playZone.style.opacity = 1
 divSizeBorder.style.display = 'none'
 playZone.classList.add('appearance')

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

let flagSiz = (inp, size) => {
   inp.innerHTML = ` <img id="redFlag" class="redFlag" src="images/redFlag.png" alt="" style="display: block; width: ${size}vh; height: ${size}vh;"></img> `
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
            event.preventDefault();
            flagSiz(newDivs, flagSize)
        }
    }

}

}

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
    }



}
}



const playGame = () => {
    inputData()
    formatChanges()
    creatingPlayArea()  
    bombIndex()
 }

playBtn.onclick = playGame





