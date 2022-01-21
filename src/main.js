import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ShopPage from "./pages/shop";
import DetailNewPage from "./pages/detailNewPage";
import PageNotFound from "./pages/pageNotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/admin/dashboard";
import NewsAdmin from "./pages/admin/news/newsAdmin";
import AddNewsAdmin from "./pages/admin/news/addNews";
import EditNewsAdmin from "./pages/admin/news/editNewsAdmin";
// hello
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
        render(Dashboard.print());
    },
    "/admin/news": () => {
        render(NewsAdmin.print());
    },
    "/admin/news/add": () => {
        render(AddNewsAdmin.print());
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        render(EditNewsAdmin.print(id));
    },
});
router.notFound(() => { render(PageNotFound.print()); });
router.resolve();
