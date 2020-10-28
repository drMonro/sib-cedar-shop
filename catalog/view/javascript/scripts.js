'use strict';

const soloProduct = () => {
  console.log(333);
};

const mmenu = () => {
  document.addEventListener("DOMContentLoaded", () => {
    new Mmenu("#my-menu", {
      "setSelected": {
        "hover": true,
        "parent": true
      },
      navbar: {
        title: '<img src="catalog/view/theme/cedar/image/svg/exit.svg" alt="Выйти из меню">'
      },
      "extensions": [// "position-back",
      "position-front", "position-right", 'pagedim-black'],
      // "pageScroll": true,
      pageScroll: {
        "scroll": true
      }
    }, {
      pageScroll: {
        "scrollOffset": 300,
        "updateOffset": 50
      }
    });
  });
};

const mhead = () => {
  document.addEventListener("DOMContentLoaded", () => {
    new Mhead("#my-header", {
      unpin: 1200,
      hamburger: {
        animation: "colapse"
      }
    });
  });
};

const header = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let content = document.querySelector('#content');
    let header = document.querySelector('#my-header');
    let headerHeight = getComputedStyle(header).height;
    console.log(headerHeight);
    content.style.bottom = headerHeight;
  });
};

class App {
  static init() {
    mmenu();
    soloProduct();
    mhead();
    header();
  }

}

App.init();
window.App = App;
