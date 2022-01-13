import Header from "../components/header";
import Footer from "../components/footer";

const PageNotFound = {
    print() {
        return /* html */ ` 
        <header>
            ${Header.print()}
        </header>
        <main>
            <h1>Page Not Found 404</h1>
        </main>
        <footer class="mt-3 py-3 bg-[#283054] text-white text-center">
            ${Footer.print()}
        </footer>
        `;
    },
};
export default PageNotFound;
