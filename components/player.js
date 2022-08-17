class Player extends GameElement {

    keys = {
        "ArrowUp": false,
        "ArrowDown": false,
        "ArrowLeft": false,
        "ArrowRight": false,
    }

    // for preventing collision
    blockMovement = {
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

            "static": {
                start: { x: 7, y: 13 },
                end: { x: 102, y: 130 }
            },

            "idle": null,
            "jump": null,
            "run": {
                "bottom": {
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

        let playerF = JSON.parse(JSON.stringify(this))

        playerF.position.x += playerF.vector.x * (playerF.speed + 5)
        playerF.position.y += playerF.vector.y * (playerF.speed + 5)

        let ctx = display.ctx

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.rect(playerF.position.x, playerF.position.y, playerF.size.width, playerF.size.height);
        ctx.stroke();


        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.stroke();



        let collision = Collisions.checkCollisionWithTag(playerF, 'mob')
        let collisionDirection

        if (collision.status) {

            collisionDirection = this.vector.getDirection()

            this.vector = new Vector()

            if (collisionDirection.includes("up")) {
                this.blockMovement.ArrowUp = true
            }
            if (collisionDirection.includes("bottom")) {
                this.blockMovement.ArrowDown = true
            }
            if (collisionDirection.includes("left")) {
                this.blockMovement.ArrowLeft = true
            }
            if (collisionDirection.includes("right")) {
                this.blockMovement.ArrowRight = true
            }
        }
        else {
            this.blockMovement = {
                "ArrowUp": false,
                "ArrowDown": false,
                "ArrowLeft": false,
                "ArrowRight": false,
            }
        }

        console.log(this.blockMovement.ArrowRight);
        if (this.keys.ArrowUp && !this.blockMovement.ArrowUp) {
            this.sprite.static = this.sprite.run['up']
            this.vector.addOnAxis('y', -1)
            this.vector.norm()
        }

        if (this.keys.ArrowDown && !this.blockMovement.ArrowDown) {
            this.sprite.static = this.sprite.run['bottom']
            this.vector.addOnAxis('y', 1)
            this.vector.norm()
        }

        if (this.keys.ArrowLeft && !this.blockMovement.ArrowLeft) {
            this.sprite.static = this.sprite.run['left']
            this.vector.addOnAxis('x', -1)
            this.vector.norm()
        }

        if (this.keys.ArrowRight && !this.blockMovement.ArrowRight) {
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