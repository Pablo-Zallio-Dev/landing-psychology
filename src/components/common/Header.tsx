import { useEffect, useRef } from "react";
import { useMenuMobile } from "../../store/menuStore";
import Logo from "../ui/Logo";
import MenuMobile from "../ui/MenuMobile";
import MenuDesktop from "../ui/MenuDesktop";

const Header = () => {
  const menuIsOpen = useMenuMobile((state) => state.isOpen);
  const changeState = useMenuMobile((state) => state.changeState);
  const closeMenu = useMenuMobile((state) => state.closeMenu);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuIsOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuIsOpen, closeMenu]);

  console.log(menuIsOpen);

  return (
    <>
    <div id="header" className=" mt-12 " ref={headerRef}>
      {/* logo mobile */}
      <section className=" flex justify-center border border-x-0 border-y-gray-300  ">
        <section className="  relative flex items-center justify-between p-3.5 py-4 w-full xl:w-7xl ">
          <Logo />

          {/* menu desktop */}
          <MenuDesktop />
          {/* btn menu mobile */}
          {!menuIsOpen ? (
            <button
              className="text-[.65rem] font-bold text-gray-700 lg:hidden "
              onClick={changeState}
            >
              MENU
            </button>
          ) : (
            <button
              className="text-[.65rem] font-bold text-gray-700 lg:hidden "
              onClick={changeState}
            >
              CLOSE
            </button>
          )}
          {/* menu mobile */}
        </section>
      </section>
      {menuIsOpen && <MenuMobile />}
    </div>
    
    </>
  );
};

export default Header;
