function add(msg:string):never {
    throw new Error(msg)
}

add('something went wrong')