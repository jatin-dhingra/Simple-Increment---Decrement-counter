let add=document.getElementById('increment');
let sub=document.getElementById('decrement');
let num=document.getElementById('number');

let total=0;
add.addEventListener('click',function(){
    total+=1;
    num.innerHTML=total;
})

sub.addEventListener('click',function(){
    total-=1;
    num.innerHTML=total;
})
