class Display {

    canvas = null
    ctx = null

    currentFrameIndex = 0
    staggerFrame = 2

    canvasSettings = {
        width: 1024,
        height: 640
    }

    constructor(canvas) {
        this.canvas = canvas
        this.canvas.width = this.canvasSettings.width
        this.canvas.height = this.canvasSettings.height

        this.ctx = canvas.getContext('2d')
    }

    animate(elements) {
        this.clearCanvas()

        for (let i = 0; i < elements.length; i++) {
            this.draw(elements[i])
        }

    }

    draw(element) {
        let image = new Image()
        image.src = element.sprite.src

        if (element.sprite.static != null) {

            let sizeX = element.sprite.static.end.x - element.sprite.static.start.x
            let sizeY = element.sprite.static.end.y - element.sprite.static.start.y

            this.ctx.drawImage(
                image,
                element.sprite.static.start.x,
                element.sprite.static.start.y,
                sizeX,
                sizeY,
                element.position.x,
                element.position.y,
                element.size.width,
                element.size.height)

        } else {
            this.ctx.drawImage(
                image,
                element.animationFlags.frameX * element.animationFlags.spriteWidth,
                element.animationFlags.frameY * element.animationFlags.spriteHeight,
                element.animationFlags.spriteWidth,
                element.animationFlags.spriteHeight,
                element.position.x,
                element.position.y,
                element.size.width,
                element.size.height)

            if (this.currentFrameIndex % this.staggerFrame == 0) {
                if (element.animationFlags.frameX < element.animationFlags.limitFrameX) {
                    element.animationFlags.frameX++;
                } else {
                    element.animationFlags.frameX = 0
                }
            }
        }
        this.currentFrameIndex++

    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvasSettings.width, this.canvasSettings.height)
    }
}