import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ASSETS, ICONS AND IMAGES
import { TbMenuDeep } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import LogoGov from "../../assets/img/logoGov.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="fixed w-full py-2 px-10 flex justify-between items-center gap-10 h-20 z-[1000] bg-white">
          <img src={LogoGov} alt="Logo do Governo" className="w-32 xl:hidden" />
          {!isDesktop && (
            <button className="w-10 h-10" onClick={toggleMenu}>
              <TbMenuDeep className="w-full h-full text-[#0C2856]" />
            </button>
          )}
          {isDesktop && (
            <div className="hidden xl:flex items-center justify-around w-full text-[#0C2856]">
              <div>
                <img src={LogoGov} alt="Logo do Governo" className="w-32" />
              </div>
              <div className="flex items-center justify-center">
                <ul className="flex items-center justify-center gap-5">
                  <li className="font-bold">Home</li>
                  <li className="font-bold">Quem Somos</li>
                  <li className="font-bold">Programas e Serviços</li>
                  <li className="font-bold">Notícias</li>
                  <li className="font-bold">Equipe</li>
                  <li className="font-bold">Governo</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <ul className="flex items-center justify-center gap-5">
                  <li>
                    <span className="font-bold">A-</span>
                  </li>
                  <li>
                    <span className="font-bold">A+</span>
                  </li>
                  <li>
                    <button className="bg-[#0C2856] py-2 px-4 rounded-3xl text-white">
                      Autocontraste
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <AnimatePresence>
          {(menuOpen || (isDesktop && menuOpen)) && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-full bg-black bg-opacity-75 z-50"
              onClick={toggleMenu}
            >
              <div className="fixed top-0 bottom-0 right-0 bg-white w-11/12 shadow-lg rounded-l-2xl">
                {!isDesktop && (
                  <button
                    className="absolute top-4 right-2 w-14 h-14"
                    onClick={toggleMenu}
                  >
                    <IoIosClose className="text-[#0C2856] w-full h-full" />
                  </button>
                )}
                {!isDesktop && (
                  <ul className="absolute top-28 left-4 text-sm w-10/12 flex flex-col gap-3 text-[#0C2856]">
                    <span className="text-xs pb-4">Menu</span>
                    <li className="border-b border-[#F6F6F6] pb-2 font-bold">
                      Home
                    </li>
                    <li className="border-b border-[#F6F6F6] pb-2 font-bold">
                      Notícias
                    </li>
                    <li className="border-b border-[#F6F6F6] pb-2 font-bold">
                      Quem Somos
                    </li>
                    <li className="border-b border-[#F6F6F6] pb-2 font-bold">
                      Serviços
                    </li>
                    <li className="border-b border-[#F6F6F6] pb-2 font-bold">
                      Equipe
                    </li>
                    <li className="border-b border-[#F6F6F6] pb-2 font-bold">
                      Governo
                    </li>
                    <li className="pb-4 font-bold">Secretaria</li>
                    <hr className="border-[#0C2856]"></hr>
                    <li className="pb-4">
                      <span className="text-xs">Acessibilidade</span>
                    </li>
                    <li className="border-b border-[#F6F6F6] pb-2 font-semibold text-base">
                      Diminuir letra
                    </li>
                    <li className="border-b border-[#F6F6F6] pb-2 font-semibold text-xl">
                      Aumentar letra
                    </li>
                    <li className="mt-2 w-40">
                      <button className="bg-[#0C2856] py-2 px-4 rounded-3xl text-white font-medium w-full">
                        Autocontraste
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
