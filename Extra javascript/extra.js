
let nums = [5,10,15,20,25,30,35,40];

for ( let m of nums) {
    let square = m **2;
       let sum = m+square;
       let sub = square - m;
   
   console.log(`Ədəd: ${m}, Kvadrat: ${square}, Toplama: ${sum}, Çıxarma: ${sub}`);
   }


   let x = 1;
   let sumCut = 0;
   let sumTek =0

   while (x<=200) {
   if (x%2 === 0){
        sumCut += x;
    } else{
        sumTek += x;
    }
    x++;
   }
   console.log("Sum of even numbers:", sumCut);
console.log("Sum of odd numbers:", sumTek);   