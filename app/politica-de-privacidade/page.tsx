import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Rodape from "@/components/Rodape";
import { siteConfig } from "@/app/siteConfig";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${siteConfig.siteName}`,
  description:
    "Saiba quais dados a Runner Marketing coleta, para qual finalidade e quais são os seus direitos conforme a LGPD.",
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-400 mb-10">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                Quem é o responsável pelos dados
              </h2>
              <p>
                Esta página é operada pela {siteConfig.siteName}. Para qualquer
                assunto relacionado aos seus dados, fale com a gente pelo e-mail{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-teal-700 underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                Quais dados coletamos
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-700">
                    Dados que você informa:
                  </strong>{" "}
                  nome, WhatsApp, especialidade ou clínica e mensagem, quando
                  você preenche um formulário. Esses dados são usados apenas para
                  iniciar o contato e seguem para o nosso WhatsApp por ação sua.
                </li>
                <li>
                  <strong className="text-slate-700">
                    Dados de navegação:
                  </strong>{" "}
                  de forma agregada e mediante o seu consentimento, podemos usar
                  ferramentas de análise (como o Microsoft Clarity) para entender
                  como a página é usada e melhorá-la.
                </li>
                <li>
                  <strong className="text-slate-700">Cookies:</strong> conforme
                  descrito na nossa{" "}
                  <Link
                    href="/politica-de-cookies"
                    className="text-teal-700 underline underline-offset-2"
                  >
                    Política de Cookies
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                Para que usamos os seus dados
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Responder ao seu contato e apresentar os nossos serviços.</li>
                <li>Realizar o diagnóstico de marketing solicitado.</li>
                <li>Melhorar a experiência e o desempenho da página.</li>
              </ul>
              <p className="mt-2">
                Não vendemos os seus dados e não os utilizamos para finalidades
                diferentes das informadas aqui.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                Base legal e consentimento
              </h2>
              <p>
                Tratamos os seus dados com base no seu consentimento e no
                legítimo interesse de responder a um contato comercial que você
                iniciou. Você pode retirar o consentimento ou solicitar a
                exclusão dos seus dados a qualquer momento pelos canais de
                contato.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                Compartilhamento
              </h2>
              <p>
                O contato acontece pelo WhatsApp, então os dados que você envia
                trafegam pela plataforma da Meta, sujeita aos termos dela.
                Ferramentas de análise tratam dados de navegação de forma
                agregada. Não compartilhamos os seus dados com terceiros para
                fins de venda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                Os seus direitos (LGPD)
              </h2>
              <p>
                Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
                você pode solicitar a confirmação do tratamento, o acesso, a
                correção, a anonimização, a portabilidade e a exclusão dos seus
                dados, além de revogar o consentimento. Para exercer esses
                direitos, escreva para{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-teal-700 underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-600"
              >
                ← Voltar para o início
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Rodape />
    </>
  );
}
