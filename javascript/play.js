// function play(){
// const getSection =document.getElementById('home')
// getSection.classList.add('hidden')

//     const getSection2 = document.getElementById('ground')
//     getSection2.classList.remove('hidden')

// }


function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')

}

function showElementById(elementId){
    const element = document.getElementById(elementId)
     element.classList.remove('hidden')

}


function play(){
    hideElementById('home');
    showElementById('ground')
    continueGame();
}

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // set alphabet in display
    const currentAlphabet = document.getElementById('cur-alpha');
    currentAlphabet.innerText =alphabet;

    // set background color
    backGroundById(alphabet);
}

// background clour
 function backGroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

 }

function getARandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
    // console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}
