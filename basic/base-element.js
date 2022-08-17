class BaseElement {

    position = {
        x: 0,
        y: 0
    }

    size = {
        width: 100,
        height: 100
    }

    sprite = {
        "current": null,

        "idle": null,
        "jump": null,
        "run": null,

        "src": ""
    }

    // sort for view
    layer = 0

    tags = []

    id = 0

    animationFlags = {
        spriteWidth: 0,
        spriteHeight: 0,

        frameX: 0,
        frameY: 0,

        maxFrameX: 0,
    }


    setSize(w, h) {
        this.size.width = w
        this.size.height = h
    }

    setPosition(x, y) {
        this.position.x = x
        this.position.y = y
    }

    setSprites(src, spriteWidth, spriteHeight, frameY, limitFrameX) {
        this.sprite.src = src

        this.animationFlags.spriteWidth = spriteWidth
        this.animationFlags.spriteHeight = spriteHeight
        this.animationFlags.frameX = 0
        this.animationFlags.frameY = frameY
        this.animationFlags.limitFrameX = limitFrameX
    }

    setStaticSprite(start, end, src) {
        this.sprite.current = {
            start: start,
            end: end
        }
        this.sprite.src = src
    }

    updateAnimaitonFlags() {
        if (this.animationFlags.frameX < this.animationFlags.limitFrameX) {
            this.animationFlags.frameX++;
        } else {
            this.animationFlags.frameX = 0
        }
    }

    addTag(tag) {
        this.tags.push(tag)
    }

    addTags(tags) {
        this.tags.concat(tags)
    }

    hasTag(tag) {
        return this.tags.includes(tag)
    }

    _update() {

    }
}