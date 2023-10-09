const arrows = document.querySelectorAll(".arrow");
const movielist=document.querySelectorAll(".movielist");

arrows.forEach((arrow,i)=>
{
    const itemnumber=(movielist[i].querySelectorAll("img").length);
    let clickcounter=0;
 arrow.addEventListener("click",function()
 {
    clickcounter++;
    if(itemnumber-(4+clickcounter)>=0)
    {
        movielist[i].style.transform=`translate(${movielist[i].computedStyleMap().get("transform")[0].x.value -300}px)`
        
    }
    else
    {
        movielist[i].style.transform="translate(0)";
        clickcounter=0;
    }
 })
});



//toggle
const ball = document.querySelector(".toogleball");
const items= document.querySelectorAll(".containeer1,.newmovieslist,.navbar,.menulist,.sidebar,.leftmenuicon,toggle");

ball.addEventListener("click",function()
{
    items.forEach(item=>
        {
            item.classList.toggle("activate");
        })
        ball.classList.toggle("activate");
})

