//single
console.log(window)
console.log(document.getElementById('main'))
const main = document.getElementById('main')
console.log(main)

//Multiple 

const ul=document.querySelector('.site-nav ul')
//事件
ul.children[0].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        top: 1, 
        behavior: "smooth" 
    });
})
const video = document.getElementById("video")

ul.children[1].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        
        behavior: "smooth" 
    });
})