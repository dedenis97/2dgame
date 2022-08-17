class Game {

    currentRoom = null
    rooms = []

    constructor() {
    }

    addRoom(room){
        this.rooms.push(room)
    }

    setCurrentRoom(room){
        this.currentRoom = room
    }

    
}