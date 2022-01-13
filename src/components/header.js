const Header = {
    print() {
        return /* html */ ` 
        <div class="bg-[#272f54] py-4">
          <a href="" class="">
            <img class="m-auto max-w-full w-[150px] h-[60px]" src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png"
              alt="">
          </a>
        </div>
        <div class="flex justify-between items-center bg-[#d67e02]">
          <ul class="flex">
            <li class="block py-3 pl-6"><a class="text-sm text-white hover:border-b-[1px] hover:border-white" href="/">Trang chủ</a> </li>
            <li class="block py-3 pl-6"><a class="text-sm text-white hover:border-b-[1px] hover:border-white"
                href="/about">Tuyển
                sinh</a></li>
            <li class="block py-3 pl-6"><a class="text-sm text-white hover:border-b-[1px] hover:border-white"
                href="/shop">Chương trình
                đào tạo</a></li>
            <li class="block py-3 pl-6"><a class="text-sm text-white hover:border-b-[1px] hover:border-white" href="">Góc
                sinh
                viên</a></li>
              <li class="block py-3 pl-6"><a class="text-sm text-white hover:border-b-[1px] hover:border-white"
                  href="/admin/dashboard">Admin</a></li>
            <li class="block py-3 pl-6"><a class="text-sm text-white hover:border-b-[1px] hover:border-white"
                href="/signup">Sign Up</a></li>
            <li class="block py-3 pl-6"><a class="text-sm text-white hover:border-b-[1px] hover:border-white"
                href="/signin">Sign In</a></li>
          </ul>
          <form action="" class="flex mx-2">
            <input class="py-0.5 px-2 outline-none text-xs" type="text">
            <input class="ml-1 p-0.5 px-2 bg-[#292d58] text-white text-xs border-[1px] border-white" type="submit"
              value="Tìm kiếm">
          </form>
        </div>
  
        `;
    },
};

export default Header;
