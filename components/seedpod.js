class SeedPod {
  constructor(x, y, dir, angle) {
    this.pos = createVector(x, y)
    this.nSeeds = 5
    this.seeds = []
    this.length = 100
    this.width = this.length*1/3
    this.dir = dir
    this.angle = this.dir * angle
    this.scale = createVector(0.5, 0.3)


    let sx = 0
    let sy = 0
    let sep = 100
    for(let i = 0; i < this.nSeeds; i++) {
      sx = sx + sep * 1/(i+2) * this.dir
      sy = sy - sep *(0.5 - 1/(i+2))
      let pos = createVector(sx, sy)
      pos = p5.Vector.add(this.pos, pos)
      this.seeds.push(new Seed(pos.x, pos.y))
    }
  }

  update(pos, angle) {
    this.pos = pos
    this.angle = angle
    
    let sx = 0
    let sy = 0
    let sep = 100
    this.seeds.forEach((seed, i) => {
      sx = sx + sep * 1/(i+2) * this.dir
      sy = sy - sep *(0.5 - 1/(i+2))
      let pos = createVector(sx, sy)
      pos = p5.Vector.add(this.pos, pos)
      seed.update(pos)
    })
  }

  grow() {

    this.scale.x += (this.scale.x < 1.0) ? 0.001 : 0.0
    this.scale.y += (this.scale.y < 1.0) ? 0.001 : 0.0
    
  }

  show() {
    push()
    translate(this.pos.x, this.pos.y) 
    circle(0, 0, 40)
    // this.seeds.forEach((seed, i) => {
    //   translate(0, -i*10)
    //   stroke(30, 240, 10);
    //   strokeWeight(2);
    //   fill(50, 220, 20)
    //   ellipse(0, 0, seed.r*4, seed.r*8)
    // })

    pop()

    this.seeds.forEach((seed, i) => {
      seed.show()
    })
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