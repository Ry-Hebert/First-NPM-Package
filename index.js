const myTools = {
    hello: (uIn) =>{return `Hello ${uIn}` },
    randomNumBetween: (x, y) =>{return Math.random() * (y - x) + x},
    numCheck: (x) =>{return !isNaN(parseFloat(x)) && isFinite(x)},
    arrMin: (x) =>{return Math.min.apply(Math, x)},
    arrMax: (x) =>{return Math.max.apply(Math, x)},
}

export default myTools