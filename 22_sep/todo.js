let ul=document.querySelector("ul");
let input=document.querySelector("input");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
   let item=document.createElement("li");
   let del=document.createElement("button");
   item.innerHTML=input.value;
   ul.appendChild(item);
  
   del.innerHTML="dlt";
   item.appendChild(del);
   input.value="";

   
   let del_btn=document.querySelectorAll(".dlt");
for(dlt of del_btn){
    dlt.addEventListener("click" , function(){
        let par=this.parentElement;
        // console.log(par);
        par.remove();
    });
}
})


