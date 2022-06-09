const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    header.classList.toggle ("sticky", window.scrollY > 0); 
    /* ao exercutar a function q e adicionada ao scrolar, essa funcao altera a classe do header o chamando de sticky ao window.scroll.o Y que e a altura maior q 0 */

})