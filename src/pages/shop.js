import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";

const ShopPage = {
    print() {
        return /* html */` 
        <header>
        ${Header.print()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.print()}
                </div>
                <div class="">
                <h2 class="my-3 text-[#283054] text-2xl font-bold uppercase">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                   SHOP
                </div>
                </div>
                <div class="">
                <h2 class="my-3 text-[#292a49] text-2xl font-bold uppercase">Hoạt động sinh viên</h2>
                <div class="grid grid-cols-3 gap-8">
                SHOP
                </div>
                </div>
            </main>
            <footer class="mt-3 py-3 bg-[#283054] text-white text-center">
                ${Footer.print()}
            </footer>
        `;
    },
};

export default ShopPage;
