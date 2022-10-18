let toggleBtn = document.querySelector('.toggleBtn');

function loadCoupan(){
    document.getElementById('coupan-container').style.visibility = 'visible';
}

function closeCoupan(){
    document.getElementById('coupan-container').style.visibility = 'hidden';
}


function theme(){
    let mybody = document.querySelector('body');

    mybody.classList.toggle('light')
}