// Opdracht 3C: Circles for the win

function setup () {
  createCanvas (400,400)
  background (240)
}

function draw () {
    strokeWeight (1)
    stroke (0)
    line (70, 70, 275, 300)

    fill (200,150,50)
    noStroke ()
    ellipse (115,115, 115 ,115)

    fill (255)
    noStroke ()
    ellipse (70,70, 90 ,90)
    
    stroke (0, 125, 0)
    strokeWeight (5)
    point (70,70)

    fill (200)
    noStroke ()
    ellipse (275,300, 50 ,50)
    
    stroke (255, 0, 0)
    strokeWeight (5)
    point (275,300)
}