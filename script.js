const imgs=document.querySelectorAll('.header-slider img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');

let n=1;

function changeSlide(){
    for(let i=0;i<imgs.length; i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
            n=imgs.length-1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
            n=0;
    }
    changeSlide();
})
/*-----------------------------------top-------------------*/

const backtop=document.querySelector(".backtop");
 backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
 })

 const sidebar=document.querySelector(".sidebar");
 const cross=document.querySelector(".fa-xmark");
 const black=document.querySelector(".black");
 const sidebtn=document.querySelector(".second-1");
  
 sidebtn.addEventListener("click", ()=>{
  sidebar.classList.add("active");
  cross.classList.add("active");
  black.classList.add("active");
  document.body.classList.add("stop-scroll");

 })

 cross.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
  
   })
  
  const sign=document.querySelector(".ac");
  const drop=document.querySelector(".dropdown")
  const signin=document.querySelector(".dropsign")
  
  sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    drop.classList.toggle("active");
  })

/*-------------Deals------------------*/
const left=document.querySelector(".l-btn");
const right=document.querySelector(".r-btn");

right.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft +=1100;
    event.preventDeafult();
})

left.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft -=1100;
    event.preventDeafult();
})

/*-----------------------beauty--------------------------*/
const l1=document.querySelector(".l-btn-1");
const r1=document.querySelector(".r-btn-2");

r1.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-1');
    conent.scrollLeft +=1200;
    event.preventDeafult();
})

l1.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-1');
    conent.scrollLeft -=1200;
    event.preventDeafult();
})
/*----------------baby clothes----------------*/

const b1=document.querySelector(".l-btn-a");
const b2=document.querySelector(".r-btn-b");

b2.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-2');
    conent.scrollLeft +=1200;
    event.preventDeafult();
})

b1.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-2');
    conent.scrollLeft -=1200;
    event.preventDeafult();
})
/*---------------------kurtas---------------------------*/
const k1=document.querySelector(".l-btn-l");
const k2=document.querySelector(".r-btn-r");

k2.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-3');
    conent.scrollLeft +=1200;
    event.preventDeafult();
})

k1.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-3');
    conent.scrollLeft -=1200;
    event.preventDeafult();
})
/*-----------------------------Smarts phones--------------------*/
const A1=document.querySelector(".l-btn-p");
const A2=document.querySelector(".r-btn-p1");

A2.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-6');
    conent.scrollLeft +=1200;
    event.preventDeafult();
})

A1.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-6');
    conent.scrollLeft -=1200;
    event.preventDeafult();
})
/*---------------------------Grocery--------------------*/
const c1=document.querySelector(".l-btn-g1");
const c2=document.querySelector(".r-btn-g2");

c2.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-7');
    conent.scrollLeft +=1200;
    event.preventDeafult();
})

c1.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide-7');
    conent.scrollLeft -=1200;
    event.preventDeafult();
})