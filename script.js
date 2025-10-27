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
          alt: "morango congelado",
      },
      { // ABACAXI
          img: "./img/frutas/abacaxi.png",  //Imagem do Produto
          nome: "Abacaxi",    //Nome do Produto
          descricao: "Refrescante e naturalmente doce, o Abacaxi Reis Fruit é selecionado no ponto ideal de maturação e congelado rapidamente para preservar sabor e nutrientes. Ideal para sucos, sobremesas e preparos culinários que pedem um toque tropical.", //Descrição do Produto
          alt: "Abacaxi congelado",
      },
      { // CAJÁ
          img: "./img/frutas/caja.png",  //Imagem do Produto
          nome: "Cajá",    //Nome do Produto
          descricao: "Com sabor marcante e levemente ácido, o Cajá Reis Fruit é a escolha ideal para sucos, geleias e coquetéis. Rico em vitamina C, leva o frescor do Nordeste direto para sua mesa.", //Descrição do Produto
          alt: "Cajá congelado",
      },
      { // FRUTAS VERMELHAS
          img: "./img/frutas/frutas_vermelhas.png",  //Imagem do Produto
          nome: "Frutas Vermelhas",    //Nome do Produto
          descricao: "O Mix de Frutas Vermelhas Reis Fruit reúne framboesa, morango, mirtilo e amora em uma combinação perfeita de cores, aromas e sabores. Rico em antioxidantes, é ideal para sucos, sobremesas, iogurtes, caldas e até drinks especiais.", //Descrição do Produto
          alt: "frutas vermelhas congelada",
      },
      { // KIWI
          img: "./img/frutas/kiwi.png",  //Imagem do Produto
          nome: "Kiwi",    //Nome do Produto
          descricao: "Exótico e refrescante, o Kiwi Reis Fruit tem sabor suave e leve acidez. Rico em vitamina C e fibras, é perfeito para compor bowls, sobremesas e sucos funcionais.", //Descrição do Produto
          alt: "Kiwi congelado",
      },
      { // MARACUJÁ
          img: "./img/frutas/maracuja.png",  //Imagem do Produto
          nome: "Maracujá",    //Nome do Produto
          descricao: "O Maracujá Reis Fruit é sinônimo de frescor e praticidade. Polpa pura, com sabor intenso e aroma marcante. Ideal para sucos naturais, sobremesas e caldas, sem perder nada do sabor original da fruta.", //Descrição do Produto
          alt: "Maracujá congelado",
          
      },
      { // ACEROLA
          img: "./img/frutas/acerola.png",  //Imagem do Produto
          nome: "Acerola",    //Nome do Produto
          descricao: "Rica em vitamina C e com sabor levemente ácido, a Acerola Reis Fruit é perfeita para sucos, vitaminas e sobremesas refrescantes. Colhida madura e congelada no ponto ideal, mantém cor vibrante e nutrientes essenciais.", //Descrição do Produto
          alt: "Acerola congelado",
      },
      { // AMORA
          img: "./img/frutas/amora.png",  //Imagem do Produto
          nome: "Amora",    //Nome do Produto
          descricao: "Com sabor adocicado e suave toque ácido, a Amora Reis Fruit é ideal para compotas, caldas, sobremesas e drinks. Fonte natural de antioxidantes, traz o melhor da fruta em sua forma mais prática e saborosa.", //Descrição do Produto
          alt: "Amora congelado",
      },
      { // COCO
          img: "./img/frutas/coco.png",  //Imagem do Produto
          nome: "Coco",    //Nome do Produto
          descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make", //Descrição do Produto
          alt: "Coco congelado",
      },
      { // GOIABA
          img: "./img/frutas/goiaba.png",  //Imagem do Produto
          nome: "Goiaba",    //Nome do Produto
          descricao: "A Goiaba Fatiada Reis Fruit mantém o sabor marcante e o aroma tropical da fruta fresca. Ideal para sucos, doces e sobremesas, é rica em vitamina C e fibras, com cortes padronizados que facilitam o preparo.", //Descrição do Produto
          alt: "goiaba congelado",
      },
      { // MANGA
          img: "./img/frutas/manga.png",  //Imagem do Produto
          nome: "Manga",    //Nome do Produto
          descricao: "Com doçura natural e textura cremosa, a Manga em Pedaços Reis Fruit é perfeita para smoothies, sobremesas e receitas tropicais. Congelada logo após o corte, conserva o sabor e o frescor da fruta madura.", //Descrição do Produto
          alt: "Manga congelado",
      },
      { // MIRTILO
          img: "./img/frutas/mirtilo.png",  //Imagem do Produto
          nome: "Mirtilo",    //Nome do Produto
          descricao: "O Mirtilo Reis Fruit é uma explosão de sabor e antioxidantes. Pequeno no tamanho e gigante nos benefícios, é ideal para bolos, iogurtes, caldas e bebidas. Frescor e qualidade premium em cada unidade.", //Descrição do Produto
          alt: "Mirtilo congelado",
      },
      { // UVA ISABEL
          img: "./img/frutas/uva_isabel.png",  //Imagem do Produto
          nome: "Uva Isabel",    //Nome do Produto
          descricao: "A Uva Isabel Reis Fruit oferece o sabor característico das uvas escuras, com doçura equilibrada e aroma marcante. Ideal para sucos, geleias e sobremesas, pronta para uso e sem perda de qualidade.", //Descrição do Produto
          alt: "Uva isabel congelada",
      },
      { // UVA VITÓRIA
          img: "./img/frutas/uva_vitoria.png",  //Imagem do Produto
          nome: "Uva Vitória",    //Nome do Produto
          descricao: "A Uva Vitória Reis Fruit combina praticidade e sabor intenso. Sem sementes, é perfeita para consumo direto, sobremesas, sucos e receitas gourmet. Textura firme e sabor naturalmente doce.", //Descrição do Produto
          alt: "Uva vitoria congelado",
      },
      { // SERIGUELA
          img: "./img/frutas/seriguela.png",  //Imagem do Produto
          nome: "Seriguela",    //Nome do Produto
          descricao: "Com sabor marcante e tropical, a Seriguela Reis Fruit é pura brasilidade em forma de fruta. Ideal para sucos, caldas e sobremesas, é rica em vitaminas e mantém o frescor natural mesmo após o congelamento.", //Descrição do Produto
          alt: "Seriguela congelada",
      },
      { // FRAMBOESA
          img: "./img/frutas/framboesa.png",  //Imagem do Produto
          nome: "Framboesa",    //Nome do Produto
          descricao: "Delicada e aromática, a Framboesa Reis Fruit é rica em antioxidantes e tem sabor levemente ácido. Perfeita para sobremesas, caldas e smoothies, traz cor e sofisticação a qualquer preparo.", //Descrição do Produto
          alt: "Framboesa congelada",
      },
    ];

    const legumesCongeladosCatalogo = [
      { // BROCOLIS
          img: "./img/legumes/brocolis.png",  //Imagem do Produto
          nome: "Brocolis",    //Nome do Produto
          descricao: "O Brócolis Reis Fruit é selecionado e congelado logo após o corte para preservar cor, sabor e nutrientes. Ideal para acompanhamentos, tortas e refogados, mantendo textura firme e frescor de colheita o ano todo.", //Descrição do Produto
          alt: "brocolis congelado",
      },
      { // BATATA
          img: "./img/legumes/batata.png",  //Imagem do Produto
          nome: "Batata",    //Nome do Produto
          descricao: "A Batata em Cubos Reis Fruit é prática e versátil, ideal para sopas, purês, tortas e pratos do dia a dia. Congelada no ponto certo, mantém a textura e o sabor da batata fresca, pronta para ir direto à panela.", //Descrição do Produto
          alt: "Batata congelada",
      },
      { // CENOURA CUBO
          img: "./img/legumes/cenoura_cubo.png",  //Imagem do Produto
          nome: "Cenoura em Cubos",    //Nome do Produto
          descricao: "A Cenoura em Cubos Reis Fruit traz praticidade e cor para suas receitas. Rica em betacaroteno e fibras, é perfeita para refogados, sopas e acompanhamentos, mantendo o sabor natural e a textura crocante.", //Descrição do Produto
          alt: "Cenoura cubos congelada",
      },
      { // CENOURA BABY
          img: "./img/legumes/cenoura_baby.png",  //Imagem do Produto
          nome: "Cenoura Baby",    //Nome do Produto
          descricao: "A Cenoura Baby Reis Fruit é delicada e saborosa, congelada logo após a colheita para preservar o frescor. Ideal para saladas, acompanhamentos e pratos gourmet, une praticidade e apresentação impecável.", //Descrição do Produto
          alt: "Cenoura baby congelada",
      },
      { // ERVILHA
          img: "./img/legumes/ervilha.png",  //Imagem do Produto
          nome: "Ervilha",    //Nome do Produto
          descricao: "A Ervilha Reis Fruit é colhida fresca e congelada rapidamente para garantir cor vibrante, textura macia e sabor adocicado. Perfeita para arroz, sopas, purês e acompanhamentos saudáveis.", //Descrição do Produto
          alt: "Ervilha congelada",
      },
      { // MACAXEIRA
          img: "./img/legumes/macaxeira.png",  //Imagem do Produto
          nome: "Macaxeira",    //Nome do Produto
          descricao: "A Macaxeira Reis Fruit é descascada, cortada e congelada pronta para o preparo. Textura macia e sabor caseiro em cada pedaço. Ideal para cozidos, purês, caldos e pratos típicos do dia a dia.", //Descrição do Produto
          alt: "macaxeira congelada",
      },
      { // MILHO
          img: "./img/legumes/milho.png",  //Imagem do Produto
          nome: "Milho",    //Nome do Produto
          descricao: "O Milho Reis Fruit é doce, suculento e cheio de sabor natural. Congelado logo após a colheita, mantém o frescor e os nutrientes. Ideal para saladas, tortas, refogados e pratos rápidos.", //Descrição do Produto
          alt: "milho congelado",
      },
      { // VAGEM
          img: "./img/legumes/vagem.png",  //Imagem do Produto
          nome: "Vagem",    //Nome do Produto
          descricao: "A Vagem Reis Fruit é cortada e congelada no ponto certo, preservando cor, textura e nutrientes. Perfeita para saladas, refogados e acompanhamentos leves. Frescor garantido em cada porção.", //Descrição do Produto
          alt: "vagem congelada",
      },
      { // ESPINAFRE
          img: "./img/legumes/espinafre.png",  //Imagem do Produto
          nome: "Espinafre",    //Nome do Produto
          descricao: "O Espinafre Reis Fruit é selecionado e congelado fresco para preservar ferro, fibras e vitaminas. Ideal para omeletes, tortas, cremes e refogados. Pronto para uso e cheio de sabor natural.", //Descrição do Produto
          alt: "espinafre congelada",
      },
      { // SELETA PRIMAVERA
          img: "./img/legumes/seleta_primavera.png",  //Imagem do Produto
          nome: "Seleta Primavera",    //Nome do Produto
          descricao: "A Seleta Primavera Reis Fruit combina cenoura, brócolis, vagem, ervilha e milho em uma mistura colorida, nutritiva e prática. Perfeita para saladas, arroz, tortas e acompanhamentos. Sabor e equilíbrio em cada porção.", //Descrição do Produto
          alt: "seleta primavera congelada",
      },
      { // COUVE FLOR
          img: "./img/legumes/couve_flor.png",  //Imagem do Produto
          nome: "Couve Flor",    //Nome do Produto
          descricao: "A Couve-Flor Reis Fruit é delicada e nutritiva, congelada logo após o corte para preservar textura e sabor. Ideal para gratinados, purês e pratos leves, mantendo qualidade e praticidade no preparo.", //Descrição do Produto
          alt: "couve flor congelada",
      },
      { // JARDINEIRA
          img: "./img/legumes/jardineira.png",  //Imagem do Produto
          nome: "Jardineira",    //Nome do Produto
          descricao: "A Jardineira Reis Fruit traz uma mistura clássica de batata, cenoura, vagem, ervilha e milho — colorida, nutritiva e prática. Pronta para o preparo de saladas, arroz, carnes e refogados. O equilíbrio ideal entre sabor e praticidade.", //Descrição do Produto
          alt: "jardineira congelada",
      },
    ];

    let category = "Frutas Congeladas";

    const localCatalog = document.getElementById("catalog-slide");

    const localCatalog1 = document.querySelector(".container-catalog2 .box-container-products");

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
      trocarCatalogo();
    });

    btnCategory2.addEventListener(('click'), () => {
      btnCategories.forEach(element => {
        element.classList.remove("active");
      })

      btnCategory2.classList.add("active");
      
      category = "Legumes Congelados";
      trocarCatalogo();
    });

    btnCategory3.addEventListener(('click'), () => {
      btnCategories.forEach(element => {
        element.classList.remove("active");
      })

      btnCategory3.classList.add("active");
      
      category = "Frutas Naturais";
      trocarCatalogo();
      
    });

    function trocarCatalogo(){
      deletarItemsCatalog1();      
      inserirProdutosCatalog1();
      deletarItemsCatalog2();      
      inserirProdutosCatalog2();
      observed();
    }

    function deletarItemsCatalog1(){
      let listaProdutosExistentes = document.querySelectorAll('.item');

      listaProdutosExistentes.forEach(element => {
        element.remove();
      });
    }
    function deletarItemsCatalog2(){
      let listaProdutosExistentes1 = document.querySelectorAll('.box-products');

      listaProdutosExistentes1.forEach(element => {
        element.remove();
      });
    
    }

    // INSERIR OS PRODUTOS DO CATALOGO 1
    function inserirProdutosCatalog1() {
      console.log(category);

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
    
    // INSERIR OS PRODUTOS DO CATALOGO 2
    function inserirProdutosCatalog2() 
    {
      console.log(category);
      if(category == "Frutas Congeladas")
      {
        frutasCongeladasCatalogo.forEach((produto, index) => {
          const cards = document.createElement("div") ;
          cards.classList.add("box-products");
          cards.classList.add("reveal");

          const templateProdutos = `
               <div class="overlayer"></div>
                <div class="container-name-product">
                    <h3>${produto.nome}</h3>
                </div>
                
                <div class="container">
                    <img src="${produto.img}" alt="${produto.alt}">
                    <p class="details-product">${produto.descricao}</p>
                </div>
                <div class="container-button">
                    <a class="btn" href="#">Ver Detalhes</a>
                </div>         
          `;

          cards.innerHTML = templateProdutos;

          localCatalog1.appendChild(cards);
        });
      }
      if(category == "Legumes Congelados")
      {
        legumesCongeladosCatalogo.forEach((produto, index) => {
          const cards = document.createElement("div") ;
          cards.classList.add("box-products");
          cards.classList.add("reveal");

          const templateProdutos = `
               <div class="overlayer"></div>
                <div class="container-name-product">
                    <h3>${produto.nome}</h3>
                </div>
                
                <div class="container">
                    <img src="${produto.img}" alt="${produto.alt}">
                    <p class="details-product">${produto.descricao}</p>
                </div>
                <div class="container-button">
                    <a class="btn" href="#">Ver Detalhes</a>
                </div>         
          `;

          cards.innerHTML = templateProdutos;

          localCatalog1.appendChild(cards);
        });
      }
    }

    inserirProdutosCatalog1();

    inserirProdutosCatalog2();

// ===============================


// ========== TROCAR LAYOUT DO CATÁLOGO ==========
const btnShowCatalogScreen = document.querySelector('.icon-screen');
const btnShowCatalogGrid = document.querySelector('.icon-grid');

btnShowCatalogGrid.addEventListener('click', exchangeCatalog);
btnShowCatalogScreen.addEventListener('click', exchangeCatalog);

function exchangeCatalog(){
  let catalog1 = document.querySelector('.container-catalog1');
  let catalog2 = document.querySelector('.container-catalog2');

  if(catalog1.style.display == "none" ){ // SE O CATÁLOGO INVISÍVEL
    btnShowCatalogGrid.style.display = "block";
    btnShowCatalogScreen.style.display = "none";

    catalog1.style.display = "block";
    catalog2.style.display = "none";
    
    deletarItemsCatalog2();
    inserirProdutosCatalog2();  
  } else { // SE O CATÁLOGO VISÍVEL
    btnShowCatalogGrid.style.display = "none";
    btnShowCatalogScreen.style.display = "block";
    
    catalog1.style.display = "none";
    catalog2.style.display = "block";
    
    deletarItemsCatalog1();
    inserirProdutosCatalog1();
  }
    
  console.log(category)
}

// ===============================


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

// ==============================


// ANIMAÇÃO DAS SEÇÕES PELA ROLAGEM DO SCROLL

function observed(){
  let section = document.querySelectorAll(".reveal");

  let observer = new IntersectionObserver(
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
}

observed();
// ===============================


// ANIMAÇÃO DO SLIDER DE PRODUTOS

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');


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

next.addEventListener('click', () => {
  pullTheNextOne();
});

prev.addEventListener('click', () => {
  pullThePreviousOne();
});

// ===============================



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