import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ASSETS, ICONS AND IMAGES
import { TbMenuDeep } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from "react-icons/io";
import LogoGov from "../../assets/img/logoGov.png";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openOthersMobile, setOpenOthersMobile] = useState(false);

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

  const toggleOpenOthersMobile = () => {
    setOpenOthersMobile(!openOthersMobile);
  };

  const handleMenuClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
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
              <div className="relative flex items-center justify-center">
                <ul className="flex items-center justify-center gap-5">
                  <li className="font-bold hover:text-[#1F64FF] cursor-pointer">
                    Home
                  </li>
                  <li className="font-bold hover:text-[#1F64FF] cursor-pointer">
                    Quem Somos
                  </li>
                  <li className="font-bold hover:text-[#1F64FF] cursor-pointer">
                    Programas e Serviços
                  </li>
                  <li className="font-bold hover:text-[#1F64FF] cursor-pointer">
                    Equipe
                  </li>
                  <li className="font-bold hover:text-[#1F64FF] cursor-pointer">
                    Secretaria
                  </li>
                  <motion.li
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="font-bold flex items-center gap-2 cursor-pointer"
                  >
                    Outros
                    <motion.div
                      variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0.55 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                      </svg>
                    </motion.div>
                  </motion.li>
                </ul>
                <motion.ul
                  variants={{
                    open: {
                      clipPath: "inset(0% 0% 0% 0% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05,
                      },
                    },
                    closed: {
                      clipPath: "inset(10% 50% 90% 50% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3,
                      },
                    },
                  }}
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  style={{ pointerEvents: isOpen ? "auto" : "none" }}
                  className="absolute flex flex-col gap-5 bg-white items-center top-14 -right-10 p-4"
                >
                  <motion.li variants={itemVariants} className="font-bold">
                    Slide Padrão
                  </motion.li>
                </motion.ul>
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
              <div
                className="fixed top-0 bottom-0 right-0 bg-white w-11/12 shadow-lg rounded-l-2xl"
                onClick={handleMenuClick}
              >
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
                      Equipe
                    </li>
                    <li className="border-b border-[#F6F6F6] pb-2 font-bold">
                      Secretaria
                    </li>
                    <motion.li
                      className="flex items-center gap-1 pb-1 font-bold"
                      onClick={toggleOpenOthersMobile}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Outros
                      {openOthersMobile ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </motion.li>
                    <AnimatePresence>
                      {openOthersMobile && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {/* Conteúdo do submenu aqui */}
                          <li>Slide Padrão</li>
                          {/* <li>Item 2</li>
                          <li>Item 3</li> */}
                        </motion.ul>
                      )}
                    </AnimatePresence>
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
