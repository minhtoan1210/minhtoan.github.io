function IntervalTimer(callback, interval) {
    var timerId, startTime, remaining = 0;
    var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

    this.pause = function () {
        if (state != 1) return;

        remaining = interval - (new Date() - startTime);
        window.clearInterval(timerId);
        state = 2;
    };

    this.resume = function () {
        if (state != 2) return;

        state = 3;
        window.setTimeout(this.timeoutCallback, remaining);
    };

    this.timeoutCallback = function () {
        if (state != 3) return;

        callback();

        startTime = new Date();
        timerId = window.setInterval(callback, interval);
        state = 1;
    };

    startTime = new Date();
    timerId = window.setInterval(callback, interval);
    state = 1;
}
const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider__slides");
const sliderItem = document.querySelectorAll(".slide");
const sliderItemwidth = sliderItem[0].offsetWidth;
const sliderLength = sliderItem.length;
let sliderDost = document.querySelectorAll('.slider__slides-btnul ul li')
let leftX = 0;
let index = 0;
document.querySelector(".--pev").addEventListener("click",function()
{
    handlechangeslide(-1)
})
document.querySelector(".--next").addEventListener("click",function()
{
    handlechangeslide(1)
})
sliderDost.forEach((e, i) => {
    e.addEventListener('click', function () {
        sliderto(i);
    })
})
function sliderto(to) {
    sliderDost[index].classList.remove("is-selected");
    sliderDost[to].classList.add("is-selected");
    index = to;
    if(to == 0)
    {
        leftX=0;
        sliderMain.style = `transform: translateX(${leftX}px)`;
    }
    else if(to == 1)
    {
        leftX= -to * sliderItemwidth ;
        sliderMain.style = `transform: translateX(${leftX}px)`;
    }
    else if(to == 2)
    {
        leftX= -to * sliderItemwidth ;
        sliderMain.style = `transform: translateX(${leftX}px)`;
    }
    else if(to == 3)
    {
        leftX= -to * sliderItemwidth ;
        sliderMain.style = `transform: translateX(${leftX}px)`;
    }
}
function handlechangeslide(direction)
{
    if(direction == 1)
    {
     if(index === sliderLength - 1 )
     {
        leftX=0;
        sliderMain.style = `transform: translateX(${leftX}px)`;
        sliderDost[sliderLength - 1].classList.remove("is-selected");
        sliderDost[0].classList.add("is-selected");
        index=0;
     }
     else if (index <  sliderLength-1 )
     {
        leftX = leftX - sliderItemwidth;
        console.log(leftX);
        sliderMain.style = `transform: translateX(${leftX}px)`;
        sliderDost[index].classList.remove("is-selected");
        index++;
        sliderDost[index].classList.add("is-selected");
     }
     console.log(index);
     console.log(sliderLength);
    
    }
    else if(direction === -1)
    {
     if(index === 0 )
     {
        leftX = -(sliderLength-1) * sliderItemwidth;
        sliderMain.style = `transform: translateX(${leftX}px)`;
        sliderDost[sliderLength - 1].classList.add("is-selected");
        sliderDost[0].classList.remove("is-selected");
        index= sliderLength -1;
        console.log(index);
        console.log(sliderLength -1);
     }
     else if (index >  0)
     {
        leftX = leftX + sliderItemwidth;
        console.log(leftX);
        sliderMain.style = `transform: translateX(${leftX}px)`;
        sliderDost[index].classList.remove("is-selected");
        index--;
      sliderDost[index].classList.add("is-selected");
     }
     console.log(index);
     console.log(sliderLength);
    
    }
}
var timer = new IntervalTimer(function () {
    if (index == sliderLength - 1) {
        leftX=0;
        sliderMain.style = `transform: translateX(${leftX}px)`;
        sliderDost[sliderLength - 1].classList.remove("is-selected");
        sliderDost[0].classList.add("is-selected");
        index=0;
        // slideritem[slideritem.length - 1].classList.remove('active');
        // slideritem[0].classList.add('active');
        // sliderDost[slideritem.length - 1].classList.remove("is-selected");
        // sliderDost[0].classList.add("is-selected");
        // dem=0;
        return;
    }
    if (index < sliderLength - 1) {
        leftX = leftX - sliderItemwidth;
        console.log(leftX);
        sliderMain.style = `transform: translateX(${leftX}px)`;
        sliderDost[index].classList.remove("is-selected");
        index++;
        sliderDost[index].classList.add("is-selected");

        // slideritem[dem].classList.remove('active');
        // slideritem[dem + 1].classList.add('active');
        // sliderDost[dem].classList.remove("is-selected");
        // dem++;
        // sliderDost[dem].classList.add("is-selected");
    }
}, 2000);
document.querySelector(".slider").addEventListener("mouseenter", function () {
    timer.pause();
})
document.querySelector(".slider").addEventListener("mouseleave", function () {
    timer.resume();
})
//slider End
// Radio Start
const angletoradian = (angle)=>{
    return angle*(Math.PI / 180);
}
const radius = 90;
const diameter = radius*2;

const cicrcle = document.querySelector('.conten__radio-item');
cicrcle.style.width = `${diameter}px`;
cicrcle.style.height = `${diameter+5}px`;
const text = cicrcle.innerText;
const character = text.split('');
cicrcle.innerText = null;

let angle = -90;
const deltaangle = 180/character.length;
character.forEach((char, index) => {
    const charelement = document.createElement('span');
    charelement.innerText = char;
    const xpos = radius * Math.cos(angletoradian(angle));
    const ypos = radius * Math.sin(angletoradian(angle));

    const transform = `translate(${xpos}px,${ypos}px)`;
    const rotate = `rotate(${index * deltaangle}deg)`;
    charelement.style.transform = `${transform} ${rotate}`;
    angle += deltaangle;
    cicrcle.appendChild(charelement);
});


const angletoradian1 = (angle1)=>{
    return angle1*(Math.PI / 180);
}
const radius1 = 90;
const diameter1 = radius1*2;

const cicrcle1 = document.querySelector('.conten__radio-item1');
cicrcle1.style.width = `${diameter1}px`;
cicrcle1.style.height = `${diameter1+5}px`;
const text1 = cicrcle1.innerText;
const character1 = text1.split('');
cicrcle1.innerText = null;

let angle1 = -90;
const deltaangle1 = 180/character1.length;
character1.forEach((char, index) => {
    const charelement1 = document.createElement('span');
    charelement1.innerText = char;
    const xpos1 = radius1 * Math.cos(angletoradian1(angle1));
    const ypos1 = radius1 * Math.sin(angletoradian1(angle1));

    const transform1 = `translate(${xpos1}px,${ypos1}px)`;
    const rotate1 = `rotate(${index * deltaangle1}deg)`;
    charelement1.style.transform = `${transform1} ${rotate1}`;
    angle1 += deltaangle1;
    cicrcle1.appendChild(charelement1);
});

/**/ 
const angletoradian2 = (angle2)=>{
    return angle2*(Math.PI / 180);
}
const radius2 = 90;
const diameter2 = radius2*2;

const cicrcle2 = document.querySelector('.conten__radio-item2');
cicrcle2.style.width = `${diameter2}px`;
cicrcle2.style.height = `${diameter2+5}px`;
const text2 = cicrcle2.innerText;
const character2 = text2.split('');
cicrcle2.innerText = null;

let angle2 = -90;
const deltaangle2 = 180/character2.length;
character2.forEach((char, index) => {
    const charelement2 = document.createElement('span');
    charelement2.innerText = char;
    const xpos2 = radius2 * Math.cos(angletoradian1(angle2));
    const ypos2 = radius2 * Math.sin(angletoradian1(angle2));

    const transform2 = `translate(${xpos2}px,${ypos2}px)`;
    const rotate2 = `rotate(${index * deltaangle2}deg)`;
    charelement2.style.transform = `${transform2} ${rotate2}`;
    angle2 += deltaangle2;
    cicrcle2.appendChild(charelement2);
});
/**/ 
const angletoradian3 = (angle3)=>{
    return angle3*(Math.PI / 180);
}
const radius3 = 90;
const diameter3 = radius3*2;

const cicrcle3 = document.querySelector('.conten__radio-item3');
console.log(cicrcle3);
cicrcle3.style.width = `${diameter3}px`;
cicrcle3.style.height = `${diameter3+5}px`;
const text3 = cicrcle3.innerText;
const character3 = text3.split('');
cicrcle3.innerText = null;

let angle3 = -90;
const deltaangle3 = 180/character3.length;
character3.forEach((char, index) => {
    const charelement3 = document.createElement('span');
    charelement3.innerText = char;
    const xpos3 = radius3 * Math.cos(angletoradian1(angle3));
    const ypos3 = radius3 * Math.sin(angletoradian1(angle3));

    const transform3 = `translate(${xpos3}px,${ypos3}px)`;
    const rotate3 = `rotate(${index * deltaangle3}deg)`;
    charelement3.style.transform = `${transform3} ${rotate3}`;
    angle3 += deltaangle3;
    cicrcle3.appendChild(charelement3);
});

let a=0;
window.addEventListener("scroll", function () {
    
    let b=0;
    let scrolltop1 = document.querySelector("html").scrollTop;
    let nav= document.querySelector(".nav");
         console.log(scrolltop1);
         if(scrolltop1>document.querySelector('.header').offsetHeight)
         {
            nav.classList.add("mobi");
         }
         if(scrolltop1<document.querySelector('.header').offsetHeight)
         {
            nav.classList.remove("mobi");
         }
})