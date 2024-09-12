let input=document.querySelector("input");
let data=[
    {name:"harsh",src:"https://i.pinimg.com/564x/e5/4a/06/e54a069a1803faca5b02a183c9bce6c9.jpg"},
    {name:"harshita",src:"https://i.pinimg.com/736x/d2/96/a7/d296a78d874dc9db3027266eec88e317.jpg"},
    {name:"hary" , src:"https://i.pinimg.com/736x/e4/f6/da/e4f6da219ae8e55c9c185b583e00bad9.jpg"},
    {name:"harin" ,src:"https://i.pinimg.com/736x/a0/32/12/a03212f15d6a69a3d2a7c11493f4493a.jpg"}]
    
    var pers = "";
    data.forEach(function(elem){
        pers += `<div class="person">
        <div>
        <img src="${elem.src}" alt="img">
        </div>
        
        <h4>${elem.name}</h4> </div>`;
    })
    document.querySelector(".persons").innerHTML =  pers; 

    input.addEventListener("input",function(){
      var  matching = data.filter(function(e){
        return e.name.startsWith(input.value)
        })
        var newmember = "";
        matching.forEach(function(elem){
            newmember += `<div class="person">
            <div>
            <img src="${elem.src}" alt="img">
            </div>
            
            <h4>${elem.name}</h4> </div>`;
    })
    document.querySelector(".persons").innerHTML=newmember;

    })
   