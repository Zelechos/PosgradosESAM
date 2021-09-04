'use strict'

//Funcion que maneja el toggle
function toggle(){
    let content = document.getElementById('contenedor');
    content.classList.toggle('active');
    let nav = document.getElementById('navigation');
    nav.classList.toggle('active');
}

// Funcion para manejar lo cuadros movibles
window.addEventListener("load" , ()=>{
    const Container = document.querySelector(".head");

    for(let i = 0; i<=20;i++){
        const blocks = document.createElement('div');
        blocks.classList.add("block");
        Container.appendChild(blocks);
    }

    function animate(){
        anime({
            targets : '.block',
            translateX : function(){
            return anime.random(500,1000)
            },
            translateY : function(){
            return anime.random(100,1200)
            },
            scale : function(){
                return anime.random(1,3)
            },
            easing: 'linear',
            duration: 5000,
            delay: anime.stagger(1),
            complete: animate,
        });
    }
    //Ejecucion de funciion
    animate();
});






