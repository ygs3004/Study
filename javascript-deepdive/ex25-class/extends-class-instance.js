class Rectangle{
    constructor(width, height) {
        // 암묵적으로 빈 객체, 인스턴스가 생성되고 this에 바인딩
        console.log(this); // ColorRectangle {}
        console.log(new.target); // [class ColorRectangle extends Rectangle]
        // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype 설정
        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype); // true

        // 인스턴스 초기화
        this.width = width;
        this.height = height;

        console.log(this); // ColorRectangle { width: 2, height: 4 }

    }

    getArea() {
        return this.width*this.height;
    }

    toString() {
        return `width = ${this.width}, height = ${this.height}`;
    }

}
// 서브클래스
class ColorRectangle extends Rectangle{
    constructor(width, height, color) {
        super(width,height);

        console.log(this); // 객체를 생성하지 않고 super가 반환한 인스턴스가 바인딩
        this.color = color;
    }

    // 메서드 오버라이딩
    toString() {
        return super.toString() + `, color = ${this.color}`;
    }
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle); // ColorRectangle { width: 2, height: 4, color: 'red' }


// 상속을 통해 getArea 호출
console.log(colorRectangle.getArea()); // 8
// 오버라이딩 toString 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red
