const vidOne = document.getElementById("vid1")
const vidTwo = document.getElementById("vid2")
const vidThree = document.getElementById("vid3")

const boxOne = document.querySelector('.box1')
const boxTwo = document.querySelector('.box2')
const boxFive = document.querySelector('.box5')

vidTwo.style.display = 'none'
vidThree.style.display = 'none'
boxOne.style.display = 'block'
boxTwo.style.display = 'none'
boxFive.style.display = 'none'

vidOne.addEventListener('play', function(){
    vidOne.style.display = 'block'
    vidTwo.style.display = 'none'
    vidThree.style.display = 'none'
    boxTwo.style.display = 'none'
    boxFive.style.display = 'none'

});
vidOne.addEventListener('ended', function(){
    vidOne.style.display = 'none'
    vidTwo.style.display = 'block'
    vidThree.style.display = 'none'
    boxTwo.style.display = 'block'
    boxOne.style.display = 'none'
    boxFive.style.display = 'none'
});
vidTwo.addEventListener('ended', function(){
    vidOne.style.display = 'none'
    vidTwo.style.display = 'none'
    vidThree.style.display = 'block'
    boxTwo.style.display = 'none'
    boxOne.style.display = 'none'
    boxFive.style.display = 'block'
});
