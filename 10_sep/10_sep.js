// let btn=document.querySelector("button");
// let p=document.querySelector("p");
// btn.addEventListener("click",function(){            //task 1
//     p.textContent="click again";
//     p.style.color='red';
// })

// task 2

// let a=document.querySelector('#one');
// let b=document.querySelector('#two');
// let btn=document.querySelector('button');
// btn.addEventListener("click",function(){
//     let im1=a.src;
//     let im2=b.src;

//     a.src=im2;
//     b.src=im1;

// })

//                               task 3

// let inp1=document.querySelector("#inp1");
// let inp2=document.querySelector("#inp2");
// let btn=document.querySelector("button");
// let h4=document.querySelector("h4");
// let form=document.querySelector("form");
// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     console.log(inp1.value);
//     if(inp1.value ==='' || inp2.value ===''){
//         h4.textContent="please enter all details";
//         h4.style.color="red";
//     }
//     else{
//         h4.textContent='';
//     }
// })

//                                      different method

// let h4 = document.querySelector("h4");
// let inputs=document.querySelectorAll('input[type="text"]');
// let form=document.querySelector("form");
// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     for(let i=0;i<inputs.length;i++){
//         if(inputs[i].value.trim()===''){
//             h4.textContent="enter all Detailes";
//             h4.style.color="red";
//             break;
//         }
//         else{
//             h4.textContent='';
//         }
//     }
// })

//                       task 4

let input = document.querySelector("input");
let add = documet.querySelector("#add");
let remove = document.querySelector("#remove");
let ul = document.querySelector("ul");
let li;
add.addEventListener("click", function () {
  if (input.value.trim() === '') {
  } 
  else {
    console.log(input.value);
    li = document.createElement();
    li.textContent = input.value;
    console.log(input);
    ul.appendChild(li);
    input.value = "";
  }
});

remove,addEventListener("click",function(){
    ul.removechild(li);
})




//                  task6

// let start=document.querySelector("#start");
// let stop=document.querySelector("#stop");
// let h3=document.querySelector("h3");
// let int;
// start.addEventListener("click",function(){
//    let count=0;
//    int= setInterval(function (){
//         h3.textContent=count;
//         count++;
//     }, 1000);
// })

// stop.addEventListener("click",function(){
//     clearInterval(int);
// })











