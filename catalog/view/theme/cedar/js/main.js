import js from "./scripts/js";


const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

class App {
    static init() {
        // if (isSafari) {
        //     window.console.log(`isSafari`);
        // }
        // if (window.objectFitImages) {
        //   window.objectFitImages();
        // }

        js();


    }
}

App.init();
window.App = App;
