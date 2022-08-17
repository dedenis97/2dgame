class Engine {

    elements = []

    addElement(element) {
        this.elements.push(element)
    }

    addElements(elements) {
        this.elements.push(...elements)
    }

    start() {
        for (let i = 0; i < this.elements.length; i++) {

            let ele = this.elements[i]

            ele._update()

            if (ele instanceof PhysicElement) {
                ele.position.x += ele.vector.x * ele.speed
                ele.position.y += ele.vector.y * ele.speed
            }
        }
    }
}