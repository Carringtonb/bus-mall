'use strict'

var imageParent = document.getElementById('images');
var leftImage = document.getElementById('imageLeft');
var rightImage = document.getElementById('imageRight');
var midImage = document.getElementById('imageMid');

var leftIndex = null;
var rightIndex = null;
var midIndex = null;

var picVotes = 0;
var totalRounds = 10;

function Picture(name, image){
    this.name = name;
    this.image = image;
    this.clicked = 0;
    this.views = 0;

    Picture.allImages.push(this);
};

function randomImage(){
    var randomNumber = Math.floor(Math.random() * Picture.allImages.length)
  return randomNumber;
};

function renderImage(){
    do {
        leftIndex = randomImage();
        midIndex = randomImage();
        rightIndex = randomImage();
    } while (leftIndex === rightIndex
            || rightIndex === midIndex
            || midIndex === leftIndex)

        Picture.allImages[leftIndex].views++;
        Picture.allImages[rightIndex].views++;
        Picture.allImages[midIndex].views++;



    leftImage.src = Picture.allImages[leftIndex].image;
    rightImage.src = Picture.allImages[rightIndex].image;
    midImage.src = Picture.allImages[midIndex].image;
};
Picture.allImages = [];

var handleClickOnPicture = function(event){
    var picClicked = event.target.id;
    if( picClicked === 'imageLeft' || picClicked === 'imageRight' || picClicked === 'imageMid'){
 picVotes++;
    if(picClicked === 'imageLeft'){
        Picture.allImages[leftIndex].clicked++
    } else if(picClicked === 'imageRight'){
        Picture.allImages[rightIndex].clicked++
    } else if(picClicked === 'imageMid'){
        Picture.allImages[midIndex].clicked++
    } else{
        alert('You did not select an image');
    }
    }

    if( picVotes === totalRounds){
        imageParent.removeEventListener('click', handleClickOnPicture);
    alert('thank you for your votes');

    for(var i = 0; i < Picture.allImages.length; i++){
      var picture = Picture.allImages[i];
      console.log(`${picture.name} received ${picture.clicked} votes with ${picture.views} views.`);
    }
renderChart();
  }else{
    renderImage();
  }
};


new Picture('bag', '/img/bag.jpg');
new Picture('banana', '/img/banana.jpg');
new Picture('bathroom', '/img/bathroom.jpg');
new Picture('boots', '/img/boots.jpg');
new Picture('breakfast', '/img/breakfast.jpg');
new Picture('bubblegum', '/img/bubblegum.jpg');
new Picture('chair', '/img/chair.jpg');
new Picture('cthulhu', '/img/cthulhu.jpg');
new Picture('dog-duck', '/img/dog-duck.jpg');
new Picture('dragon', '/img/dragon.jpg');
new Picture('pen', '/img/pen.jpg');
new Picture('pet-sweep', '/img/pet-sweep.jpg');
new Picture('scissors', '/img/scissors.jpg');
new Picture('shark', '/img/shark.jpg');
new Picture('sweep', '/img/sweep.png');
new Picture('tauntaun', 'img/tauntaun.jpg');
new Picture('unicorn', 'img/unicorn.jpg');
new Picture('usb', 'img/usb.gif');
new Picture('water-can', '/img/water-can.jpg');
new Picture('wine-glass', '/img/wine-glass.jpg');

renderImage();

imageParent.addEventListener('click', handleClickOnPicture)

function renderChart(){
    for(var i = 0; i < Picture.allImages.length; i++){
      var picture = Picture.allImages[i];
    //   console.log(`${picture.name} received ${picture.clicked} votes with ${picture.views} views.`);
    var tableData = document.getElementById('dataList');
    var dataArray = document.createElement('p')

    dataArray.textContent = (`${picture.name} received ${picture.clicked} votes with ${picture.views} views.`)
    tableData.appendChild(dataArray);
    }

};




var button = document.getElementById('draw');
button.addEventListener('click', renderChart);
function renderChart(){
    var labelData =[];
    var clickData = [];
    for(var i = 0; i < allImages.length; i++) {
        labelData.push(allImages[i].name);
        clickData.push(allImages[i].clicks);
}
    var ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelData,
        datasets:[{
            label: '# of clicks',
            data: clickData,
            backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }, {
        label: '# of Views',
        data: [0, 3, 5, 2, 6, 3, 7, 3, 2],
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

renderImage();
=======
// function renderChart(){
//     var labelData =[];
//     var clickData = [];
//     for(var i = 0; i < allImages.length; i++) {
//         labelData.push(allImages[i].name);
//         clickData.push(allImages[i].clicks);
//     }
//     var ctx = document.getElementById('myChart').getContext('2d');
// };

// new chartData(ctx, {
//     type: 'bar',
//     datasets:[{
//         label: '# of clicks',
//         data: clickData,
//         background-color: [];,
//     }]
// })
