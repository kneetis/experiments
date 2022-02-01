class SeedPod {
  constructor(x, y, angle, dir) {
    this.pos = createVector(x, y)
    this.nSeeds = 5
    this.seeds = []
    for(let i = 0; i < this.nSeeds; i++) {
      this.seeds.push(new Seed(0, -i*30))
    }
    this.length = 100
    this.width = this.length*1/3
    this.dir = dir
    this.angle = this.dir * this.angle
    this.scale = createVector(0.5, 0.3)
  }

  grow() {

    this.scale.x += (this.scale.x < 1.0) ? 0.001 : 0.0
    this.scale.y += (this.scale.y < 1.0) ? 0.001 : 0.0
    this.seeds.forEach((seed, index) => {
      // seed.pos = createVector(
      //   this.pos.x, this.pos.y
      // )
      // let step = 5
      // let dx  = cos((90-this.angle)) * this.dir*step*index
      // let dy = sin((90-this.angle)) * -1*step*index - step*step*index
      // seed.pos = createVector(
      //   this.pos.x + dx, 
      //   this.pos.y + dy
      // )
    })
  }

  show() {
    // this.drawBud()
    push()
    translate(this.pos.x, this.pos.y)
    rotate(this.angle)
    scale(this.scale.x, this.scale.y)
    this.seeds.forEach(seed => {
      push()
      translate(seed.pos.x, seed.pos.y)
      stroke(30, 240, 10);
      strokeWeight(2);
      fill(50, 220, 20)
      ellipse(0, 0, seed.r*4, seed.r*8)
      pop()
      seed.show()
    })
    pop()
  }

  drawBud() {
    push()
    
    translate(this.pos.x, this.pos.y)
    rotate(this.angle)
    scale(1, 1)
    // circle(0, 0, 10)
    // circle(0, -this.length, 10)
    stroke(30, 240, 10);
    strokeWeight(2);
    fill(50, 220, 20)
    noFill()
    bezier(
      0, 0, 
      30, -15,
      30, -15,
      0, -this.length
    )
    bezier(
      0, 0, 
      -30, -15,
      -30, -15,
      0, -this.length
    )
    pop()
  }

}