import posts from "../data";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailNewPage = {
    print(id) {
        const result = posts[id];

        return /* html */ ` 
        <div class="max-w-5xl m-auto">
            <header>
                ${Header.print()}
            </header>
            <main>
                <h1> ${result.id}</h1>
                <img src="${result.img}"/>
                <h1> ${result.title}</h1>
                <h1> ${result.desc}</h1>
            </main>
            <footer class="mt-3 py-3 bg-[#283054] text-white text-center">
                ${Footer.print()}
            </footer>
        </div>

        `;
    },
};
export default DetailNewPage;
