class RoomMapManager {

    config = ROOM_MAP_CONFIG
    constructor() {

    }

    getTextureDataById(id) {
        let data = null

        data = this.config[id]

        if (data == null || data == undefined) {
            console.error("No texture for id:", id)
            return
        }

        return data

    }
}