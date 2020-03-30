let bees=[]
let flowers=[]
let clouds=[]



function setup() {

  // create a canvas that fills the browser window and attach it to your HTML
  createCanvas(windowWidth, windowHeight).parent('p5')
  // the p5 variables "width" and "height" hold the dimensions of the canvas

  for (let i=0; i<150 ; i++){

    let random_bee= { x:random(0,width),
      y:random(0,height),
      width:17.5,
      height:9,
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
      width:25,
      height:37.5,
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
// simple grass

for ( let cloud of clouds) {
  noStroke()
    fill(234, 225, 240)

    circle(cloud.x,cloud.y,200)
    circle(cloud.x+.5,cloud.y+26,200)
    circle(cloud.x-178.5,cloud.y+30,200)
    circle(cloud.x-77.5,cloud.y+80,200)
    circle(cloud.x-60.5,cloud.y+93,200)
    circle(cloud.x-150,cloud.y+75,100)
    circle(cloud.x-146,cloud.y+108,125)
    circle(cloud.x-196,cloud.y+96,125)
    circle(cloud.x+88,cloud.y+31,175)

    cloud.x += cloud.vx + cos(.3)
    cloud.y += cloud.y * cloud.vy

          if (cloud.x>=width-cloud.x) {
            cloud.vx=-cloud.vx
          }

          if(cloud.x<=0) {
            cloud.vx=-cloud.vx
          }

          if(cloud.y>=height/8) {
            cloud.vy=-cloud.vy
          }

          if(cloud.y<=0) {
            cloud.vy=-cloud.vy
          }
//
// //clouds back and forth behind text
}

    for ( let bee of bees) {
      strokeWeight(.5)
      fill(bee.color)
      ellipse(bee.x,bee.y,bee.width,bee.height)
      fill(0,0,0)
      triangle(bee.x-7.5,bee.y-2,bee.x-8.5,bee.y+2,bee.x-10.5,bee.y-1)
      stroke(0,0,0)
      strokeWeight(1)
      line(bee.x-5,bee.y-3.5,bee.x-5,bee.y+3)
      line(bee.x-2.5,bee.y-4.5,bee.x-2.5,bee.y+3)
      line(bee.x+1,bee.y+3.5,bee.x+1,bee.y-5)
      line(bee.x+3.5,bee.y-5,bee.x+4,bee.y+3)
      line(bee.x+6.5,bee.y+1.5,bee.x+6,bee.y-4)
      strokeWeight(.1)
      line(bee.x+3.5,bee.y-2,bee.x+7,bee.y-6.5)
      line(bee.x+3.5,bee.y-2,bee.x+8,bee.y-6)
      circle(bee.x+8,bee.y-6,1)
      circle(bee.x+7,bee.y-6,1)


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
// bees just vibing
    }

    for ( let flower of flowers) {
      noStroke()
        fill(27, 69, 28)
      ellipse(flower.x-2,flower.y+165,5,80)

      stroke(184, 119, 170)
      strokeWeight(5)
      fill(252, 186, 3)
      circle(flower.x,flower.y,13)
      fill(217, 139, 108,150)
        circle(flower.x-25,flower.y,38);
        circle(flower.x+25,flower.y,38);
        circle(flower.x,flower.y-25,38);
        circle(flower.x,flower.y+25,38);
        circle(flower.x-17,flower.y-17,38);
        circle(flower.x+17,flower.y-17,38);
        circle(flower.x-17,flower.y+17,38);
        circle(flower.x+17,flower.y+17,38);

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
    // vibrating flowers



strokeWeight(20);
stroke(224, 187, 2)
fill(230, 179, 41)
circle(0,0,width/16,)
}
// a static sun





  // if the window is resized, resize the canvas to match
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
  }

  function mouseClicked(){
    print(int(mouseX), int(mouseY))
  }
