class Player extends PhysicElement {

    keys = {
        "ArrowUp": false,
        "ArrowDown": false,
        "ArrowLeft": false,
        "ArrowRight": false,
    }




    constructor() {

        super()

        this.speed = 2.5
        this.setSize(40, 40)

        this.sprite = {

            "current": {
                start: { x: 7, y: 13 },
                end: { x: 102, y: 130 }
            },

            "idle": null,
            "jump": null,
            "run": {
                "down": {
                    start: { x: 7, y: 13 },
                    end: { x: 102, y: 130 }
                },
                "up": {
                    start: { x: 15, y: 285 },
                    end: { x: 105, y: 390 }
                },
                "left": {
                    start: { x: 19, y: 149 },
                    end: { x: 105, y: 261 }
                },
                "right": {
                    start: { x: 14, y: 409 },
                    end: { x: 100, y: 520 }
                }
            },

            "src": "./assets/player_sprite.png"
        }
    }


    _update() {
        // check future collision adding vector to position

        this.checkCollisionProximity("mob")


        if (this.keys.ArrowUp && !this.blockMovement.up) {
            this.sprite.static = this.sprite.run['up']
            this.vector.addOnAxis('y', -1)
            this.vector.norm()
        }

        if (this.keys.ArrowDown && !this.blockMovement.down) {
            this.sprite.static = this.sprite.run['down']
            this.vector.addOnAxis('y', 1)
            this.vector.norm()
        }

        if (this.keys.ArrowLeft && !this.blockMovement.left) {
            this.sprite.static = this.sprite.run['left']
            this.vector.addOnAxis('x', -1)
            this.vector.norm()
        }

        if (this.keys.ArrowRight && !this.blockMovement.right) {
            this.sprite.static = this.sprite.run['right']
            this.vector.addOnAxis('x', 1)
            this.vector.norm()
        }

    }

    // sul controlloer

    // if(Controller.key.ArrowLeft){
    //     ....move
    // }

    move(key) {
        this.keys[key] = true
    }

    stopMove(key) {
        this.keys[key] = false
        this.vector = new Vector()
    }



}