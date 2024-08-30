//console.log("Hello");
//int a
//a=10;
//int a=10
// let a:number;
// a=10

// let b:number=10;
// let message:string;
// let a;
// a=10;
// a="test";
// let data:number|string;
// data=10;
// data="Code";
//(int)
//let data:any;
//data="CodeQuotient";
//let stringdata=(data as string)
// const GREEN:number=0;
// const RED:number=1;
// const BLUE:number=2

// enum Color{GREEN,RED,BLUE};
// let mycolor:Color;
// mycolor=Color.RED;
// console.log(mycolor);
// let arr:(number)[]=[12,23,4];
// arr.forEach((item)=>{
// item.    

// }

//a="test";
// let sum=(x:number,y?:number):number=>{
//     if(y==undefined)
//     {
//         console.log("Not passed");
//         y=x;
//     }
//     return x+y;

//   //  console.log("sum called",x+y);
// }
// sum(2);

// let drawPoint=(x:number,y:number)=>{

//  // return "a";

// }
//drawPoint(12,3);

// type Point=
// {
//   x:number,
//   y?:number
// }
// interface Point{
//   x:number;
//   y?:number;
// }
// let drawPoint=(point:Point)=>{

// }
// let getDistance=(point1:Point,point2:Point)=>{

// }
//C++
///Function Define
//Variable Define
//Functions declare
//variable declare X
//int a=10;
//int a

//Java
// Function define
//variable defin
//variable decl
//int a=10;
//function declaration
// class Point{
//   private x:number=10;
//   private y:number;
//   constructor(x:number,y:number){
//     this.x=x;
//     this.y=y;


//   }
//   getX()
//   {
//     return this.x;
//   }
//   setX(x:number)
//   {
//     if(x<0)
//       this.x=0;
//     else
//     this.x=x;
//   }
//   get X()
//   {
//     return this.x;
//   }
//   set X(x:number)
//   {
//     this.x=x;
//   }


//   drawPoint()
//   {
//     console.log(this.x,this.y);

//   }
// }
//let point:Point=new Point();
//let point:Point;
//point=new Point();
//point.setX(10);
//console.log(point.getX());
//point.X=10;//set
//let result=point.X;//gettter
// point.x=20;
// point.y=30;

//point.drawPoint();
// Point p;
//Point *p=new Point();
//Point p;
//p=new Point();


// let drawPoint=(point:{x:number,y:number})=>{

// }

 //drawPoint({x:12});
// let getDistance=(point1:{x:number,y:number},point2:{x:number,y:number})=>{

// }
//let drawPoint=()
class PointNew{
    constructor(private _x:number,private _y:number)
    {
      this._x=_x;
      this._y=_y;
    
    
    
    }
    set x(_x:number)
    {
    this._x=_x;
    }
    get x()
    {
      return this._x;
      
    }
    }
    class Point{
      x:number;
      y:number;
      constructor(x:number,y:number)
      {
        this.x=x;
        this.y=y;
    
      }
      set X(x:number)
      {
        this.x=x;
    
      }
      get X()
      {
        return this.X;
    
      }
    }