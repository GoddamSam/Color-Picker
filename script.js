const background=document.body;

const colors=document.querySelectorAll('.colors');

document.addEventListener("click",(event)=>{
    if(!Array.from(colors).includes(event.target))
    background.style.backgroundColor='white';
});

colors.forEach((clr)=>{
    clr.addEventListener('click',(e)=>{
        background.style.backgroundColor=e.target.id;
    });
});

