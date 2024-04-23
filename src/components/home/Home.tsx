import Bg from "../../assets/img/bgHome.png";
import LogoDgmogCompleta from "../../assets/img/logoDgmogCompletaBranca.png";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="flex items-center justify-center bg-black backdrop-blur-sm backdrop-filter bg-opacity-50 h-screen">
        <img src={LogoDgmogCompleta} alt="" />
      </div>
    </div>
    // <div className="flex items-center justify-center w-full h-[60vh]">
    //   <div className="absolute inset-0 overflow-hidden h-[60vh]">
    //     <img
    //       src={Bg}
    //       alt="Background PE"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    //   <img
    //     src={LogoDgmogCompleta}
    //     alt="Logo DGMOG Completa"
    //     className="absolute left-1/2 top-[42%] transform -translate-x-1/2 -translate-y-full"
    //     />
    // </div>
  );
}
