//https://onecompiler.com/javascript/44285z2j2

const rectangle = {
  length : 6,
  width : 4,
  
  calculateArea: function(){
    return this.length*this.width;
  },
  calculatePerimeter: function(){
    return 2*(this.length+this.width);
  }
};

console.log('Area of rectangle : ' + rectangle.calculateArea());
console.log('Perimeter of rectangle : ' + rectangle.calculatePerimeter())

