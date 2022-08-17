class DummyTarget extends Mob {

    constructor() {
        super()

        this.sprite.src = "./assets/dumb target.png"

        this.sprite.static = {
            start: { x: 0, y: 0 },
            end: { x: 32, y: 32 }
        }

        this.setPosition(300, 0)
        this.setSize(70, 70)

        this.setTag('mob')

    }


    _update() {

        let ctx = display.ctx

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.stroke();
    }


}