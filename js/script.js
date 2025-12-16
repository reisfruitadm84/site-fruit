import { exchangeCatalog } from './replaceCatalog.js';

const btnIconMobile = document.querySelector('.icon-menu-list');
const menuList = document.getElementById('navbar-mobile');
const navLinks = document.querySelectorAll('.list');


btnIconMobile.addEventListener("click", () => {
  if (menuList.style.display == "none") {
    menuList.style.display = "block";

    navLinks.forEach((link, index) => {
      link.style.animation = `effectDropdown 0.5s ease-in forwards ${
        index / 18 + 0.05
      }s`;
    });

  } else {
    fecharMenuList();

    navLinks.forEach((link, index) => {
      link.style = "none";
    });
  }
});


function verificarJanela() {
  const larguraMinima = 768;

  if (window.innerWidth >= larguraMinima) {
    fecharMenuList();
  }
}

function fecharMenuList(){
  menuList.style.display = "none";
}

window.addEventListener("resize", verificarJanela);
menuList.addEventListener("click", fecharMenuList);


// #region ANIMAÇÃO DO CARROSSEL ========
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
// #endregion

// #region CARDS PARA O CARROSSEL DE CLIENTES =========

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
        cards.classList.add("cardc");

        const templateCliente = `<img src="${cliente.img}" alt="logo-reisfruit">
                                    <h2>${cliente.nome}</h2>
                                    `;

        cards.innerHTML = templateCliente;

        cards.addEventListener('mouseenter', () => {
          pararFuncao(cliente);
        })

        cards.addEventListener('mouseleave', () => {
          retomarFuncao(cliente);
        })

        localCarousel.appendChild(cards);
    });

    clientes.forEach((cliente) => {
        const cards = document.createElement("div");
        cards.classList.add("cardc");

        const templateCliente = `<img src="${cliente.img}" alt="logo-reisfruit">
                                    <h2>${cliente.nome}</h2>
                                    `;

        cards.innerHTML = templateCliente;

        cards.addEventListener('mouseenter', () => {
          pararFuncao(cliente);
        })
        cards.addEventListener('mouseleave', () => {
          retomarFuncao(cliente);
        })

        localCarousel2.appendChild(cards);
    });
    }

    inserirClientes();

    
    function retomarFuncao(cliente){
      localCarousel.classList.remove('block');
      localCarousel2.classList.remove('block');
    }

    function pararFuncao(cliente){
      
      localCarousel.classList.add('block');
      localCarousel2.classList.add('block');
    }
  

// ================ FIM CARDS PARA INSERIR NO CARROSSEL ===============
// #endregion 

// #region INSERIR CATALOGO DE PRODUTOS ==========

    import { frutasCongeladasCatalogo } from './listFrutasCong.js'
    import { legumesCongeladosCatalogo } from './listLegumesCong.js'


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

    export let deletarItemsCatalog1 = () =>{
      let listaProdutosExistentes = document.querySelectorAll('.item');

      listaProdutosExistentes.forEach(element => {
        element.remove();
      });
    }
    export let deletarItemsCatalog2 = () =>{
      let listaProdutosExistentes1 = document.querySelectorAll('.box-products');

      listaProdutosExistentes1.forEach(element => {
        element.remove();
      });
    }

    // INSERIR OS PRODUTOS DO CATALOGO 1
    export let inserirProdutosCatalog1 = () => {

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
              </div>

              <div class="container-image" style="background-image: url(${produto.img})"></div>            
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
    export let inserirProdutosCatalog2 = () => {
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
          `;

          cards.innerHTML = templateProdutos;

          localCatalog1.appendChild(cards);
        });
      }
      
    }

    inserirProdutosCatalog1();

    inserirProdutosCatalog2();

// #endregion
  
// #region INSERIR AVALIAÇÕES ===========

const nClientes = [
  {
    nome: "Carine",
    urlImage: "https://lh3.googleusercontent.com/a/ACg8ocILV2Rnj41cdztXiIu4VqfvLA85fkJumXAgq5RsbN8qTAxEY0RU=s128-c0x00000000-cc-rp-mo-ba3",
    quantidadeEstrelas: 5,
    descricao: "Já comprei diversas vezes. Sempre fui muito bem atendida. Os produtos são todos excelentes. O custo/benefício é incrível. Desde o atendimento no whatsapp até a entrega todos são ótimos. Podem comprar, estes produtos são ótimos"
  },
  {
    nome: "Van",
    urlImage: "https://lh3.googleusercontent.com/a-/ALV-UjXiYut1iWLpvVPXm0v99s2WmZToPtdQgG3Y2v1c4mINAhr45YxHog=s128-c0x00000000-cc-rp-mo-ba3",
    quantidadeEstrelas: 5,
    descricao: "Hoje comprei bastante coisa, primeira vez que peço. Atendimento mto bom, entrega rápida e amei os produtos, tudo melhor do que eu esperava. Os produtos são de qualidade, bem embalados, e dá pra perceber que são MUITO bem feitos, bem melhor que os de mercado e tbm bem mais em conta. E não, não conheço ninguém do local, vim aqui elogiar porque merecem. Vou recomendar à todos que conheço. Sucesso à empresa! 👏🏻"
  },
  {
    nome: "Maria",
    urlImage: "https://lh3.googleusercontent.com/a-/ALV-UjVDHC_zXz2ATosghH2lCFxKH0MC0TXL9FUj-InE6NnV7AdDzO1URg=s128-c0x00000000-cc-rp-mo",
    quantidadeEstrelas: 5,
    descricao: "Eles são maravilhosos, os atendentes super prestativos, nota 10 em todos requisitos."
  },
  {
    nome: "Rayane",
    urlImage: "https://lh3.googleusercontent.com/a-/ALV-UjVGeG3ClpQpDOiS3UrIrTK9mO-pixgYM_NPgWvCqRDV3DyoKo4OFw=s128-c0x00000000-cc-rp-mo-ba4",
    quantidadeEstrelas: 5,
    descricao: "Produto de qualidade bem embalado, só tenho a reclamar do atendimento no WhatsApp, pessoa um pouco grosseira sem vontade de falar, não enviaram meu troco, colocaram o horário da entrega errado. Comprei novamente e o atendimento foi diferente, bem melhor."
  }
];

const spaceReview1 = document.getElementById('container-carousel-review1');
const spaceReview2 = document.getElementById('container-carousel-review2');
const showReview = document.getElementById('show-review');
const btnCloseReview = document.getElementById('close-review');
const localShowReview = document.getElementById('container-show-review');

function inserirAvaliacoes() {
  nClientes.forEach((cliente) => {
    const cards = document.createElement('div');
    cards.classList.add('box');

    const templateCardReview = `
        <div class="container-user">
            <div class="container-assessment">
                <h3>${cliente.nome}</h3>
                <div class="stars">  
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                </div>
            </div>
            <img class="user" src="${cliente.urlImage}" alt="foto-cliente">
        </div>

        <div class="container-message">
          <p>${cliente.descricao}</p>
        </div>       
        <p class="btn-see-more">Leia Mais...</p>         
      </div>    
    `

    cards.innerHTML = templateCardReview;

    
    cards.addEventListener('mouseenter', () => {
      pausarAvaliacao();
    })
    cards.addEventListener('mouseleave', () => {
      retomarAvaliacao();
    })
    cards.addEventListener('click', () => {
      aparecerAvaliacao(cliente);
    })


    spaceReview1.appendChild(cards);
    
  });

  nClientes.forEach((cliente) => {
    const cards = document.createElement('div');
    cards.classList.add('box');

    const templateCardReview = `
        <div class="container-user">
            <div class="container-assessment">
                <h3>${cliente.nome}</h3>
                <div class="stars">  
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                </div>
            </div>
            <img class="user" src="${cliente.urlImage}" alt="foto-cliente">
        </div>

        <div class="container-message">
          <p>${cliente.descricao}</p>
        </div>  
        <p class="btn-see-more">Leia Mais...</p>              
      </div>    
    `

    cards.innerHTML = templateCardReview;

    
    cards.addEventListener('click', () => {
      aparecerAvaliacao(cliente);
    })
    cards.addEventListener('mouseenter', () => {
      pausarAvaliacao();
    })
    cards.addEventListener('mouseleave', () => {
      retomarAvaliacao();
    })

    spaceReview2.appendChild(cards);
    
  })


}

inserirAvaliacoes();

function aparecerAvaliacao(cliente){
  localShowReview.innerHTML = "";

  showReview.classList.add('active');

  const cards = document.createElement('div');
  cards.classList.add('box');
  pausarAvaliacao();

  const templateCardReview = `
        <div class="container-user">
            <div class="container-assessment">
                <h3>${cliente.nome}</h3>
                <div class="stars">  
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                  <i class='fa-solid fa-star' style='color: #ffffff;'></i>
                </div>
            </div>
            <img class="user" src="${cliente.urlImage}" alt="foto-cliente">
        </div>

        <div class="container-message">
          <p>${cliente.descricao}</p>
        </div>                
      </div>    
  `

  cards.innerHTML = templateCardReview;

  localShowReview.appendChild(cards);
}

btnCloseReview.addEventListener('click', () => {
  showReview.classList.remove('active')
  retomarAvaliacao();
});

function pausarAvaliacao(){
  spaceReview1.classList.add('block');
  spaceReview2.classList.add('block');
};

function retomarAvaliacao(id){
  
  spaceReview1.classList.remove('block');
  spaceReview2.classList.remove('block');
};

// #endregion

// #region TROCAR LAYOUT DO CATÁLOGO ==========
export const btnShowCatalogScreen = document.querySelector('.icon-screen');
export const btnShowCatalogGrid = document.querySelector('.icon-grid');

btnShowCatalogGrid.addEventListener('click', exchangeCatalog);
btnShowCatalogScreen.addEventListener('click', exchangeCatalog);

// #endregion

// #region ANIMAÇÃO DOS CARDS NA SEÇÃO DE DÚVIDAS ========

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

// #endregion

// #region ANIMAÇÃO DAS SEÇÕES PELA ROLAGEM DO SCROLL ========

export let observed = () => {
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
// #endregion

// #region ANIMAÇÃO DO SLIDER DE PRODUTOS =========

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



// Seleciona o contêiner principal do slider
const slider = document.querySelector('.catalog-slide');

// Variáveis de controle do estado do "arrastar"
let isDown = false;   // controla se o botão/tela está sendo pressionado
let startX;           // posição inicial do clique/toque
let scrollOut;        // posição final do scroll quando solta o mouse

// --- EVENTOS PARA TOUCH (celulares / tablets) ---

slider.addEventListener('touchstart', (e) => {
  isDown = true;                     
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

// #endregion

// #region VALIDAÇÃO FORM E MÁSCARAS ========

  document.addEventListener("DOMContentLoaded", function () {
    const telefone = document.getElementById("telefone");
    const cnpj = document.getElementById("cnpj");

    // --- Máscara de telefone ---
    telefone.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 11) valor = valor.slice(0, 11);

      if (valor.length <= 10) {
        e.target.value = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      } else {
        e.target.value = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      }
    });

    // --- Máscara de CNPJ ---
    cnpj.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 14) valor = valor.slice(0, 14);

      e.target.value = valor.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2}).*/,
        "$1.$2.$3/$4-$5"
      );
    })

    // conexão com o banco de formulario
    const form = document.getElementById("form");
    const alertBox = document.getElementById("form-alert");

    form.addEventListener("submit", async (e) => 
      {
        e.preventDefault(); // impede o redirecionamento

        showAlert("Por favor aguarde...");

        
        const w3formData = new FormData(form);

        //CONEXÃO COM O WEB3FORMS

        w3formData.append("access_key", "aa2cd0cc-7095-435b-905d-bc54c3ecd604");
        
        const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

        if (!hCaptcha) {
            e.preventDefault();
            alert("Por favor, preencha o campo captcha.")
            return
        }

        let formOk = false;

        try {
          // Envia para o web3form manualmente
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: w3formData
          });

          const result = await response.json();

          if (result.success === true) {
            showAlert("Mensagem enviada com sucesso! Entraremos em contato em breve.", "success");
            formOk = true;
            
          } else {
            showAlert("Ocorreu um erro ao enviar. Tente novamente mais tarde.", "error");
          }
          
        } catch {
          showAlert("Falha de conexão. Verifique sua internet e tente novamente.", "error");
        }
        
        //#region APPSHT
        // if(formOk){
        //   const gsformData = new FormData(form);
          
        //   try {
        //     const req = await fetch("", {
        //       method: "POST",
        //       body: ""
        //     });

        //     const res = await req.json();

        //     if (res.success === true) {
        //       console.log("Mensagem gravada com sucesso!", "success");
        //     }

        //   } catch (err) {
        //     console.log("Ocorreu um erro ao tentar gravar na planilha.", "error");
        //   }
        // }
        //#endregion

        if(formOk){
          form.reset();
        }
      });

      

      
      // SHOW ALERT
      function showAlert(message, type) {
        alertBox.textContent = message;
        alertBox.style.display = "block";
        alertBox.className = "form-alert " + type;
        setTimeout(() => (alertBox.style.display = "none"), 4000);
      }


    });

// #endregion

// document.addEventListener('DOMContentLoaded', function () {
  
//   const elfsight = document.createElement("script");
//   elfsight.src = "https://elfsightcdn.com/platform.js";
//   elfsight.async = true;

//   elfsight.onload = function () {
    

//     const observer = new MutationObserver( () => {
//       // const elemento = document.querySelector('.review .WidgetBackground__Content-sc-386b5057-2 > a');

//       const elemento = document.querySelector('a[href^="https://elfsight.com/google-reviews-widget/?utm_source=websites&utm_medium=clients&utm_content=google-reviews&utm_term=127.0.0.1&utm_campaign=free-widget"]');
      
//       if(elemento){
//         console.log(elemento);

//         setTimeout(() => {
//           elemento.style.setProperty("display", "none", "important");
//           console.log(elemento.style.display);
          
//         }, 2000)
        
//         observer.disconnect();
        

//       }
      
//     });
    
//     observer.observe(document.body, { childList: true, subtree: true})

//   }

//   document.head.appendChild(elfsight)
// });

