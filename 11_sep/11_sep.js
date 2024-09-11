//                                   tast 6



// let prg=document.querySelector("#progress");
// let h3=document.querySelector("h3");
// let count=0;   


// let int = setInterval(function(){
//     if(count===100){
//         clearInterval(int);
//         // h3.textContent="completed";
//         h3.style.opacity=100+'%';
//     }
//     console.log(count);
//     count++;
//     prg.style.width=count+'%';
// }, 100);



    let txt=document.querySelector("textarea");
    let h3=document.querySelector("spam");
    let count=0;
    addEventListener("input",function(){
        count=txt.value.length;
        console.log(count);
        h3.textContent=count;
    })
















