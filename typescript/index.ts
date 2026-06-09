interface Car {
    brand: string
    start(): void
}
// declaration merging
interface Car {
    model: string,
    stop(): void
}

const car: Car = {
    brand: "BMW",
    start() {
        console.log('start')
    },
    stop() {
        console.log('stop')
    },
    model: "M3"
}

car.start()