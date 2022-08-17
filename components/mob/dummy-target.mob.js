class DummyTarget extends Mob {

    constructor() {
        super()

        this.sprite.src = "./assets/dumb target.png"

        this.sprite.current = {
            start: { x: 0, y: 0 },
            end: { x: 32, y: 32 }
        }

        // this.setPosition(300, 0)
        this.setSize(60, 60)

        this.setTag('mob')


        this.hp = this.totHp = 1000

        this.hp = 500
    }


    _update() {

     
    }


}