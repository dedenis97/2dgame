
// handle user input
var controller = new Controller()
// handle window resize
var display = new Display(document.querySelector('canvas'))
// hold game logic
var game = new Game()

var engine = new Engine()

var player = new Player()


function init() {

    game.addRoom(new Room('training'))
    game.setCurrentRoom(game.rooms[0])
    game.addRoomCollisionElements()

    engine.addElement(player)

    let dummty1 = new DummyTarget()
    dummty1.setPosition(416, 128)

    let dummty2 = new DummyTarget()
    dummty2.setPosition(512, 128)

    engine.addElements([dummty1, dummty2])



    document.addEventListener("keydown", function (e) { player.move(e.key) })
    document.addEventListener("keyup", function (e) { player.stopMove(e.key) })
    document.addEventListener('click', function (e) { getXY32(e) })

    animate()
}


function animate() {
    display.clearCanvas()

    display.drawRoomBackground(game.currentRoom.roomLink)

    for (let i = 0; i < engine.elements.length; i++) {
        display.draw(engine.elements[i])
    }

    engine.start()
    requestAnimationFrame(animate)
}

let lastWord = "end"

function getXY32(e) {
    let x = Math.round(e.offsetX / 32) * 32
    let y = Math.round(e.offsetY / 32) * 32

    let word = lastWord == "end" ? "start" : "end"

    lastWord = word
    console.log(word+": {x:"+x+",y:"+y+"}")
}