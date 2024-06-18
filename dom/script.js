const boxes = document.querySelectorAll('.box');
const body = document.querySelector("body");

boxes.forEach(function (box){
    console.log(box);
    box.addEventListener('click', function(b){
       if(b.target.id === "yellow"){
        body.style.backgroundColor = "yellow";
       }
       if(b.target.id === "green"){
        body.style.backgroundColor = "green";
       }
       if(b.target.id === "blue"){
        body.style.backgroundColor = "blue";
       }
       if(b.target.id === "orange"){
        body.style.backgroundColor = "orange";
       }

    })

});