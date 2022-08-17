class PhysicElement extends BaseElement {

    speed = 1
    vector = new Vector()

    // for preventing collision
    blockMovement = {
        "up": false,
        "down": false,
        "left": false,
        "right": false,
    }

    constructor() {
        super()
    }

    addedDistance = 0
    checkCollisionProximity(tagTarget) {

        let this_nextPosition = JSON.parse(JSON.stringify(this))
        this_nextPosition.position.x += this_nextPosition.vector.x * (this_nextPosition.speed + this.addedDistance)
        this_nextPosition.position.y += this_nextPosition.vector.y * (this_nextPosition.speed + this.addedDistance)


        if (display.SHOW_COLLISION_PROXIMITY) {
            let ctx = display.ctx

            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(this_nextPosition.position.x, this_nextPosition.position.y, this_nextPosition.size.width, this_nextPosition.size.height);
            ctx.stroke();
        }

        let collision = Collisions.checkCollisionWithTag(this_nextPosition, tagTarget)
        let collisionDirection

        if (collision.status) {

            collisionDirection = this.vector.getDirection()

            this.vector = new Vector()

            if (collisionDirection.includes("up")) {
                this.blockMovement.up = true
            }
            if (collisionDirection.includes("down")) {
                this.blockMovement.down = true
            }
            if (collisionDirection.includes("left")) {
                this.blockMovement.left = true
            }
            if (collisionDirection.includes("right")) {
                this.blockMovement.right = true
            }
            
        }
        else {
            this.blockMovement = {
                "up": false,
                "down": false,
                "left": false,
                "right": false,
            }
        }


    }
}
