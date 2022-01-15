import HeaderAdmin from "../../components/headerAdmin";
import SidebarAdmin from "../../components/sidebarAdmin";
import cardStatisticAdmin from "../../components/cardStatisticAdmin";

const Dashboard = {
    print() {
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
                                Dashboard
                            </h2>
                            ${cardStatisticAdmin.print()}
                        </div>
                    </main>
                </div>
            </div>
        `;
    },
};

export default Dashboard;
