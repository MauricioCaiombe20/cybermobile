/* quando clicar no icone de menu e X abrir e fechar*/
const nav= document.querySelector('#header nav')
const toggle=document.querySelectorAll('nav .toggle')

for( const element of toggle){
    element.addEventListener('click', function() {
       nav.classList.toggle('show')
    })
}
/*quando clicar em um link do menu fechar*/
const links = document.querySelectorAll('nav ul li a')
for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}
/*quando clicar em um link do menu fim*/
/* mudar o header da pagina scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
// scroll é maior que a altura do header
header.classList.add('scroll')
    } else{
        // menor que a altura do header
        header.classList.remove('scroll')
    }

    if(this.window.scrollY >= 500){

    }
})
/* button get in top*/
window.addEventListener('scroll', function(){
const btnroll = document.querySelector(".back-to-top")

if(this.window.scrollY >= 560){
    btnroll.classList.add('show')
} else   {
    btnroll.classList.remove('show')
}       
})
/* fim get in top*/

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset:  true
})
scrollReveal.reveal(`#home .image , #home .text,
#About .image, #About .text,
#Services header,#Services card,
#depoiments header,#depoiments .depoiment,
#contact .text, #contact .links,
footer .brand, footer .social`,{ interval: 100})
