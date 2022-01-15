const Signup = {
    print() {
        return /* html */ ` 
        <div class="flex justify-between items-center flex-col h-screen">
        <div class="auth-container">
            <div class="m-auto px-24 max-w-full flex">
                <div class="relative w-[43%] mr-12">
                    <img src="https://cdn.dribbble.com/users/754899/screenshots/2985458/media/b8a16910e125ef377e7fb5941ef9082e.png?compress=1&resize=800x600&vertical=top" alt="" class="h-[500px] radius-secondary object-cover">
                    <a class="absolute top-3 left-3 bg-white radius-secondary opacity-50 px-2 py-3 trans-second hover:opacity-100 " href="/">
                        <img src="https://i.imgur.com/YR2XB5I.png" alt=""
                            class="img-fluid w-28 object-cover">
                    </a>
                </div>
                <div class="auth-content flex flex-col justify-center w-[350px]">
                    <h2 class="my-[1px] text-3xl font-bold">Get started</h2>
                    <span class="text-gray-darker">Already have an account?<a href="signUp.html" class="text-primary-color font-bold"> Sign Up</a></span>
                    <form action="" class="mt-[20px] mb-[10px]">
                        <div class="form__item input-container">
                            <div class="relative">
                                <input class="auth__input p-[10px] radius-primary w-[350px] border-[1.2px] border-solid border-gray-primary text-sm outline-none trans-second focus:border-primary-color" type="text">
                                <label for="name" class="auth__label absolute top-1/2 left-3 -translate-y-1/2 text-gray-primary text-sm outline-none select-none pointer-events-none trans-second leading-none">Full Name</label>
                            </div>
                            <div class="error-container pt-[2px] px-[6px] pb-0 text-xs min-h-[13px]">
                                <span class="error-email ">Email not exists</span>
                            </div>
                        </div>
                        <div class="form__item input-container">
                            <div class="relative">
                                <input class="auth__input p-[10px] radius-primary w-[350px] border-[1.2px] border-solid border-gray-primary text-sm outline-none trans-second focus:border-primary-color" type="email">
                                <label for="name" class="auth__label absolute top-1/2 left-3 -translate-y-1/2 text-gray-primary text-sm outline-none select-none pointer-events-none trans-second leading-none">Email</label>
                            </div>
                            <div class="error-container pt-[2px] px-[6px] pb-0 text-xs min-h-[13px]">
                                <span class="error-password"></span>
                            </div>
                        </div>
                        <div class="form__item input-container">
                            <div class="relative">
                                <input class="auth__input p-[10px] radius-primary w-[350px] border-[1.2px] border-solid border-gray-primary text-sm outline-none trans-second focus:border-primary-color" type="password">
                                <label for="name" class="auth__label absolute top-1/2 left-3 -translate-y-1/2 text-gray-primary text-sm outline-none select-none pointer-events-none trans-second leading-none">Password</label>
                            </div>
                            <div class="error-container pt-[2px] px-[6px] pb-0 text-xs min-h-[13px]">
                                <span class="error-password"></span>
                            </div>
                        </div>
                        <div class="form__item text-right">
                            <button type="submit" class="auth__button border-none radius-primary bg-primary-color px-[10px] py-[10px] text-white trans-second block w-full mt-1 hover:opacity-90">Sign Up</button>
                        </div>
                    </form>
                    <div class="auth-content__social">
                        <div class="flex justify-between items-center">
                            <span class="border-b border-solid border-gray-primary w-full"></span>
                            <span class="text-gray-darker block text-center w-full">Or sign up with</span>
                            <span class="border-b border-solid border-gray-primary w-full"></span>
                        </div>
                        <div class="social__content text-center mt-[10px]">
                            <a href="#" class="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i class="bi bi-google leading-snug text-red"></i></a>
                            <a href="#" class="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i class="bi bi-facebook leading-snug text-[#0466e4]"></i></a>
                            <a href="#" class="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i class="bi bi-twitter leading-snug text-[#009ef8]"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    },
};
export default Signup;
