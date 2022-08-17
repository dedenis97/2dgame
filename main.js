
// handle user input
var controller = new Controller()
// handle window resize
var display = new Display(document.querySelector('canvas'))
// hold game logic
var game = new Game()

var engine = new Engine()

var player = new Player()


function init() {
    game.generateRoom()

    engine.addElement(player)
    engine.addElement(new DummyTarget())


    document.addEventListener("keydown", function (e) { player.move(e.key) })
    document.addEventListener("keyup", function (e) { player.stopMove(e.key) })


    animate()
}


function animate() {
    display.clearCanvas()

    for (let i = 0; i < engine.elements.length; i++) {
        display.draw(engine.elements[i])
    }

    engine.start()
    requestAnimationFrame(animate)
}