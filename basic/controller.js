class Controller {

    eventMap = null

    constructor() {

    }

    addEventListener(type, callback) {
        document.addEventListener(type, callback)
    }

}