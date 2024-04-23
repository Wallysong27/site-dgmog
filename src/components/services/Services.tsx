// IMAGENS PARA DESKTOP
import BgCispe from "../../assets/img/servicos/bg-cispe.png";
import BgFluxos from "../../assets/img/servicos/bg-fluxos.png";
import BgPaineis from "../../assets/img/servicos/bg-bi.png";
import BgApresentacao from "../../assets/img/servicos/bg-apresentacao.png";
import BgChamados from "../../assets/img/servicos/bg-chamados.png";
// IMAGENS PARA MOBILE
import BgCispeMobile from "../../assets/img/servicos/mobile/bg-cispe-mobile.png";
import BgFluxosMobile from "../../assets/img/servicos/mobile/bg-fluxos-mobile.png";
import BgPaineisMobile from "../../assets/img/servicos/mobile/bg-bi-mobile.png";
import BgApresentacMobile from "../../assets/img/servicos/mobile/bg-apresentacao-mobile.png";
import BgChamadosMobile from "../../assets/img/servicos/mobile/bg-chamados-mobile.png";

export default function Services() {
  return (
    <>
      <div className="relative hidden md:flex flex-col items-center justify-center gap-5 p-10">
        <h1 className="absolute left-0 top-0 p-10 text-3xl font-semibold text-[#0C2856]">
          Nossos Programas e Serviços
        </h1>
        <div className="flex gap-5 mt-14">
          <div>
            <img src={BgCispe} alt="" />
          </div>
          <div>
            <img src={BgPaineis} alt="" />
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={BgApresentacao} alt="" />
          </div>
          <div>
            <img src={BgFluxos} alt="" />
          </div>
        </div>
        <div>
          <img src={BgChamados} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 p-8 md:hidden">
        <h1 className="text-3xl font-semibold text-[#0C2856]">
          Nossos Programas e Serviços
        </h1>
        <div>
          <img src={BgCispeMobile} alt="" />
        </div>
        <div>
          <img src={BgPaineisMobile} alt="" />
        </div>
        <div>
          <img src={BgApresentacMobile} alt="" />
        </div>
        <div>
          <img src={BgFluxosMobile} alt="" />
        </div>
        <div>
          <img src={BgChamadosMobile} alt="" />
        </div>
      </div>
    </>
  );
}
