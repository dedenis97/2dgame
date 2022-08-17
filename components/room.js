
class Room {

    cellSize = 32

    cellsXNumber = 32
    cellsYNumber = 20

    ySpaceForWall = 0
    roomTextureManager = null

    constructor() {
        this.roomMapManager = new RoomMapManager()
    }

    generate() {

        let mapArrayIndex = 0

        for (let x = 0; x < this.cellsXNumber * this.cellSize; x += this.cellSize) {
            for (let y = this.cellSize * this.ySpaceForWall; y < this.cellsYNumber * this.cellSize; y += this.cellSize) {


                let idTexture = ROOM_CONFIG.FIRST_ROOM[mapArrayIndex]

                let textureData = this.roomMapManager.getTextureDataById(idTexture)

                let element = new GameElement()

                element.setStaticSprite(textureData.start, textureData.end, textureData.link)
                
                element.setPosition(x, y)
                element.setSize(this.cellSize, this.cellSize)


                engine.addElement(element)

                mapArrayIndex++;
            }
        }
    }


}
