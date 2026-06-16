import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VSL from "@/components/VSL";
import SeletorEspecialidade from "@/components/SeletorEspecialidade";
import ProvasSociais from "@/components/ProvasSociais";
import Especialidades from "@/components/Especialidades";
import Metodo from "@/components/Metodo";
import ProjetosRunner from "@/components/ProjetosRunner";
import Time from "@/components/Time";
import CTAFinal from "@/components/CTAFinal";
import Rodape from "@/components/Rodape";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VSL />
        <SeletorEspecialidade />
        <ProvasSociais />
        <Especialidades />
        <Metodo />
        <ProjetosRunner />
        <Time />
        <CTAFinal />
      </main>
      <Rodape />
      <FloatingWhatsApp />
    </>
  );
}
