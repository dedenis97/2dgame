
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



    engine.addElement(player)

    let dummty1 = new DummyTarget()
    dummty1.setPosition(300, 50)

    let dummty2 = new DummyTarget()
    dummty2.setPosition(500, 50)
    
    engine.addElements([dummty1, dummty2])

    

    document.addEventListener("keydown", function (e) { player.move(e.key) })
    document.addEventListener("keyup", function (e) { player.stopMove(e.key) })


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