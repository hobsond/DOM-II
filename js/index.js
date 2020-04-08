// Your code goes here


const busPic =document.querySelector("#intropic")
const welcome = document.querySelector("#welcome")
const popup = document.querySelector('.popup')
const feedback = document.querySelector('#feedbackImg')
const yesbtn = document.querySelector('#yesBtn')
const nobtn = document.querySelector('#noBtn')
const destOpt = document.querySelectorAll(".destOpt")

const textContent = document.querySelectorAll('.text-content')
const contentSection = document.querySelectorAll('.sec')

const body = document.querySelector(".container")

const navItems = document.querySelectorAll('nav a')

window.onload = function(){
    this.setTimeout(()=>{
        popup.classList.remove('dontshow')
    },4000)
}

window.addEventListener('keydown',(e)=>{
    if(e.key ==='Escape'){
        popup.classList.add('dontshow')
    }
})

let scrollposition=0

window.addEventListener('scroll',e=>{
    scrollposition= window.scrollY

    if(scrollposition>254 && scrollposition<=711){
        document.body.style.background ='lightblue'
    }else if(scrollposition>711){
        document.body.style.background ='whitesmoke'
    }
    else{
        document.body.style.background ='peachpuff'
    }



})

for(let i = 0; i<navItems.length; i++){
    const items =navItems[i];
    items.addEventListener('click',(e)=>{
        e.preventDefault()
        
    })
}




yesbtn.addEventListener('click', () =>{
    feedback.setAttribute('src',"https://i.insider.com/4a8e9d11dcefd5131b8f113a?width=750&format=jpeg&auto=webp") 
    setTimeout(()=>{
        popup.classList.add('dontshow')

    },800)

})

nobtn.addEventListener('click', () =>{
    feedback.setAttribute('src',"https://comenian.org/wp-content/uploads/2019/10/unnamed-1-1-900x600.jpg") 
    setTimeout(()=>{
        popup.classList.add('dontshow')

    },800)

})
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    busPic.style.transform = `scale(${scale})`;
  }
  let scale = 1;





busPic.addEventListener('mouseover',e=>{
    welcome.classList.remove('dontshow')
})
busPic.onwheel=zoom; 



welcome.addEventListener('mouseleave',e=>{
    welcome.classList.toggle('dontshow')
    gsap.to('.box-container',{
        duration:1,
        
        stagger:.2,
        x:-10
    })
})
welcome.addEventListener('mouseenter',e=>{
    gsap.to('.box-container',{
        duration:1,
        
        stagger:.2,
        x:600
    })

})

body.addEventListener('mouseleave',e=>{
    welcome.classList.toggle('dontshow')
    
})

gsap.from('.box',{
    duration:1,
    
    stagger:.2,
    x:900
})

let dragged=null;


for(let i =0; i<destOpt.length;i++){
    let item = destOpt[i]
    item.setAttribute('draggable',true)
    
    item.addEventListener('dragstart',function(){
        console.log(item+ 'drag start')
        dragged=item
        setTimeout(()=>{
            item.style.display = 'none'
            item.style.opacity = 0
        },0)
    })
    item.addEventListener('dragend',function(e){
        console.log('dragend' + e)
        
        setTimeout(()=>{
            dragged.style.display = 'block'
            dragged.style.opacity = 100
            dragged = null

        },0)
    })
   

}
    
for (let i=0 ; i<textContent.length;i++){
    let item =textContent[i];
    item.addEventListener('mouseover',()=>{
        console.log('hello')
        item.style.background = 'purple'
        item.style.transition= 'background '+'1s '+'ease-in'
        item.style.color = 'white'
        item.style.textAlign='center';
    
    })

    item.addEventListener('mouseleave',()=>{
        item.style.background="none"
        item.style.color = 'white';
    })
}
for(let i=0 ; i<contentSection.length;i++){
    let item = contentSection[i]
    item.addEventListener('mouseover',()=>{
        item.style.background = 'orange'
        item.style.transition= 'background '+'1s '+'ease-in'
    })

    item.addEventListener('mouseleave',()=>{
        item.style.background="none"
        item.style.color = 'white';
    })

}

