let bees=[]
let flowers=[]

var n = 12,
      r = 200,
      l = 0,
      k = 0,
      m = 0,
      t=0;

function setup() {

  // create a canvas that fills the browser window and attach it to your HTML
  createCanvas(windowWidth, windowHeight).parent('p5')
  // the p5 variables "width" and "height" hold the dimensions of the canvas

  for (let i=0; i<150 ; i++){

    let random_bee= { x:random(0,width),
      y:random(0,height),
      width:35,
      height:18,
      vx:random(20,70) ,
      vy:random(10,60),
      color:[random(230,234),random(220,225),random(30,35)],
     }

      bees.push(random_bee)
    }

    for (let i=0 ;i<50 ; i++){
      let random_flower={
      x:random(0,width),
      y:random(height/2,height),
      width:50,
      height:75,
      vx:1,
      vy:5}
flowers.push(random_flower)
    }

  }

  function draw() {

      angleMode(DEGREES);

    background(89, 158, 120,)

noStroke()
fill(132, 206, 224)
    square(0,0,width,height/2)


    for ( let bee of bees) {
      strokeWeight(1)
      fill(bee.color)
      ellipse(bee.x,bee.y,bee.width,bee.height)
      fill(0,0,0)
      triangle(bee.x-15,bee.y-4,bee.x-17,bee.y+4,bee.x-21,bee.y-2)
      stroke(0,0,0)
      strokeWeight(2)
      line(bee.x-10,bee.y-7,bee.x-10,bee.y+6)
      line(bee.x-5,bee.y-9,bee.x-5,bee.y+6)
      line(bee.x+2,bee.y+7,bee.x+2,bee.y-10)
      line(bee.x+7,bee.y-10,bee.x+8,bee.y+6)
      line(bee.x+13,bee.y+3,bee.x+12,bee.y-8)
      strokeWeight(.1)
      line(bee.x+14,bee.y-4,bee.x+14,bee.y-13)
      line(bee.x+15,bee.y-4,bee.x+17,bee.y-12)
      circle(bee.x+17,bee.y-12,2)
      circle(bee.x+14,bee.y-13,2)


bee.x += bee.vx * cos(.5)
bee.y += bee.vy * sin(6)



      if (bee.x>= width) {
        bee.vx=-bee.vx
      }

      if(bee.x<=0) {
        bee.vx=-bee.vx
      }

      if(bee.y>=height) {
        bee.vy=-bee.vy
      }

      if(bee.y<=0) {
        bee.vy=-bee.vy
      }

    }

    for ( let flower of flowers) {
      noStroke()
        fill(27, 69, 28)
      ellipse(flower.x-2,flower.y+165,5,160)

      stroke(184, 119, 170)
      strokeWeight(5)
      fill(252, 186, 3)
      circle(flower.x,flower.y,25)
      fill(217, 139, 108,150)
        circle(flower.x-50,flower.y,75);
        circle(flower.x+50,flower.y,75);
        circle(flower.x,flower.y-50,75);
        circle(flower.x,flower.y+50,75);
        circle(flower.x-35,flower.y-35,75);
        circle(flower.x+35,flower.y-35,75);
        circle(flower.x-35,flower.y+35,75);
        circle(flower.x+35,flower.y+35,75);

        flower.x += flower.vx
        flower.y += flower.vy + sin(1)



              if (flower.x>=flower.x) {
                flower.vx=-flower.vx
              }

              if(flower.x<=0) {
                flower.vx=-flower.vx
              }

              if(flower.y<=height/3) {
                flower.vy=-flower.vy
              }

              if(flower.y>=0) {
                flower.vy=-flower.vy
              }

strokeWeight(20);
stroke(224, 187, 2)
fill(230, 179, 41)
circle(0,0,width/6,height/8)
}

  // if the window is resized, resize the canvas to match
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
  }

  function mouseClicked(){
    print(int(mouseX), int(mouseY))
  }

// function bee() {
//   ellipse(300,200,35,18)
// }
}
