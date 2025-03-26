
// 1 · 1-dən 100-ə qədər olan ədədlərin cəmini tapın.

// let sum =0;
// let i;
// for (i=1; i <=100; i++) {
//    sum += i;
//   }
//  console.log("Cem:" + sum);


 
//  2 · Verilmiş array: [1, 2, 3, 4, 5] – bu array-dəki bütün ədədləri konsola yazdırın.for in

// const number = [1,2,3,4,5];
// for (let x in number) {
//     console.log(number[x])
// }



// 3 · Verilmiş obyekt: {ad: 'Ali', yaş: 25, şəhər: 'Bakı'} – bu obyektin bütün açarlarını konsola yazdırın.

// let person = {
//     ad:"Ali",
//     yash: 25,
//     sheher: "Baki"
// }

// console.log(person);



// 4 · Verilmiş obyekt: {kitab: '1984', müəllif: 'George Orwell'} – açar və dəyərləri konsola yazdırın.

// let author = {
//     kitab: "1084",
//     muellif: "George Orwell"
// }

// console.log(author);



// 5 for of · Verilmiş array: ['alma', 'armud', 'banan'] – bütün meyvələri konsola yazdırın.

// let  fruits = [ "alma", "armud", "banan"];

// for ( let f of fruits) {
//     console.log(f);
// }




// 6 · Verilmiş string: 'Salam' – hər bir hərfi konsola yazdırın.
// let ms = "salam";
// for (let m of ms){
//     console.log(m);
// }



// 7 while  · 1-dən 10-a qədər olan ədədləri konsola yazdırın.

// let b=1;
// while(b<=10) {
// console.log(b)
// b++
// }

// 8  · Verilmiş array: [5, 10, 15, 20] – array boşalana qədər elementləri konsola yazdırın.

// let empty = [5, 10, 15, 20];
// let c = 0;
// while ( c < empty.length){
//     console.log(empty[c]);
//     c++;
// }

// 9 do while · 1-dən 5-ə qədər ədədləri do while ilə konsola yazdırın.

// let t = 1;
//  do{
//     console.log(t);
//     t++;

//  } while(t<=5);




// 10 Verilmiş şərt: istifadəçi ədəd daxil edir və ədəd 50-dən kiçikdirsə döngü davam edir.

let num1 = 30;
let num2;

    if (num1<50) {        
     for (num2=1; num2<=50; num2++) {
    console.log(num2);
    }
 }else{
        console.log("reqem teyin olunmayib");
    
 }

