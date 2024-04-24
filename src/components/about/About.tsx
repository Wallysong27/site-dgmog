import BgCispe from "../../assets/img/servicos/bg-cispe.png";

export default function About() {
  return (
    <>
      <div className="relative hidden md:flex items-center justify-evenly gap-5 p-10">
        <h1 className="absolute left-0 xl:left-40 top-0 p-10 text-3xl font-semibold text-[#0C2856]">
          Quem Somos
        </h1>
        <div className="flex flex-col lg:flex-row items-center px-40 mt-14 gap-20">
          <div className="flex-1">
            <img src={BgCispe} alt="" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <h1 className="font-bold text-4xl text-[#0C2856]">
              Diretoria Geral de Monitoramento e<br /> Gestão Estratégica
            </h1>
            <p className="leading-7">
              A Diretoria Geral de Monitoramento e Gestão Estratégica - DGMOG,
              tem por objetivo central de auxiliar o grupo da pasta na melhoria
              dos processos internos da instituição e da implantação da cultura
              de monitoramento e gestão estratégica no órgão, pilares
              fundamentais à modernização da gestão de saúde pública.
            </p>
            <span className="font-bold text-lg border-b">- Atribuições:</span>
            <ul className="flex flex-col gap-1 list-disc leading-7 text-[#778395] pt-2">
              <li className="font-semibold pb-2 border-b">
                Monitorar a gestão estratégica a partir da definição de metas
                prioritárias à gestão da SES
              </li>
              <li className="font-semibold pb-2 border-b">
                Fornecer ferramentas para acompanhamento e monitoramento dos
                indicadores de gestão.
              </li>
              <li className="font-semibold pb-2 border-b">
                Manutenção da coesão visual de produtos da Gestão por meio da
                elaboração de apresentações, relatórios e qualquer produto que
                se faça necessário.
              </li>
              <li className="font-semibold pb-2 border-b">
                Desenvolvimento de painéis de Business Intelligence (BI)
                possibilitando melhor eficiência no acesso desses dados seja
                pelas lideranças da SES, do Estado ou pela população em geral.
              </li>
              <li className="font-semibold pb-2 border-b">
                Manter a segurança dos dados, garantindo que os dados sejam
                precisos, completos e consistentes
              </li>
              <li className="font-semibold pb-2 border-b">
                Desenvolver e aplicar algoritmos de aprendizado de máquina,
                estatística e modelagem para criar previsões, classificações e
                recomendações precisas.
              </li>
              <li className="font-semibold pb-2 border-b">
                Integrar fontes de dados heterogêneas e complexas para facilitar
                a análise de dados.
              </li>
              <li className="font-semibold pb-2 border-b">
                Trabalhar em colaboração com especialistas em negócios,
                desenvolvedores de software e outros profissionais de TI para
                garantir que os resultados dos projetos de análise estejam
                alinhados com os objetivos da organização.
              </li>
              <li className="font-semibold">
                Continuamente aprender novas técnicas e tecnologias para se
                manter atualizado no campo em evolução da análise de dados.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
