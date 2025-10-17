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


// CARDS PARA O CARROSSEL DE CLIENTES

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

// FIM CARDS PARA INSERIR NO CARROSSEL ========


// INSERIR CATALOGO DE PRODUTOS
    // CARDS PARA O CARROSSEL DE CLIENTES

    // INSERIR IMAGENS DO CARROSSEL DE CLIENTES
    const produtosCatalogo = [
    {
        img: "Morango",  //Imagem do Produto
        nome: "Morango",    //Nome do Produto
        descricao: "O Morango Reis Fruit traz o equilíbrio perfeito entre doçura e acidez. Colhido fresco e congelado logo após a colheita, mantém cor vibrante e sabor intenso. Perfeito para vitaminas, sobremesas e drinks.", //Descrição do Produto
        link:"",
    },
    {
        img: "",  //Imagem do Produto
        nome: "Reis Fruit2",    //Nome do Produto
        descricao: "texto aqui" //Descrição do Produto
    },
    {
        img: "",  //Imagem do Produto
        nome: "Reis Fruit3",    //Nome do Produto
        descricao: "texto aqui" //Descrição do Produto
    },
    {
        img: "",  //Imagem do Produto
        nome: "Reis Fruit4",    //Nome do Produto
        descricao: "texto aqui" //Descrição do Produto
    },
    {
        img: "",  //Imagem do Produto
        nome: "Reis Fruit5",    //Nome do Produto
        descricao: "texto aqui" //Descrição do Produto
    },
    {
        img: "",  //Imagem do Produto
        nome: "Reis Fruit6",    //Nome do Produto
        descricao: "texto aqui" //Descrição do Produto
    },
    ];

    const localCarouselG = document.getElementById("");
    const localCarousel2G = document.getElementById("");

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

// FIM CARDS PARA INSERIR NO CARROSSEL ========

// FIM - INSERIR CATALOGO DE PRODUTOS


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
