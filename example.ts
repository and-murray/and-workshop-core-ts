class Circle {
  static pi: number = 3.14;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}

Circle.pi = 435345;

console.log(Circle.pi);
