const btnIconMobile = document.querySelector(".icon-menu-list");
const menuList = document.getElementById("navbar-mobile");
const navLinks = document.querySelectorAll(".list");

btnIconMobile.addEventListener("click", () => {
  if (menuList.style.display == "none") {
    menuList.style.display = "block";

    navLinks.forEach((link, index) => {
      link.style.animation = `effectTranslate 0.5s ease-in forwards ${
        index / 18 + 0.05
      }s`;
    });

    navLinks.style.backgroundColor = "red";
  } else {
    menuList.style.display = "none";

    navLinks.forEach((link, index) => {
      link.style = "none";
    });
  }
});

function esconderMenu() {
  menuList.style.display = "none";
}

function verificarJanela() {
  const larguraMinima = 768;

  if (window.innerWidth >= larguraMinima) {
    esconderMenu();
  }
}

window.addEventListener("resize", verificarJanela);

// ANIMAÇÃO DO CARROSSEL
    let count = 1;
    document.getElementById("radio1").checked = true;

    setInterval(function () {
    nextImage();
    }, 8000);

    function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
    }
//FIM DA ANIMAÇÃO DO CARROSSEL ========


// ================ CARDS PARA O CARROSSEL DE CLIENTES ================

    // INSERIR IMAGENS DO CARROSSEL DE CLIENTES
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
    },
    ];

    const localCarousel = document.getElementById("container-cards-carousel1");
    const localCarousel2 = document.getElementById("container-cards-carousel2");

    function inserirClientes() {
    clientes.forEach((cliente) => {
        const cards = document.createElement("div");
        cards.classList.add("card");

        const templateCliente = `<img src="${cliente.img}" alt="logo-reisfruit">
                                    <h2>${cliente.nome}</h2>
                                    `;

        cards.innerHTML = templateCliente;

        localCarousel.appendChild(cards);
    });

    clientes.forEach((cliente) => {
        const cards = document.createElement("div");
        cards.classList.add("card");

        const templateCliente = `<img src="${cliente.img}" alt="logo-reisfruit">
                                    <h2>${cliente.nome}</h2>
                                    `;

        cards.innerHTML = templateCliente;

        localCarousel2.appendChild(cards);
    });
    }

    inserirClientes();

// ================ FIM CARDS PARA INSERIR NO CARROSSEL ===============


// =============== INSERIR CATALOGO DE PRODUTOS =================
    // CARDS PARA O OS PRODUTOS

    // INSERIR IMAGENS DOS PRODUTOS
    const frutasCongeladasCatalogo = [
      { // MORANGO
          img: "./img/frutas/morango.png",  //Imagem do Produto
          nome: "Morango",    //Nome do Produto
          descricao: "O Morango Reis Fruit traz o equilíbrio perfeito entre doçura e acidez. Colhido fresco e congelado logo após a colheita, mantém cor vibrante e sabor intenso. Perfeito para vitaminas, sobremesas e drinks.", //Descrição do Produto
      },
      { // ABACAXI
          img: "./img/frutas/abacaxi.png",  //Imagem do Produto
          nome: "Abacaxi",    //Nome do Produto
          descricao: "Refrescante e naturalmente doce, o Abacaxi Reis Fruit é selecionado no ponto ideal de maturação e congelado rapidamente para preservar sabor e nutrientes. Ideal para sucos, sobremesas e preparos culinários que pedem um toque tropical." //Descrição do Produto
      },
      { // CAJÁ
          img: "./img/frutas/caja.png",  //Imagem do Produto
          nome: "Cajá",    //Nome do Produto
          descricao: "Com sabor marcante e levemente ácido, o Cajá Reis Fruit é a escolha ideal para sucos, geleias e coquetéis. Rico em vitamina C, leva o frescor do Nordeste direto para sua mesa." //Descrição do Produto
      },
      { // FRUTAS VERMELHAS
          img: "./img/frutas/frutas_vermelhas.png",  //Imagem do Produto
          nome: "Frutas Vermelhas",    //Nome do Produto
          descricao: "O Mix de Frutas Vermelhas Reis Fruit reúne framboesa, morango, mirtilo e amora em uma combinação perfeita de cores, aromas e sabores. Rico em antioxidantes, é ideal para sucos, sobremesas, iogurtes, caldas e até drinks especiais." //Descrição do Produto
      },
      { // KIWI
          img: "./img/frutas/kiwi.png",  //Imagem do Produto
          nome: "Kiwi",    //Nome do Produto
          descricao: "Exótico e refrescante, o Kiwi Reis Fruit tem sabor suave e leve acidez. Rico em vitamina C e fibras, é perfeito para compor bowls, sobremesas e sucos funcionais." //Descrição do Produto
      },
      { // MARACUJÁ
          img: "./img/frutas/maracuja.png",  //Imagem do Produto
          nome: "Maracujá",    //Nome do Produto
          descricao: "O Maracujá Reis Fruit é sinônimo de frescor e praticidade. Polpa pura, com sabor intenso e aroma marcante. Ideal para sucos naturais, sobremesas e caldas, sem perder nada do sabor original da fruta." //Descrição do Produto
      },
      { // ACEROLA
          img: "./img/frutas/acerola.png",  //Imagem do Produto
          nome: "Acerola",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // AMORA
          img: "./img/frutas/amora.png",  //Imagem do Produto
          nome: "Amora",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // COCO
          img: "./img/frutas/coco.png",  //Imagem do Produto
          nome: "Coco",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // GOIABA
          img: "./img/frutas/goiaba.png",  //Imagem do Produto
          nome: "Goiaba",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // MANGA
          img: "./img/frutas/manga.png",  //Imagem do Produto
          nome: "Manga",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // MIRTILO
          img: "./img/frutas/mirtilo.png",  //Imagem do Produto
          nome: "Mirtilo",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // UVA ISABEL
          img: "./img/frutas/uva_isabel.png",  //Imagem do Produto
          nome: "Uva Isabel",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // UVA VITÓRIA
          img: "./img/frutas/uva_vitoria.png",  //Imagem do Produto
          nome: "Uva Vitória",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // SERIGUELA
          img: "./img/frutas/seriguela.png",  //Imagem do Produto
          nome: "Seriguela",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // FRAMBOESA
          img: "./img/frutas/framboesa.png",  //Imagem do Produto
          nome: "Framboesa",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
    ];

    const legumesCongeladosCatalogo = [
      { // BROCOLIS
          img: "./img/legumes/brocolis.png",  //Imagem do Produto
          nome: "Brocolis",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make", //Descrição do Produto
      },
      { // BATATA
          img: "./img/legumes/batata.png",  //Imagem do Produto
          nome: "Batata",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // CENOURA CUBO
          img: "./img/legumes/cenoura_cubo.png",  //Imagem do Produto
          nome: "Cenoura em Cubos",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // CENOURA BABY
          img: "./img/legumes/cenoura_baby.png",  //Imagem do Produto
          nome: "Cenoura Baby",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // ERVILHA
          img: "./img/legumes/ervilha.png",  //Imagem do Produto
          nome: "Ervilha",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // MACAXEIRA
          img: "./img/legumes/macaxeira.png",  //Imagem do Produto
          nome: "Macaxeira",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // MILHO
          img: "./img/legumes/milho.png",  //Imagem do Produto
          nome: "Milho",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // VAGEM
          img: "./img/legumes/vagem.png",  //Imagem do Produto
          nome: "Vagem",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // ESPINAFRE
          img: "./img/legumes/espinafre.png",  //Imagem do Produto
          nome: "Espinafre",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // SELETA PRIMAVERA
          img: "./img/legumes/seleta_primavera.png",  //Imagem do Produto
          nome: "Seleta Primavera",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // COUVE FLOR
          img: "./img/legumes/couve_flor.png",  //Imagem do Produto
          nome: "Couve Flor",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
      { // JARDINEIRA
          img: "./img/legumes/jardineira.png",  //Imagem do Produto
          nome: "Jardineira",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
      },
    ];

    let category = "Frutas Congeladas";

    const localCatalog = document.getElementById("catalog-slide");

    // PEGANDO OS BOTÕES DAS CATEGORIAS
    const btnCategory1 = document.getElementById('btn-category1');
    const btnCategory2 = document.getElementById('btn-category2');
    const btnCategory3 = document.getElementById('btn-category3');

    const btnCategories = document.querySelectorAll('.catalog-category');

    btnCategory1.addEventListener(('click'), () => {
      btnCategories.forEach(element => {
        element.classList.remove("active"); 
      })

      btnCategory1.classList.add("active");
      
      category = "Frutas Congeladas";
      deletarItemsCatalog();
      inserirProdutos();
    });

    btnCategory2.addEventListener(('click'), () => {
      btnCategories.forEach(element => {
        element.classList.remove("active");
      })

      btnCategory2.classList.add("active");
      
      category = "Legumes Congelados";
      deletarItemsCatalog();
      inserirProdutos();
    });

    btnCategory3.addEventListener(('click'), () => {
      btnCategories.forEach(element => {
        element.classList.remove("active");
      })

      btnCategory3.classList.add("active");
      
      category = "Frutas Naturais";
    
      deletarItemsCatalog();      
      inserirProdutos();
    });

    function deletarItemsCatalog(){
      let listaProdutosExistentes = document.querySelectorAll('.item');

      listaProdutosExistentes.forEach(element => {
        element.remove();
      });
    }
    

    // INSERINDO OS PRODUTOS
    function inserirProdutos() {
    
      if(category == "Frutas Congeladas"){
        frutasCongeladasCatalogo.forEach((produto, index) => {
          const cards = document.createElement("div") ;
          cards.classList.add("item");
          cards.setAttribute("style", `background-image: url(${produto.img})`);     

          if(index == 0){
            cards.classList.add("show");
          }


          const templateProdutos = `
              <div class="content">
                  <div class="name">${produto.nome}</div>
                  <div class="des">${produto.descricao}</div>
                  <button>See More</button>
              </div>

              <div class="container-image" style="background-image: url(${produto.img});">
              
              </div>            
          `;

          cards.innerHTML = templateProdutos;

          localCatalog.appendChild(cards);
        });
      }

      if(category == "Legumes Congelados"){
        legumesCongeladosCatalogo.forEach((produto, index) => {
          const cards = document.createElement("div") ;
          cards.classList.add("item");
          cards.setAttribute("style", `background-image: url(${produto.img})`);     

          if(index == 0){
            cards.classList.add("show");
          }


          const templateProdutos = `
              <div class="content">
                  <div class="name">${produto.nome}</div>
                  <div class="des">${produto.descricao}</div>
                  <button>See More</button>
              </div>

              <div class="container-image" style="background-image: url(${produto.img});">
              
              </div>            
          `;

          cards.innerHTML = templateProdutos;

          localCatalog.appendChild(cards);
        });
      }
     
    }

    inserirProdutos();

// =============== INSERIR CATALOGO DE PRODUTOS =================



// ANIMAÇÃO DOS CARDS NA SEÇÃO DE DÚVIDAS

const buttonArrow = document.querySelectorAll(".icon-show");

buttonArrow.forEach((button) => {
  button.addEventListener("click", () => {
    const boxDoubts = button.closest(".box-doubts");

    if (!boxDoubts.classList.contains("active")) {
      document.querySelectorAll(".box-doubts.active").forEach((element) => {
        element.classList.remove("active");
      });

      boxDoubts.classList.add("active");
    } else {
      document.querySelectorAll(".box-doubts.active").forEach((element) => {
        element.classList.remove("active");
      });
    }
  });
});

// FIM DA ANIMAÇÃO DOS CARDS NA SEÇÃO DE DÚVIDAS =======

const section = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

section.forEach((div) => observer.observe(div));



// ANIMAÇÃO DO SLIDER DE PRODUTOS

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");


function pullTheNextOne(){
  let items = document.querySelectorAll(".catalog-slide .item");

  document.querySelector(".catalog-slide").appendChild(items[0]);

  items[1].classList.add("show");
  items[0].classList.remove("show");
}

function pullThePreviousOne(){
  let items = document.querySelectorAll(".item");
  document.querySelector(".catalog-slide").prepend(items[items.length - 1]); // here the length of items = 6
  
  items[0].classList.remove("show");
  items[items.length -1].classList.add("show");
}

next.addEventListener("click", function () {
  pullTheNextOne();
});

prev.addEventListener("click", function () {
  pullThePreviousOne();
});

// FIM ANIMAÇÃO DO SLIDER DE PRODUTOS

// Seleciona o contêiner principal do slider
const slider = document.querySelector('.catalog-slide');

// Variáveis de controle do estado do "arrastar"
let isDown = false;   // controla se o botão/tela está sendo pressionado
let startX;           // posição inicial do clique/toque
let scrollOut;        // posição final do scroll quando solta o mouse

// --- EVENTOS PARA TOUCH (celulares / tablets) ---

// Quando o usuário toca na tela
slider.addEventListener('touchstart', (e) => {
  isDown = true;                     // marca que o arraste começou
  startX = e.touches[0].pageX - slider.offsetLeft;  // calcula a posição do clique (relativa ao slider)
});

// Quando o usuário tira o dedo da tela
slider.addEventListener('touchend', (e) => {
  isDown = false;                    // encerra o arraste
 scrollOut = e.changedTouches[0].pageX - slider.offsetLeft; // calcula a posição do clique 
 
  let verif = startX - scrollOut;         //Calcula a diferença do scrollOut e o startX

  if(scrollOut < startX & verif > 50){   // compara se scrollOut é menor que startX  e se a diferença é maior que 100
    pullTheNextOne();
  }

  if(scrollOut > startX & verif < -50){   // compara se scrollOut é maior que startX  e se a diferença é menor que 100
    pullThePreviousOne();
  }

});

// Quando o usuário move o dedo na tela
slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;               // se não estiver tocando, não faz nada
});