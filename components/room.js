class Room {

    cellSize = 32

    cellsXNumber = 32
    cellsYNumber = 20

    roomName = null
    roomLink = null
    roomCollissions = []

    constructor(roomName) {
        this.roomLink = ROOM_CONFIG[roomName].link
        this.roomCollissions = ROOM_CONFIG[roomName].collisions
    }
}
