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
        img: "./img/morango.png",  //Imagem do Produto
        nome: "Morango",    //Nome do Produto
        descricao: "O Morango Reis Fruit traz o equilíbrio perfeito entre doçura e acidez. Colhido fresco e congelado logo após a colheita, mantém cor vibrante e sabor intenso. Perfeito para vitaminas, sobremesas e drinks.", //Descrição do Produto
    },
    { // ABACAXI
        img: "./img/abacaxi.png",  //Imagem do Produto
        nome: "Abacaxi",    //Nome do Produto
        descricao: "Refrescante e naturalmente doce, o Abacaxi Reis Fruit é selecionado no ponto ideal de maturação e congelado rapidamente para preservar sabor e nutrientes. Ideal para sucos, sobremesas e preparos culinários que pedem um toque tropical." //Descrição do Produto
    },
    { // CAJÁ
        img: "./img/caja.png",  //Imagem do Produto
        nome: "Cajá",    //Nome do Produto
        descricao: "Com sabor marcante e levemente ácido, o Cajá Reis Fruit é a escolha ideal para sucos, geleias e coquetéis. Rico em vitamina C, leva o frescor do Nordeste direto para sua mesa." //Descrição do Produto
    },
    { // FRUTAS VERMELHAS
        img: "./img/frutas_vermelhas.png",  //Imagem do Produto
        nome: "Frutas Vermelhas",    //Nome do Produto
        descricao: "O Mix de Frutas Vermelhas Reis Fruit reúne framboesa, morango, mirtilo e amora em uma combinação perfeita de cores, aromas e sabores. Rico em antioxidantes, é ideal para sucos, sobremesas, iogurtes, caldas e até drinks especiais." //Descrição do Produto
    },
    { // KIWI
        img: "./img/kiwi.png",  //Imagem do Produto
        nome: "Kiwi",    //Nome do Produto
        descricao: "Exótico e refrescante, o Kiwi Reis Fruit tem sabor suave e leve acidez. Rico em vitamina C e fibras, é perfeito para compor bowls, sobremesas e sucos funcionais." //Descrição do Produto
    },
    { // MARACUJÁ
        img: "./img/maracuja.png",  //Imagem do Produto
        nome: "Maracujá",    //Nome do Produto
        descricao: "O Maracujá Reis Fruit é sinônimo de frescor e praticidade. Polpa pura, com sabor intenso e aroma marcante. Ideal para sucos naturais, sobremesas e caldas, sem perder nada do sabor original da fruta." //Descrição do Produto
    },
    ];

    const legumesCongeladosCatalogo = [
    { // MORANGO
        img: "./img/legumes/brocolis.png",  //Imagem do Produto
        nome: "Brocolis",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make", //Descrição do Produto
    },
    { // ABACAXI
        img: "./img/legumes/cenoura em cubos",  //Imagem do Produto
        nome: "Cenoura em Cubos",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    { // CAJÁ
        img: "./img/legumes/ervilha.png",  //Imagem do Produto
        nome: "Ervilha",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    { // FRUTAS VERMELHAS
        img: "./img/legumes/macaxeira.png",  //Imagem do Produto
        nome: "Macaxeira",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    { // KIWI
        img: "./img/legumes/milho.png",  //Imagem do Produto
        nome: "Milho",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    { // MARACUJÁ
        img: "./img/legumes/vagem.png",  //Imagem do Produto
        nome: "Vagem",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    ];

    let category = "Frutas Congeladas";

    const localCatalog = document.getElementById("catalog-slide");

    // PEGANDO OS BOTÕES DAS CATEGORIAS
    const btnCategory1 = document.getElementById('btn-category1');
    const btnCategory2 = document.getElementById('btn-category2');
    const btnCategory3 = document.getElementById('btn-category3');

    btnCategory1.addEventListener(('click'), () => {
      category = "Frutas Congeladas";
      console.log(category);
      inserirProdutos();
    });

    btnCategory2.addEventListener(('click'), () => {
      category = "Legumes Congelados";
      console.log(category);
      inserirProdutos();
    });

    btnCategory3.addEventListener(('click'), () => {
      category = "Frutas Naturais";
      console.log(category);
      inserirProdutos();
    });
    

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

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".catalog-slide .item");

  document.querySelector(".catalog-slide").appendChild(items[0]);

  items[1].classList.add("show");
  items[0].classList.remove("show");
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".catalog-slide").prepend(items[items.length - 1]); // here the length of items = 6

  items[0].classList.remove("show");
  items[5].classList.add("show");
  console.log(items[5].textContent + "2");
  console.log(items[0].textContent + "0");
});
// FIM ANIMAÇÃO DO SLIDER DE PRODUTOS
