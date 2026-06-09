interface ReversePair<T,U> {
    value2: U
    value1: T
}

function reversePair<T,U>(value1:T, value2:U): ReversePair<T,U> {
    return {value2, value1}
}

const pair = reversePair('zohaib', 42)
console.log(pair)