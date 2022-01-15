const Signin = {
    print() {
        return /* html */ ` 
        <div class="flex justify-between items-center flex-col h-screen">
        <div class="auth-container">
            <div class="m-auto px-24 max-w-full flex">
                <div class="relative w-[43%] mr-12">
                    <img src="https://images.unsplash.com/photo-1522148661075-56b2ad82f11c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="h-[500px] radius-secondary object-cover">
                    <a class="absolute top-3 left-3 bg-white radius-secondary opacity-50 px-2 py-3 trans-second hover:opacity-100 " href="/">
                        <img src="https://i.imgur.com/YR2XB5I.png" alt=""
                            class="img-fluid w-28 object-cover">
                    </a>
                </div>
                <div class="auth-content flex flex-col justify-center w-[350px]">
                    <h2 class="my-[1px] text-3xl font-bold">Sign In</h2>
                    <span class="text-gray-darker">Don’t have an account?<a href="signUp.html" class="text-primary-color font-bold"> Sign Up</a></span>
                    <form action="" class="mt-[20px] mb-[10px]">
                        <div class="form__item input-container">
                            <div class="relative">
                                <input class="auth__input p-[10px] radius-primary w-[350px] text-sm border-[1.2px] border-solid border-gray-primary outline-none trans-second focus:border-primary-color" type="email">
                                <label for="name" class="auth__label absolute top-1/2 left-3 -translate-y-1/2 text-gray-primary text-sm outline-none select-none pointer-events-none trans-second leading-none">Email</label>
                            </div>
                            <div class="error-container pt-[2px] px-[6px] pb-0 text-xs min-h-[13px]">
                                <span class="error-email ">Email not exists</span>
                            </div>
                        </div>
                        <div class="form__item input-container">
                            <div class="relative">
                                <input class="auth__input p-[10px] radius-primary w-[350px] text-sm border-[1.2px] border-solid border-gray-primary outline-none trans-second focus:border-primary-color" type="password">
                                <label for="name" class="auth__label absolute top-1/2 left-3 -translate-y-1/2 text-gray-primary text-sm outline-none select-none pointer-events-none trans-second leading-none">Password</label>
                            </div>
                            <div class="error-container">
                                <span class="error-password"></span>
                            </div>
                        </div>
                        <div class="form__item text-right">
                            <a href="#" class="text-gray-darker">Forgot password?</a>
                            <button type="submit" class="auth__button border-none radius-primary bg-primary-color px-[10px] py-[10px] text-white trans-second block w-full mt-1 hover:opacity-90">Sign In</button>
                        </div>
                    </form>
                    <div class="auth-content__social">
                        <div class="flex justify-between items-center">
                            <span class="border-b border-solid border-gray-primary w-full"></span>
                            <span class="text-gray-darker block text-center w-full">Or sign in with</span>
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
export default Signin;
