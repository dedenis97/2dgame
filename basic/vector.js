class Vector {

    constructor(x, y) {
        if (x == null && y == null) {
            this.x = 0;
            this.y = 0
        } else {
            this.x = x;
            this.y = y
        }
    }

    addOnAxis(axis, value) {
        switch (axis) {
            case 'x':
                this.x += value
                break

            case 'y':
                this.y += value
                break

            default:
                console.error("No axis name: ", axis)
                break

        }
    }

    add(n) {
        this.x += n
        this.y += n
    }

    div(n) {
        this.x /= n
        this.y /= n
    }

    dot(n) {
        this.x *= n
        this.y *= n
    }

    len() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }

    norm() {
        if (this.x == 0 && this.y == 0) return this
        this.div(this.len())
    }

    addVector(vector) {
        this.x += vector.x
        this.y += vector.y
    }

    getNegativeVector() {

        let x = this.x == 0 ? 0 : this.x * -1
        let y = this.y == 0 ? 0 : this.y * -1

        return new Vector(x, y)
    }

    /**
     *  @return ["up" | "bottom | "right" | "left"]
     */

    getDirection() {
        let directions = []

        if (this.x > 0) directions.push('right')
        if (this.x < 0) directions.push('left')
        if (this.y > 0) directions.push('bottom')
        if (this.y < 0) directions.push('up')

        return directions
    }
}