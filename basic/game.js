class Game {

    currentRoom = null
    rooms = []

    constructor() {
    }

    addRoom(room) {
        this.rooms.push(room)
    }

    setCurrentRoom(room) {
        this.currentRoom = room
    }

    getRoomCollisions() {
        return this.currentRoom.roomCollissions
    }

    addRoomCollisionElements() {
        for (let i = 0; i < this.currentRoom.roomCollissions.length; i++) {

            let collision = this.currentRoom.roomCollissions[i]
            let e = new BaseElement()

            e.setPosition(collision.start.x, collision.start.y)
            e.setSize(collision.end.x - collision.start.x, collision.end.y - collision.start.y)

            e.addTag('room_collision_element')
            e.addTag('block')

            engine.addElement(e)

        }
    }



}