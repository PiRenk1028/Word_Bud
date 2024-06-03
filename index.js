const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 750;

var file = [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]] //replace with excel fillRect

function readFile(word = Math.floor(Math.random()*file.length)){
  console.log(file[word][0])
}

function drawScreen(){
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width,canvas.height);
}

function loop(){
  window.requestAnimationFrame(loop);
  drawScreen();
}
loop()
