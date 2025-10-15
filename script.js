const btnIconMobile = document.querySelector('.icon-menu-list');
const menuList = document.getElementById('navbar-mobile');
const navLinks = document.querySelectorAll('.list');

btnIconMobile.addEventListener(('click'), ()=> {
    if(menuList.style.display == 'none'){
        menuList.style.display = 'block';
        
    navLinks.forEach((link, index) => {  
        link.style.animation = `effectTranslate 0.5s ease-in forwards ${
        index / 18 + 0.05
        }s`;
    });

    navLinks.style.backgroundColor = 'red';
     
    }
    else {
        menuList.style.display = 'none'; 
        
        navLinks.forEach((link, index) => {         
                link.style = 'none';
            });
        }

})

function esconderMenu() {
    menuList.style.display = 'none';
}

function verificarJanela(){
    const larguraMinima = 768;

    if (window.innerWidth >= larguraMinima){
        esconderMenu();
    }
}

window.addEventListener('resize', verificarJanela);

// ANIMAÇÃO DO CARROSSEL
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 8000);

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}
//FIM DA ANIMAÇÃO DO CARROSSEL ========


// CARDS PARA INSERIR NO CARROSSEL
const clientes = [
    {
        img: "./img/logo.png",
        nome: "Reis Fruit1",
    },
    {
        img: "./img/logo.png",
        nome: "Reis Fruit2",
    },
    {
        img: "./img/logo.png",
        nome: "Reis Fruit3",
    },
    {
        img: "./img/logo.png",
        nome: "Reis Fruit4",
    },
    {
        img: "./img/logo.png",
        nome: "Reis Fruit5",
    },
    {
        img: "./img/logo.png",
        nome: "Reis Fruit6",
    }
]

const localCarousel = document.getElementById('container-cards-carousel1');
const localCarousel2 = document.getElementById('container-cards-carousel2');

function inserirClientes(){
    

    clientes.forEach((cliente) => {
        const cards = document.createElement('div');
        cards.classList.add('card');
        
        const templateCliente = `<img src="${cliente.img}" alt="logo-reisfruit">
                                 <h2>${cliente.nome}</h2>
                                `;

        cards.innerHTML = templateCliente;            

        localCarousel.appendChild(cards);        
    })

    clientes.forEach((cliente) => {
        const cards = document.createElement('div');
        cards.classList.add('card');
        
        const templateCliente = `<img src="${cliente.img}" alt="logo-reisfruit">
                                 <h2>${cliente.nome}</h2>
                                `;

        cards.innerHTML = templateCliente;            

        localCarousel2.appendChild(cards);        
    })
 
}

inserirClientes();

// FIM CARDS PARA INSERIR NO CARROSSEL ========


// ANIMAÇÃO DOS CARDS NA SEÇÃO DE DÚVIDAS

const buttonArrow = document.querySelectorAll('.icon-show');


buttonArrow.forEach((button) =>{

    button.addEventListener('click', () => {
        const boxDoubts = button.closest('.box-doubts');
        
        if(!boxDoubts.classList.contains('active')){   
             document.querySelectorAll('.box-doubts.active').forEach((element) =>{
                element.classList.remove('active')
            }) 

            boxDoubts.classList.add('active')
        } else{
            document.querySelectorAll('.box-doubts.active').forEach((element) =>{
                element.classList.remove('active')
            })

        }
    
    });

});


// FIM DA ANIMAÇÃO DOS CARDS NA SEÇÃO DE DÚVIDAS =======

// ANIMAÇÃO PELA ROLAGEM

// window.addEventListener('scroll', () => {
//   const elements = document.querySelectorAll('.reveal');
//   const windowHeight = window.innerHeight;

//   elements.forEach(el => {
//     const elementTop = el.getBoundingClientRect().top;
//     const elementBottom = el.getBoundingClientRect().bottom;
    
//     if (elementTop < windowHeight - 200) { // 100px antes de entrar na tela
//       el.classList.add('show');
//     } else{
//         el.classList.remove('show');
//     }

//     // if (elementBottom < windowHeight + 200){
//     //   el.classList.remove('show');

//     console.log(innerHeight)
//   });
// });

const section = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry=> 
    {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            // observer.unobserve(entry.target);
        } else{
            entry.target.classList.remove('show')
        }
    })
}, 
{ 
 threshold: 0.5
})

section.forEach(div=>observer.observe(div));