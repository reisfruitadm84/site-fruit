import { inserirProdutosCatalog1, inserirProdutosCatalog2, deletarItemsCatalog1,deletarItemsCatalog2, btnShowCatalogScreen, btnShowCatalogGrid, observed
 } from './script.js';

export let exchangeCatalog = () => {
  let catalog1 = document.querySelector('.container-catalog1');
  let catalog2 = document.querySelector('.container-catalog2');

  if(catalog1.style.display == "none" ){ // SE O CATÁLOGO INVISÍVEL
    btnShowCatalogGrid.style.display = "block";
    btnShowCatalogScreen.style.display = "none";

    catalog1.style.display = "block";
    catalog2.style.display = "none";
    
    deletarItemsCatalog2();
    inserirProdutosCatalog2();  
    observed();
  } else { // SE O CATÁLOGO VISÍVEL
    btnShowCatalogGrid.style.display = "none";
    btnShowCatalogScreen.style.display = "block";
    
    catalog1.style.display = "none";
    catalog2.style.display = "block";
    
    deletarItemsCatalog1();
    inserirProdutosCatalog1();
    observed();
  }
  
}

