// 
const gen0 = new Generation(3)
let circles = []

let newSeasonButton
let isDropping = false

function setup() {
  createCanvas(2000, 800)
  angleMode(DEGREES)

  newSeasonButton = createButton('new season')
  newSeasonButton.mousePressed(() => {
    gen0.newSeason()
  })

  gen0.init()

}

function draw() {
  background(85,110,200)
  randomSeed(2)

  gen0.grow()
  circles.forEach(c => {
    fill(255, 0, 0)
    stroke(255, 0, 0)
    circle(c.x, c.y, 20)


  })
  
}


function mousePressed() {
  for(let i = 0; i < gen0.plants.length; i++) {
    let p = gen0.plants[i]
    let leftLimit = p.pos.x - 200
    let rightLimit = p.pos.x + 200
    if(mouseX > leftLimit && mouseX < rightLimit && 
      mouseY > 10 && mouseY < height-10) 
    {
      // as soon as plant is selected
      let currPlant = p.select()
      gen0.selectedPlants.push(currPlant)      
    }
  }
}