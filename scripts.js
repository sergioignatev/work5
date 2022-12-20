function popup(){
    document.getElementsByClassName('popup')[0].style.display='block'
}
function cl(){
    document.getElementsByClassName('popup')[0].style.display='none'
}

document.getElementById('switch').addEventListener('click',swit);


function swit(){
    let mount=document.getElementsByClassName('logos')[0];
    if(mount.style.display=="block"){
        mount.style.display="none";
        document.querySelector('i').classList.add("fa-angle-up")
        document.querySelector('i').classList.remove("fa-angle-down");
        
    }else{
        
        mount.style.display="block";
        document.querySelector('i').classList.remove("fa-angle-up")
        document.querySelector('i').classList.add("fa-angle-down");
        


    }
}
let left=document.getElementsByClassName('left');
let leftimg=document.getElementsByClassName('leftimg');
left[0].addEventListener('mouseover',function(){leftimg[0].src='./blue/web-page-home.png'})
left[0].addEventListener('mouseout',function(){leftimg[0].src='./grey/web-page-home.png'})
