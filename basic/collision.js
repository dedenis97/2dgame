var Collisions = {

    checkCollisionWithTag(_this, tag) {
        let list = engine.elements.filter(function (e) {
            return e.hasTag(tag)
        })

        return this.checkCollision(_this, list)
    },

    checkCollisionWithId(_this, id) {
        let item = engine.elements.find(function (e) {
            return e.id == id
        })

        return this.checkCollision(_this, [item])
    },

    checkCollision(_this, listOfObject) {

        for (let i = 0; i < listOfObject.length; i++) {
            let target = listOfObject[i]

            if (
                target.position.x < _this.position.x + _this.size.width&&
                target.position.x + target.size.width> _this.position.x &&
                target.position.y < _this.position.y + _this.size.height &&
                target.position.y + target.size.height > _this.position.y
            ) {
                return {
                    status: true,
                    colisionWith: target
                }
            }
        }

        return {
            status: false,
            colisionWith: null
        }
    },

    chechOutOfEdges(_this){

    }


}