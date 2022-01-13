import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ShopPage from "./pages/shop";
import DetailNewPage from "./pages/detailNewPage";
import PageNotFound from "./pages/pageNotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

// để không bị load trang
const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById("app").innerHTML = content;
};
router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    "/shop": () => {
        render(ShopPage.print());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        render(DetailNewPage.print(id));
    },
    "/signup": () => {
        render(Signup.print());
    },
    "/signin": () => {
        render(Signin.print());
    },
    "/admin/dashboard": () => {
        render(Signin.print());
    },
    "/admin/news": () => {
        render(Signin.print());
    },
    "/admin/news/add": () => {
        render(Signin.print());
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        render(Signin.print(id));
    },
});
router.notFound(() => { render(PageNotFound.print()); });
router.resolve();
