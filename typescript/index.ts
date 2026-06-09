class Box<T> {
    private content: T

    constructor(content: T) {
        this.content = content
    }

    getContent(): T {
        return this.content
    }
    
    setContent(content: T): void {
        this.content = content
    }
}

const contentBox = new Box<string>("Hello World")
console.log(contentBox.getContent())
contentBox.setContent("Hello Ts")
console.log(contentBox.getContent())
function filterArray<T>(array: T[], condition: (item:T) => boolean) {
    return array.filter(item => condition(item))
}

const array = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = filterArray<number>(array, (item) => item % 2 == 0)

console.log(evenNumbers)

interface Fruit {
    name: string
    color: string
}

const fruitsArray: Fruit[] = [
    {name: "apple", color: "red"},
    {name: "apple", color: "red"},
    {name: "apple", color: "red"},
]
