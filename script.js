const pages=[...document.querySelectorAll('.page')];let current=0;
function nextPage(){if(current<pages.length-1){pages[current].classList.remove('active');current++;pages[current].classList.add('active');if(current===pages.length-1)burst()}}
function heart(){const h=document.createElement('span');h.className='floating-heart';h.textContent=Math.random()>.25?'❤️':'♥';h.style.left=Math.random()*100+'vw';h.style.fontSize=14+Math.random()*25+'px';h.style.animationDuration=5+Math.random()*5+'s';h.style.setProperty('--drift',Math.random()*160-80+'px');document.querySelector('.hearts-bg').appendChild(h);setTimeout(()=>h.remove(),11000)}
setInterval(heart,650);for(let i=0;i<8;i++)setTimeout(heart,i*250);function burst(){for(let i=0;i<24;i++)setTimeout(heart,i*120)}
