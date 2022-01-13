import posts from "../data";
import HeaderAdmin from "../components/headerAdmin";
import SidebarAdmin from "../components/sidebarAdmin";

const EditNewsAdmin = {
    print(id) {
        const result = posts[id - 1];
        return /* html */` 
            <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
                ${SidebarAdmin.print()}

               <!--
                <div x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
                    x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
                    x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"
                    class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
        
               -->
                <div class="flex flex-col flex-1 w-full">
                    ${HeaderAdmin.print()}

                    <main class="h-full overflow-y-auto">
                        <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        News
                        </h2>
                    <h4 class="text-xl font-semibold text-red-700 dark:text-gray-200">Edit news</h4>
                    <!-- <div class="w-full overflow-hidden rounded-lg shadow-xs"> -->
                    <div class="grid grid-cols-2 gap-8">
                        <form class="">
                            <div class="mb-4">
                                <label class="block dark:text-white text-gray-700 text-sm font-bold mb-2" for="username">
                                    Title
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" value="${result.title}" type="text">
                            </div>
                            <div class="grid grid-cols-2 gap-5">
                                <div class="m-full">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                        Image
                                    </label>
                                    <div class="mb-3">
                                        <input class="form-control
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file"
                                            id="formFile">
                                    </div>
                                </div>
                                <div class="m-full mb-6">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                            Catalog Name
                                        </label>
                                        <select class="form-select appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                            </div>
                            <div class="mb-4">
                                <label class="block dark:text-white text-gray-700 text-sm font-bold mb-2" for="username">
                                    Author
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text">
                            </div>
                            <div class="mb-4">
                                <label class="block dark:text-white text-gray-700 text-sm font-bold mb-2" for="username">
                                    Description
                                </label>
                               <textarea class="w-full" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div class="text-right">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div class="img">
                            <img class="w-full h-96 object-cover"
                                src="${result.img}"
                                alt="">
                        </div>
                    </div>
                    <!-- </div> -->
                        </div>
                    </main>
                </div>
            </div>
        `;
    },
};

export default EditNewsAdmin;
