class Generation {
  constructor(nPlants = 3) {
    this.nPlants = nPlants
    this.plants = []
    this.selectedPlants = []
    
  }

  init() {
    for(let i = 0; i < this.nPlants; i++) {
      let xpos = (width*(i+1)/this.nPlants - width/6) + random(-20, 20)
      let newPlant = new Plant(xpos, height)
      this.plants.push(newPlant) 
    }
  }

  grow() {
    for(let i = 0; i < this.plants.length; i++) {
      let p = this.plants[i]
      if(p.growing == true) {
        p.grow()
      }
      if(p.selected == true) {
        p.dropSeeds()
      }
      p.show()
    }
  }
  

  newSeason() {
    let droppedSeeds = []
    this.plants.forEach(plant => {
      if (plant.selected == true)
      plant.stems.forEach(stem => {
        stem.seedpod.seeds.forEach(seed => droppedSeeds.push(seed))
      })
    })

    // make new season
    this.newSeasonPlants = []
    for(let i = 0; i < this.nPlants; i++) {
      let xpos = (width*(i+1)/this.nPlants - width/6) + random(-20, 20)
      let newPlant = new Plant(xpos, height)
      this.newSeasonPlants.push(newPlant) 
    }

    droppedSeeds.sort((a, b) => {
      let dist1 = Math.abs(a.pos.x - this.newSeasonPlants[0].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[0].pos.x) 
      // let dist2 = Math.abs(a.pos.x - this.newSeasonPlants[1].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[1].pos.x) 
      // let dist3 = Math.abs(a.pos.x - this.newSeasonPlants[2].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[2].pos.x) 

      return dist1
    })

    circles = []
    let seed1 = droppedSeeds[0]
    console.log(seed1)
    circles.push(seed1.pos)

    droppedSeeds.sort((a, b) => {
      // let dist1 = Math.abs(a.pos.x - this.newSeasonPlants[0].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[0].pos.x) 
      let dist2 = Math.abs(a.pos.x - this.newSeasonPlants[1].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[1].pos.x) 
      // let dist3 = Math.abs(a.pos.x - this.newSeasonPlants[2].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[2].pos.x) 

      return dist2
    })

    let seed2 = droppedSeeds[0]
    console.log(seed2)
    circles.push(seed2.pos)

    droppedSeeds.sort((a, b) => {
      // let dist1 = Math.abs(a.pos.x - this.newSeasonPlants[0].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[0].pos.x) 
      // let dist2 = Math.abs(a.pos.x - this.newSeasonPlants[1].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[1].pos.x) 
      let dist3 = Math.abs(a.pos.x - this.newSeasonPlants[2].pos.x) - Math.abs(b.pos.x - this.newSeasonPlants[2].pos.x) 

      return dist3
    })

    let seed3 = droppedSeeds[0]
    console.log(seed3)
    circles.push(seed3.pos)


    this.newSeasonPlants[0].pos = seed1.pos
    this.newSeasonPlants[1].pos = seed2.pos
    this.newSeasonPlants[2].pos = seed3.pos

    this.plants = this.newSeasonPlants

    
  }


}