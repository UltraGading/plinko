const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300

function setup() {
createCanvas(480,800);
engine = Engine.create();
world = engine.world;
Engine.run(engine)
ground = new Ground(240,790,480,20)
for(var a = 0; a <= width; a = a + 80) {
divisions.push(new Division(a, height-divisionHeight/2, 10, divisionHeight))
}
for (var i = 35; i <= 480; i = i + 50) {
plinkos.push(new Plinko(i, 75));
}
for (var i = 10; i <= 480; i = i + 50) {
plinkos.push(new Plinko(i, 175));
}
for (var i = 35; i <= 480; i = i + 50) {
plinkos.push(new Plinko(i, 275));
}
for (var i = 10; i <= 480; i = i + 50) {
plinkos.push(new Plinko(i, 375));
}
for (var i = 35; i <= 480; i = i + 50) {
plinkos.push(new Plinko(i, 475));
}
}

function draw() {
background(0);
ground.display()
if (frameCount % 90 === 0) {
particles.push(new Particle(random(10, 470), 10, 10));
}
for(var a = 0; a < divisions.length; a++){
divisions[a].display()
}
for (var i = 0; i < plinkos.length; i++) {
plinkos[i].display();
}
for (var i = 0; i < particles.length; i++) {
particles[i].display();
}
drawSprites();
}