const button=document.querySelector("button");
const h1=document.querySelector("h1");
const copybtn=document.querySelector("#copy");
button.addEventListener("click",function(){

    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    let newColor=`rgb(${r},${g},${b})`;
    document.body.style.backgroundColor=newColor;
    h1.style.color= "white";
    document.querySelector("h1").innerText=newColor;
})

copybtn.addEventListener("click",function(){
    navigator.clipboard.writeText(h1.innerText)
    copybtn.innerText="Copied !!";
    alert(`${h1.innerText} Copied Successfully!`);
})