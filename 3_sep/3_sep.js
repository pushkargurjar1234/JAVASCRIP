// function dice(){
// let i;
// console.log("random no: ")
// i=Math.floor((Math.random()*6)+1);
// console.log(i);}

// dice();


// function info(name,age){
//     console.log(`${name}'s age is ${age}`);
// }

// info("aman",21);
// info("shardha",20);

// function table(number){
//     for(let i=1;i<=10;i++){
//         console.log(i*number);
//     }
// }

// function average(x,y,z){
//     console.log((x+y+z)/3);
// }
// average(10,20,30);

// function summ(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
//     }
//     return sum;
// }


// console.log(summ(4));

// str=["my ","name ","is ","madara ","uchiha "];
// function concat(str){
//     let sum="";
//     for(let i=0;i<str.length;i++){
//         sum+=str[i];
//     }
//     return sum;
// }
// console.log(concat(str));


function outer(){
    let x=10;
    let y=17;
    
    console.log(x);
    function inner(){
        console.log(y);
    }
    
}


inner();
