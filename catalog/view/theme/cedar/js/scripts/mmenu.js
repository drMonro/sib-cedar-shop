const mmenu = () => {
    document.addEventListener(
        "DOMContentLoaded", () => {
            new Mmenu( "#my-menu", {
                "setSelected": {
                    "hover": true,
                    "parent": true
                },
                navbar: {
                    title: '<img src="catalog/view/theme/cedar/image/svg/exit.svg" alt="Выйти из меню">'
                },
                "extensions": [
                    // "position-back",
                    "position-front",
                    "position-right",
                    'pagedim-black'
                ],
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
        }
    );
};

export {mmenu};

