import type { Metadata } from "next";
import Header from "@/components/Header";
import Rodape from "@/components/Rodape";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndiqueClient from "@/components/indique/IndiqueClient";
import { siteConfig } from "@/app/siteConfig";

export const metadata: Metadata = {
  title: `Indique e Ganhe | ${siteConfig.siteName}`,
  description:
    "Indique colegas médicos para a Runner e ganhe em dinheiro e em serviço, com níveis que crescem conforme o volume. Seu link pessoal nunca se perde.",
};

export default function IndiquePage() {
  return (
    <>
      <Header />
      <main>
        <IndiqueClient />
      </main>
      <Rodape />
      <FloatingWhatsApp />
    </>
  );
}
