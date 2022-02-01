class Seed {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.r = 5
  }

  show() {
    push()
    translate(this.pos.x, this.pos.y)
    stroke(210, 140, 10)
    strokeWeight(2)
    fill(250, 220, 20)
    circle(0, 0, this.r*2)
    pop()
  }

  drop() {
    this.pos.y += (this.pos.y < 0) ? 1 : 0
  }
}