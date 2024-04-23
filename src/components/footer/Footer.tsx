import LogoGovBranca from "../../assets/img/logoGovBranca.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const facebookLink = "https://www.facebook.com/saude.pe?locale=pt_BR";
  const instagramLink = "https://www.instagram.com/saude_pe/";
  const twitterLink = "https://twitter.com/saudepe";
  const whatsappLink = "https://api.whatsapp.com/send?phone=5581994884221";
  const emailLink = "mailto:dgmog.ses@saude.pe.gov.br";
  const youtubeLink = "https://www.youtube.com/@sespernambuco";

  const handleClick = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="bg-[#154DC9] flex flex-col items-center justify-center py-6 gap-5">
          <div>
            <img src={LogoGovBranca} alt="Logo do Governo" className="w-28" />
          </div>
          <div>
            <ul className="grid grid-cols-2 gap-y-3 text-white">
              <li>Notícias</li>
              <li>Quem Somos</li>
              <li>Serviços</li>
              <li>Equipe</li>
              <li>Governo</li>
              <li>Secretaria</li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-5 text-white">
              <li
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleClick(facebookLink)}
              >
                <FaFacebook className="w-full h-full" />
              </li>
              <li
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleClick(instagramLink)}
              >
                <FaInstagram className="w-full h-full" />
              </li>
              <li
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleClick(twitterLink)}
              >
                <FaTwitter className="w-full h-full" />
              </li>
              <li
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleClick(whatsappLink)}
              >
                <FaWhatsapp className="w-full h-full" />
              </li>

              <li
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleClick(youtubeLink)}
              >
                <FaYoutube className="w-full h-full" />
              </li>
              <li
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleClick(emailLink)}
              >
                <MdEmail className="w-full h-full" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-center text-sm text-[#778395]">
            Governo de Pernambuco | Praça da República, Bairro de Santo Antônio,
            Recife - PE, CEP 52.010-928 | Telefone: +55 81 3181-2100
          </p>
        </div>
        {/* <div className="bg-[#154DC9] py-6 flex flex-col gap-10">
          <div className="flex items-center justify-center">
            <img src={logoGovBranca} alt="Logo do Governo" className="w-28" />
          </div>
          <div>
            <ul className="grid grid-cols-2 justify-items-start px-10 items-center text-white">
              <li>Home</li>
              <li>Quem Somos</li>
              <li>Projetos</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center text-sm text-[#778395]">
            Governo de Pernambuco | Praça da República, Bairro de Santo Antônio,
            Recife - PE, CEP 52.010-928 | Telefone: +55 81 3181-2100
          </p>
        </div> */}
      </div>
    </>
  );
}
