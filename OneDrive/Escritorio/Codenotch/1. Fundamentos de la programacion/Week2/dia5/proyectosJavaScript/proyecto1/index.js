let sumar = (a, b, c) => {
    let sum = b + c;
    console.log(sum);
}
let restar = (a, b, c) => {
    let subs = b - c;
    console.log(subs);
}
let producto = (a, b, c) => {
    let mult = b * c;
    console.log(mult);
}
let division = (a, b, c) => {
    let div = b / c;
    console.log(div);
}
module.exports = {sumar, restar, producto, division};