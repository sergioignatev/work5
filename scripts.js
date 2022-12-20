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

left[1].addEventListener('mouseover',function(){leftimg[1].src='./blue/shopping-cart.png'})
left[1].addEventListener('mouseout',function(){leftimg[1].src='./grey/shopping-cart.png'})

left[2].addEventListener('mouseover',function(){leftimg[2].src='./blue/megaphone.png'})
left[2].addEventListener('mouseout',function(){leftimg[2].src='./grey/megaphone.png'})

left[3].addEventListener('mouseover',function(){leftimg[3].src='./blue/pie-chart.png'})
left[3].addEventListener('mouseout',function(){leftimg[3].src='./grey/pie-chart.png'})

left[4].addEventListener('mouseover',function(){leftimg[4].src='./blue/wallet.png'})
left[4].addEventListener('mouseout',function(){leftimg[4].src='./grey/wallet.png'})


left[5].addEventListener('mouseover',function(){leftimg[5].src='./blue/profile.png'})
left[5].addEventListener('mouseout',function(){leftimg[5].src='./grey/profile.png'})

left[6].addEventListener('mouseover',function(){leftimg[6].src='./blue/information.png'})
left[6].addEventListener('mouseout',function(){leftimg[6].src='./grey/information.png'})

left[7].addEventListener('mouseover',function(){leftimg[7].src='./blue/music-and-multimedia.png'})
left[7].addEventListener('mouseout',function(){leftimg[7].src='./grey/music-and-multimedia.png'})

left[8].addEventListener('mouseover',function(){leftimg[8].src='./blue/logout.png'})
left[8].addEventListener('mouseout',function(){leftimg[8].src='./grey/logout.png'})
