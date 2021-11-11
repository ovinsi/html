
(function(){
    const openingBtm = document.querySelector('.sidebare__hamburger');
    const closingBtm = document.querySelector('.sidebare__close');
    const sidebare = document.querySelector('.sidebare')
    
    
    openingBtm.addEventListener('click', function(){
        sidebare.classList.add("sidebare--opened")
    })
    
    closingBtm.addEventListener('click', function(){
        sidebare.classList.remove("sidebare--opened")
    })

})()







