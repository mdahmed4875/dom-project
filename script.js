let inc=document.getElementById("inc");
let dec=document.getElementById("dec");
let clr=document.getElementById("clr");
let para=document.getElementById("para");
let error=document.getElementById("error");
let c=0;
function display(){
    if(c==0){
        para.innerText=`your current count is: ${c}`;
        error.innerText="Error:Cannot go below 0";
    }
    else{
        para.innerText=`your current count is: ${c}`;
        error.innerText="";
    }
}
inc.addEventListener('click',()=>{
    c+=1;
    display();
});
dec.addEventListener('click',()=>{
    if(c==0){
        error.textContent="Error:Cannot go below 0";
    }
    else{
        c-=1;
        display();
    }
});
clr.addEventListener('click',()=>{
c=0;
display();
})
