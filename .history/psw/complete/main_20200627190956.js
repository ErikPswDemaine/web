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
const img=document.getElementById('pic1')

function getElementAbsPos(e) 
{
    var t = e.offsetTop;
    var l = e.offsetLeft;
    while(e = e.offsetParent)
    {
        t += e.offsetTop;
	l += e.offsetLeft;
    }
 
    return t;
}

ul.children[1].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        top: getElementAbsPos(img),
        behavior: "smooth" 
    });
})
var t =document.body.clientHeight;

window.scroll({top:t,left:0,behavior:'smooth' });
ul.children[4].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        top: getElementAbsPos(img),
        behavior: "smooth" 
    });
})