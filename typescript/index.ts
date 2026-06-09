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