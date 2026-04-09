/*
 * FAQSection — FLG de Cortes e Vinco
 * Design: Accordion com animação suave, botão WhatsApp ao final
 * Animação: Scroll reveal + accordion expand/collapse
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Plus, Minus, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999586576?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20serviços%20da%20FLG.";

const faqs = [
  {
    question: "O que é uma faca de corte e vinco?",
    answer:
      "Uma faca de corte e vinco é uma ferramenta de precisão usada na indústria gráfica para cortar e dobrar papelão, cartão e outros materiais. Ela é montada em uma base de madeira e possui lâminas de aço que realizam cortes e vincos (dobras) com exatidão, permitindo a produção de embalagens, pastas e outros produtos com formas personalizadas.",
  },
  {
    question: "Qual é o prazo médio de entrega das facas?",
    answer:
      "O prazo de entrega varia conforme a complexidade do projeto. Para facas padrão, trabalhamos com prazos de 3 a 7 dias úteis. Para projetos com design personalizado ou maior complexidade técnica, o prazo pode ser de 7 a 15 dias úteis. Entre em contato para uma estimativa específica para o seu projeto.",
  },
  {
    question: "Vocês fazem o design da faca de corte e vinco?",
    answer:
      "Sim! Oferecemos serviço completo de design para facas de corte e vinco. Você nos envia a sua ideia, esboço ou referência, e nossa equipe técnica desenvolve o projeto completo, incluindo o desenho técnico e a produção da faca. Trabalhamos com arquivos nos formatos AI, CDR, PDF e outros.",
  },
  {
    question: "Quais materiais posso usar com as facas da FLG?",
    answer:
      "Nossas facas são compatíveis com uma ampla variedade de materiais: papelão ondulado, cartão duplex, cartão triplex, papel kraft, papelão microondulado, PVC, EVA e outros materiais utilizados na produção de embalagens e pastas. Consulte nossa equipe para verificar a compatibilidade com materiais específicos.",
  },
  {
    question: "Qual é a quantidade mínima de pedido?",
    answer:
      "Não trabalhamos com quantidade mínima de facas por pedido — atendemos desde pedidos unitários até grandes volumes. Para projetos com design personalizado, pode ser necessária uma análise prévia. Entre em contato para discutir as necessidades do seu projeto.",
  },
  {
    question: "Como funciona o processo de orçamento?",
    answer:
      "O processo é simples: entre em contato pelo WhatsApp ou formulário de contato, nos informe as especificações do projeto (dimensões, material, quantidade, prazo) e nossa equipe elabora um orçamento detalhado em até 24 horas úteis. Para projetos com design, envie sua ideia ou referência junto com a solicitação.",
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer:
      "Sim! Realizamos entregas em todo o território nacional. Trabalhamos com transportadoras especializadas para garantir a segurança e integridade das facas durante o transporte. O frete é calculado conforme o destino e o volume do pedido.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isInView } = useScrollReveal(0.05);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flg-section-label mb-4 justify-center">Tire suas Dúvidas</div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none">
            Perguntas <span className="text-[#D91E1E]">Frequentes</span>
          </h2>
          <div className="flex justify-center">
            <span className="flg-red-line" />
          </div>
          <p
            className="text-[#888888] mt-6 max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Encontre respostas para as principais dúvidas sobre nossos serviços de corte e vinco.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border transition-all duration-300 ${
                openIndex === i
                  ? "border-[#D91E1E]/50 bg-[#1C1C1C]"
                  : "border-[#2A2A2A] bg-[#1C1C1C] hover:border-[#D91E1E]/30"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-base font-semibold pr-4 transition-colors duration-200 ${
                    openIndex === i ? "text-white" : "text-[#CCCCCC]"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                    openIndex === i
                      ? "border-[#D91E1E] bg-[#D91E1E] text-white"
                      : "border-[#333333] text-[#888888]"
                  }`}
                >
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-[#2A2A2A] mb-4" />
                      <p
                        className="text-[#888888] text-sm leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p
            className="text-[#888888] mb-4 text-base"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Não encontrou o que procura?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flg-btn-primary inline-flex"
          >
            <MessageCircle size={16} />
            <span>Entrar em Contato</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
