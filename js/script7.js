function square(side, area) {
    this.side = side;
    this.area = area;

    square.prototype.calculatearea = function () {
        return this.side * this.side;
    };
}
 
let sqaure = new square(3, 4);

console.log(square.side);
console.log(square.area);
console.log(square.calculatearea());
