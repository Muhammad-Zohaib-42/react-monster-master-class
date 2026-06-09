interface Vehicle {
    start(): void
    stop(): void
}

class Car implements Vehicle {
    private color = "red"

    start() {
        console.log("car is starting...")
    }

    stop() {
        console.log("car is stopped")
    }

    printColor() {
        console.log(`color: ${this.color}`)
    }
}

const car = new Car()
car.printColor()