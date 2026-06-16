import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Rodape from "@/components/Rodape";
import { siteConfig } from "@/app/siteConfig";

export const metadata: Metadata = {
  title: `Política de Cookies | ${siteConfig.siteName}`,
  description:
    "Saiba como a Runner Marketing usa cookies para melhorar a sua experiência de navegação.",
};

export default function PoliticaDeCookies() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-slate">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-3">
            Política de Cookies
          </h1>
          <p className="text-sm text-slate-400 mb-10">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                O que são cookies
              </h2>
              <p>
                Cookies são pequenos arquivos de texto que um site armazena no
                seu navegador para lembrar informações sobre a sua visita. Eles
                ajudam o site a funcionar melhor e a entender como ele é usado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                Como usamos os cookies
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-700">Essenciais:</strong>{" "}
                  necessários para o funcionamento do site e para lembrar a sua
                  preferência de consentimento.
                </li>
                <li>
                  <strong className="text-slate-700">Analíticos:</strong> nos
                  ajudam a entender quais páginas são mais visitadas, de forma
                  agregada e anônima.
                </li>
                <li>
                  <strong className="text-slate-700">Marketing:</strong> usados
                  para medir a eficiência das nossas campanhas e personalizar
                  anúncios.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-2">
                Gerenciar o seu consentimento
              </h2>
              <p>
                Ao acessar o site pela primeira vez, você pode aceitar ou
                recusar o uso de cookies não essenciais. Você também pode apagar
                os cookies a qualquer momento nas configurações do seu navegador.
                Ao limpar os cookies, o aviso de consentimento aparecerá
                novamente na próxima visita.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-2">Contato</h2>
              <p>
                Em caso de dúvidas sobre esta política, fale com a gente pelo
                e-mail{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-teal-700 underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>{" "}
                ou pelo{" "}
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline underline-offset-2"
                >
                  WhatsApp
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
