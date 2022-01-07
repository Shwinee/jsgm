function setup() {
    createCanvas(innerWidth, innerHeight);
    scene.add(new Empty(100, 100, 100, 50));
}
function draw() {
    background(100);
    scene.render();
}
function mouseClicked() {
    scene.click();
}