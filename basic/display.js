class Display {

    canvas = null
    ctx = null

    currentFrameIndex = 0
    staggerFrame = 2

    canvasSettings = {
        width: 1024,
        height: 640
    }

    SHOW_HITBOXES = true
    SHOW_COLLISION_PROXIMITY = true


    constructor(canvas) {
        this.canvas = canvas
        this.canvas.width = this.canvasSettings.width
        this.canvas.height = this.canvasSettings.height

        this.ctx = canvas.getContext('2d')
    }


    drawRoomBackground(imgLink){
        let image = new Image()
        image.src = imgLink

        this.ctx.drawImage(
            image,
            0,
            0,
            this.canvasSettings.width,
            this.canvasSettings.height)

    }

    draw(element) {
        let image = new Image()
        image.src = element.sprite.src

        this.drawMobUI(element)

        if (element.sprite.current != null) {

            let sizeX = element.sprite.current.end.x - element.sprite.current.start.x
            let sizeY = element.sprite.current.end.y - element.sprite.current.start.y

            this.ctx.drawImage(
                image,
                element.sprite.current.start.x,
                element.sprite.current.start.y,
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


        if (this.SHOW_HITBOXES && (element instanceof PhysicElement || element.hasTag('room_collision_element'))) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "black";
            this.ctx.rect(element.position.x, element.position.y, element.size.width, element.size.height);
            this.ctx.stroke();
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvasSettings.width, this.canvasSettings.height)
    }

    drawBar(element, boundaries, color) {

        let percCurrentHp = (element.hp / element.totHp) * 100
        let percHp = boundaries.w / (100 / percCurrentHp)

        this.ctx.beginPath();
        this.ctx.strokeStyle = "#000"
        this.ctx.rect(
            element.position.x - boundaries.x,
            element.position.y - boundaries.y,
            boundaries.w, boundaries.h);
        this.ctx.stroke();

        this.ctx.fillStyle = "#3334"
        this.ctx.fillRect(
            element.position.x - boundaries.x,
            element.position.y - boundaries.y,
            boundaries.w, boundaries.h);

        this.ctx.fillStyle = color
        this.ctx.fillRect(
            element.position.x - boundaries.x,
            element.position.y - boundaries.y,
            percHp, boundaries.h);

    }

    drawMobUI(element) {

        if (element instanceof DummyTarget) {

            this.drawBar(element, {
                x: 0,
                y: 20,
                w: 70,
                h: 5
            }, '#fc493d')

        }
    }
}