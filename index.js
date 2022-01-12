
function setup() {
    createCanvas(innerWidth, innerHeight);
    let o;
    o = new Empty(100, 100, 100, 50);
    o.ENGINE_INFO = scene.make_object_info(o);
    o.ENGINE_INFO.id = "Obj"
    o.ENGINE_INFO.components.add(new engine.comps.physics({friction: 0.9, gravity: 0.05}));
    o.ENGINE_INFO.components.add(new engine.comps.collider({}));
    o.collider.on_collision = function(obj) {
        console.log(obj)
    }
    scene.add(o);
    scene.add(new Empty(10, 10, 10, height-10));
    scene.add(new Empty(10, 10, width-10, 10));
    scene.add(new Empty(width-10, 10, 10, height-10));
    scene.add(new Empty(10, height-50, width-10, 10));
}

function draw() {
    background(20, 20, 20, 255);
    // scene.data[scene.getFromId("Mouse")].x = mouseX - 50;
    // scene.data[scene.getFromId("Mouse")].y = mouseY - 50;
    engine.tick();
}

function mouseClicked() {
    scene.click();
}