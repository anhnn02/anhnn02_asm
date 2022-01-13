import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = {
    print() {
        return /* html */` 
        <div class="max-w-5xl m-auto">
        <header>
        ${Header.print()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.print()}
                </div>
                <div class="">
                <div class="grid grid-cols-3 gap-8">
                   ABOUT
                </div>
                </div>
                <div class="">
                <div class="grid grid-cols-3 gap-8">
                    ABOUT
                </div>
                </div>
            </main>
            <footer class="mt-3 py-3 bg-[#283054] text-white text-center">
                ${Footer.print()}
            </footer>
        </div>

        `;
    },
};

export default AboutPage;
