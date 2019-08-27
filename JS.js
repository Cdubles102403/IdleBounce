$(document).ready(function () {
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//change score to get more points at start (for testing)
var score = 0;
var scoreMulti = 1;
var ballnum = 1;
var totalpoints = 0;
var ballcolor = $("select[name='color']").val();
var speed = 20;

var ball1 = {
  x: 60,
  y: 200,
  r: 10,
  vx: 5,
  vy: 5,
  c: 0
};

var ball2 = {
  x: 80,
  y: 100,
  r: 10,
  vx: 5,
  vy: 5,
  c: 0
};

var ball3 = {
  x: 280,
  y: 250,
  r: 10,
  vx: 5,
  vy: 5,
  c: 0
};

var ball4 = {
  x: 250,
  y: 200,
  r: 10,
  vx: 5,
  vy: 5,
  c: 0
};
var ball5 = {
  x: 250,
  y: 200,
  r: 10,
  vx: 5,
  vy: 5,
  c: 0
};
//draw in balls
function draw() {
  var colorback = $("input#colorBack").val();
  $("canvas#myCanvas").css("background-color", colorback);
  ballcolor = $("select[name='color']").val();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //ball color
  ctx.fillStyle = ballcolor;

  //if else statments for upgrade ball count
  if (ballnum == 1) {
    drawBall(ball1);
  } else if (ballnum == 2) {
    drawBall(ball1);
    drawBall(ball2);
    ballCollision(ball1, ball2);
  } else if (ballnum == 3) {
    drawBall(ball1);
    drawBall(ball2);
    drawBall(ball3);
    ballCollision(ball1, ball2);
    ballCollision(ball1, ball3);
    ballCollision(ball2, ball3);
  } else if (ballnum == 4) {
    drawBall(ball4);
    drawBall(ball1);
    drawBall(ball2);
    drawBall(ball3);
    ballCollision(ball1, ball2);
    ballCollision(ball1, ball3);
    ballCollision(ball2, ball3);
    ballCollision(ball1, ball4);
    ballCollision(ball2, ball4);
    ballCollision(ball3, ball4);
  } else if (ballnum >= 5) {
    drawBall(ball4);
    drawBall(ball1);
    drawBall(ball2);
    drawBall(ball3);
    drawBall(ball5);
    ballCollision(ball1, ball2);
    ballCollision(ball1, ball3);
    ballCollision(ball2, ball3);
    ballCollision(ball1, ball4);
    ballCollision(ball2, ball4);
    ballCollision(ball3, ball4);
    ballcollision(ball1, ball5);
    ballcollision(ball2, ball5);
    ballcollision(ball3, ball5);
    ballcollision(ball4, ball5);
  }
}

function ballCollision(b1, b2) {
  if (
    Math.sqrt(Math.pow(b1.x - b2.x, 2) + Math.pow(b1.y - b2.y, 2)) <=
    b1.r + b2.r
  ) {
    b1.vx = -b1.vx;
    b2.vx = -b2.vx;
    b2.vy = -b2.vy;
    b1.vy = -b1.vy;
  }
}

function drawBall(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
  ball.x += ball.vx;
  ball.y += ball.vy;
  //id the ball hits either side
  if (ball.x - ball.r <= 0 || ball.x + ball.r >= canvas.width) {
    ball.vx *= -1;
    score = score + scoreMulti;
    console.log(score);
  }
  // if the ball hits the top or bottom
  if (ball.y - ball.r < 0 || ball.y + ball.r >= canvas.height) {
    ball.vy *= -1;
    score = score + scoreMulti;
    console.log(score);
  }
}

setInterval(draw, speed);

//draw score
function Score() {
  setInterval(function() {
    $("p#score").text("score: " + score);
  }, 1);
}
Score();

//button controls for ball count
var ballCountPoints = 200;
$("button#ballcount").click(function() {
  if (ballCountPoints <= score) {
    if (ballnum < 5) {
      ballnum += 1;
      score = score - ballCountPoints;
      ballCountPoints += 250;
      $("button#ballcount").text("upgrade ball count " + ballCountPoints);
    }
  }
});
//ball power controls
var powerpoints = 50;
$("button#ballpower").click(function() {
  if (score >= powerpoints) {
    scoreMulti += 1;
    score = score - powerpoints;
    powerpoints = powerpoints + 50;
    $("button#ballpower").text("upgrade ball power " + powerpoints);
  }
});

//full reset button
$("button#reset").click(function() {
  score = 0;
  scoreMulti = 1;
  ballnum = 1;
  ball1.r = 10;
  ball2.r = 10;
  ball5.r = 10;
  ball3.r = 10;
  ball4.r = 10;
  ballsizepoints = 50;
  $("button#ballsize").text("upgrade ball size 50");
  powerpoints = 50;
  $("button#ballpower").text("upgrade ball power 50");
  ballCountPoints = 200;
  $("button#ballcount").text("upgrade ball count 200");

  ball1 = {
    x: 60,
    y: 200,
    r: 10,
    vx: 5,
    vy: 5,
    c: 0
  };

  ball2 = {
    x: 80,
    y: 100,
    r: 10,
    vx: 5,
    vy: 5,
    c: 0
  };

  ball3 = {
    x: 280,
    y: 250,
    r: 10,
    vx: 5,
    vy: 5,
    c: 0
  };

  ball4 = {
    x: 250,
    y: 200,
    r: 10,
    vx: 5,
    vy: 5,
    c: 0
  };

  ball5 = {
    x: 250,
    y: 200,
    r: 10,
    vx: 5,
    vy: 5,
    c: 0
  };
});
//ball size controls
var ballsizepoints = 50;
$("button#ballsize").click(function() {
  if (score >= ballsizepoints) {
    ball1.r = ball1.r + 1;
    ball2.r = ball2.r + 1;
    ball3.r = ball3.r + 1;
    ball4.r = ball4.r + 1;
    ball5.r = ball5.r + 1;
    score = score - ballsizepoints;
    ballsizepoints += 150;
    $("button#ballsize").text("upgrade ball size " + ballsizepoints);
  }
});
//ball reset position button control
$("button#ballreset").click(function() {
  ball1 = {
    x: 60,
    y: 200,
    r: ball1.r,
    vx: 5,
    vy: 5
  };

  ball2 = {
    x: 80,
    y: 100,
    r: ball2.r,
    vx: 5,
    vy: 5
  };

  ball3 = {
    x: 280,
    y: 250,
    r: ball3.r,
    vx: 5,
    vy: 5
  };

  ball4 = {
    x: 250,
    y: 200,
    r: ball4.r,
    vx: 5,
    vy: 5
  };

  ball5 = {
    x: 250,
    y: 120,
    r: ball5.r,
    vx: 5,
    vy: 5
  };
});
}
