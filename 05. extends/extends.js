class Polygon {
  constructor(width, height) {
    this.name = 'Polygon';
    this.width = width;
    this.height = height;
  }

  get polygonType() {
    return `The polygon type is ${this.name}`;
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super(width, height);
    this.name = 'Rectangle';
  }

  get area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 10);

console.log(rectangle.area); // 50
console.log(rectangle.polygonType); // The polygon type is Rectangle
