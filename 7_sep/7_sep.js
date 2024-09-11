const obj={name : "bankai"}
function abcd(){
    console.log(this);
}

let late=abcd.bind(obj);

late();
