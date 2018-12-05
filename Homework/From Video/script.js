function add(x, y) {

    for (let index in arguments) {
        console.log(arguments[index]);
    }

    return x + y;
}

console.log(add(10,20,50, 'text', true));