var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var snakeSize = 10;
var width = 0;
var height = 0;
var score = 0;
var snake, food;


var drawModule = (function(){
    var bodySnake = function(x,y){
      //Single square
      ctx.fillStyle = 'green';
      ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
      //border of the square
      ctx.strokeStyle = 'darkgreen';
      ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

    var pizza = function (x, y){
      //border of the pizza
      ctx.fillStyle = 'yellow';
      ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
      //single square pizza
      ctx.fillStyle = 'red';
      ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    }

    var scoreText = function(){
      // the actual score
      var score_text = "Score: " + score;
      ctx.fillStyle = 'blue';
      ctx.fillText(score_text, 145. height-5);
    }
})
