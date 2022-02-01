// 
const nPlants = 3

let plants = []
let selectedPlants = []

let dropSeedsButton
let isDropping = false

function setup() {
  createCanvas(2000, 800)
  angleMode(DEGREES)

  dropSeedsButton = createButton("DROP SEEDS")
  dropSeedsButton.mousePressed(dropSeeds)
  
  for(let i = 0; i < nPlants; i++) {
    let xpos = (width*(i+1)/nPlants - width/6) + random(-20, 20)
    let newPlant = new Plant(xpos, height)
    plants.push(newPlant) 
  }
}

function draw() {
  background(85,110,200)
  randomSeed(2)

  for(let i = 0; i < plants.length; i++) {
    let p = plants[i]
    if(p.growing == true) {
      p.grow()
    }
    if(p.selected == true) {
      p.dropSeeds()
    }
    p.show()
  }
  
}

function dropSeeds() {

  for(let i = 0; i < selectedPlants.length; i++) {
    let p = selectedPlants[i]
    p.dropSeeds()
  }
}

function mousePressed() {
  for(let i = 0; i < plants.length; i++) {
    let p = plants[i]
    let leftLimit = p.pos.x - 200
    let rightLimit = p.pos.x + 200
    if(mouseX > leftLimit && mouseX < rightLimit && 
      mouseY > 10 && mouseY < height-10) 
    {
      // as soon as plant is selected
      let currPlant = p.select()
      selectedPlants.push(currPlant)      
    }
  }
}