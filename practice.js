 let User="anu"
 // Variable reassigned
 User=" Anusuya "
 // concodination
 let msg="Hi"+User+ "welcome to the Java script"
 console.log(msg);



function add(a,b){
    console.log(a+b);
}
add(4,5)


let addtion=(x,y)=>(x+y)
console.log(add(3,2))

let sub=(a,b)=>(a-b)
console.log(sub(3,2));

let multi=(a,b)=>(a*b)
console.log(multi(2,3));

let div=(a,b)=>(a/b)
console.log(div(10,2));


let great=(a,b)=>{
    if(a>b)
    return "a is greater"
    else
    return "b is greater"
}
console.log(great(3,2));


//string methods

let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(letters.length);

let text = "Apple, Banana, Kiwi";
console.log(text.slice(7,10));
console.log(text.slice(7));
console.log(text.slice(-12,-1));
console.log(text.substring(7,18));
console.log(text.slice(7,18));
console.log(text.substring(7));
console.log(text.slice(7));
console.log(text.substring(-7));
console.log(text.slice(-7));
console.log(text.substring(10,1));

let Text = "Apple, Banana, Kiwi,Apple";
let arr=Text.replace('Apple','orange')
console.log(arr);

let fryits = "Apple, Banana, Kiwi,Apple";
let Arr=fryits.replaceAll('Apple','orange')
console.log(Arr);

let upper="Anuxa"
let newupper=upper.toUpperCase()
console.log(newupper);

let lower="ANUXA"
let newlower=lower.toLowerCase()
console.log(newlower);


let one = 'Anusuya ';
let two = 'xavier';
 
// Accessing concat method on an object
// of String passing another object
// as a parameter
console.log(one.concat(two));

let x='Hi'
let y='Hellow'
console.log(x.concat(" ",y));


let anu='  Hellow hi '
console.log(anu);
let newanu=anu.trimEnd()
console.log(newanu);

let s='seven'
let news=s.padEnd(10,'eight')
let newss=s.padStart(10,'eight')
console.log(news);
console.log(newss);
console.log(s.charAt(2));
console.log(s.charCodeAt(2));
console.log(anu.split(''));


let p = [1, 2, 3, 4, 5, 6];
console.log(p.join('&'));

// search method

let str = 'finding substring in string';
let index = str.indexOf('string');

console.log(index);

let xavi='anusuya'
let lastindex=xavi.lastIndexOf('ya')
console.log(lastindex);


//Object
//Object declaration

let person={
    Name:"Anusuya",
    Gender:"Female",
    Address:"Chennai"
}

//Call Object-call by dot method
console.log(person.Name);
//Call Object-call by [] method
console.log(person['Gender']);

//Change key value-address change chennai to Tamil nadu
person.Address="Tamil Nadu"
console.log(person.Address);

//Complex Object(object inside object)

let Person={
    Name:"Anusuya",
    Gender:"Female",
    Address:"Chennai",
    sibiling:{
        Brother:"Gowri shankar",
        Sisiter:"Deepa"
    }
}

console.log(Person.sibiling.Sisiter);

//Array declaration

let favcolor=["red","green","blue"]
// accessing array
console.log(favcolor[2]);
// adding the items
favcolor[4]="black"
console.log(favcolor);

//assignment operator

let z=10
z+=10
console.log(z);
z-=10
console.log(z);

//Arithmetic operatos

let number1=10
let number2=5
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

//exponential
console.log(number1**number2);
//Increment
console.log(number1++);
console.log(++number1);

//Decrement
console.log(number1--);
console.log(--number1);

//comparison opertor

console.log(1>10);
console.log(1<10);

//Ternaty opration
//If person age is more then 18
//they are adult category
//otherwise they are child category

let age=17
let type=age>18?"adult category":"child category"//condition?value1:value2
console.log(type);













   
    


