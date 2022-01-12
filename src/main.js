// const menuList = ["Menu 1", "menu 2", "menu 3"];
// const menuElement = document.querySelector("#menu");

// if (menuElement) {
//     for (let i = 0; i < menuList.length; i++) {
//         menuElement.innerHTML
//       += `<li> ${menuList[i]} </li>  `;
//     }
// }

import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ShopPage from "./pages/shop";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById("app").innerHTML = content.print();
};
router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    },
    "/shop": () => {
        render(ShopPage);
    },
});
router.notFound(() => { console.log("Page not found!"); });
router.resolve();
