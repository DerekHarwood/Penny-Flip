let headsCount = 0;
let tailsCount = 0;

if(localStorage.getItem('headsCount') !== null){
    headsCount = parseInt(localStorage.getItem('headsCount'));
}

if(localStorage.getItem('tailsCount') !== null){
    tailsCount = parseInt(localStorage.getItem('tailsCount'));
}

scoreTable() 

document.querySelector('#flip').addEventListener('click',function(){
    
    let isHeads = Math.random() < 0.5;

    if (isHeads) {
        document.querySelector('img').src = './assets/images/penny-heads.jpg';
        document.querySelector('#message-header').textContent = 'You Flipped Heads!'
        headsCount++
    } else {
        document.querySelector('img').src = './assets/images/penny-tails.jpg';
        document.querySelector('#message-header').textContent = 'You Flipped Tails!'
        tailsCount++
    }


    localStorage.setItem('headsCount', headsCount);
    localStorage.setItem('tailsCount', tailsCount);

    scoreTable() 
});


function scoreTable() {
 
    let sum = headsCount + tailsCount;
    let percentageHeads = 0;
    let percentageTails = 0;

    if (sum > 0) {
        percentageHeads = Math.round(headsCount/sum * 100);
        percentageTails = Math.round(tailsCount/sum * 100);
    } 
    document.querySelector('.heads-counter').textContent = headsCount;
    document.querySelector('.tails-counter').textContent = tailsCount;
    document.querySelector('.heads-percentage').textContent = percentageHeads + '%';
    document.querySelector('.tails-percentage').textContent = percentageTails + '%';
}

document.querySelector('#clear').addEventListener('click',function(){
    document.querySelector('#message-header').textContent = 'Lets Get Rolling!';
    document.querySelector('.heads-counter').textContent = 0;
    document.querySelector('.tails-counter').textContent = 0;
    document.querySelector('.heads-percentage').textContent = 0 + '%';
    document.querySelector('.tails-percentage').textContent = 0 + '%';
    document.querySelector('img').src = './assets/images/penny-heads.jpg';
    if (localStorageEnabled) localStorage.clear(); 
})