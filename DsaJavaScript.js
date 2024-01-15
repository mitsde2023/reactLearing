const data = [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000];

const Newarray= []

data.forEach(num => Newarray.push(num *1.0001))

console.log(data)
console.log("----------------------------------------")
console.log(Newarray)




// function NewArrayData() {
//     return data.map((num) => num * 10).filter(n => n >40).reduce((acc,crr) => acc+crr,0)
// }

// const newarr = NewArrayData();
// console.log(newarr)

// data.forEach(num => num *7)

// (function () {
//     const evenNumbers = data.filter(data => data % 2 === 0)
//     console.log(evenNumbers)
//     const oddNumbers = data.filter(data => data % 2 !== 0)
//     console.log(oddNumbers)
//     const greterThanFive =data.filter(num => num > 5)
// console.log(greterThanFive)
// })()


// console.log((


// )())


// (function () {
//     let sum = 0;
//     for (let i = 0; i < data.length; i++) {
//        sum += data[i];
//     }
//  console.log(sum)
// })();

// (function () {
//     console.log(data.reduce((acc, crr) => acc + crr, 1000))
// })();










// const data= [1,[2,[3,[0,1],4],5],6,7,8,9];

// console.log(data)

// const flatArra= data.flat(Infinity)
// console.log(flatArra)


// const stu_name= "Kushal Kamble";
// const con_name= " Deepa pal";

//backStics
// console.log(`MITSDE Student ${stu_name}`)

//length of String
// console.log(stu_name.length, "pro")


// (function(){
//     const revStudentName=stu_name.split('').reverse().join('')
//     console.log(revStudentName);
// })();

// const RevString = () =>{
//     const revStudentName=stu_name.split('').reverse().join('')
//     console.log(revStudentName);
// }
// RevString();


// function reStr() {
//     const revStudentName=stu_name.split('').reverse().join('')
//     console.log(revStudentName);
// }

// reStr()


// const number= stu_name.length - 1;
// console.log(number)
// console.log(stu_name.charAt(stu_name.length - 3))

// console.log(stu_name.slice(2,6))


// console.log(stu_name.replace('Kushal', 'Kamble22'))



// console.log(stu_name.toUpperCase())
// console.log(stu_name.toLowerCase())

// stu_name.concat(con_name)
// console.log(stu_name.concat(con_name))


// includes method
// console.log(stu_name.includes('999'))

//indexOf
// console.log(stu_name.indexOf('m'));










//split method

// const singleletter = stu_name.split('');
// const singlename = stu_name.split(' ');
// const customString = stu_name.split('-')
// console.log(singleletter);
// console.log(singlename);
// console.log(customString);



