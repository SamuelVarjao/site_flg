/*
 * WhyFLGSection — FLG de Cortes e Vinco
 * Design: Layout assimétrico — lista de diferenciais à esquerda, imagem à direita
 * Animação: Scroll reveal com stagger nos itens
 */

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Clock, Zap, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999586576?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20FLG.";

const reasons = [
  {
    number: "01",
    icon: Shield,
    title: "Materiais de Alta Qualidade",
    description:
      "Utilizamos apenas materiais de primeira linha em nossas facas de corte e vinco, garantindo durabilidade, precisão e acabamento superior em cada projeto.",
  },
  {
    number: "02",
    icon: Clock,
    title: "Estamos a Mais de 20 Anos no Mercado",
    description:
      "Com mais de duas décadas de experiência, a FLG acumulou conhecimento técnico e expertise para atender os mais exigentes projetos de corte e vinco do mercado.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Entrega Rápida",
    description:
      "Sabemos que o seu negócio não pode esperar. Por isso, trabalhamos com processos ágeis e prazos de entrega competitivos, sem abrir mão da qualidade.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function WhyFLGSection() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section id="por-que-flg" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(217,30,30,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="flg-section-label mb-4">Nossos Diferenciais</div>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none mb-2">
                Por que Escolher
              </h2>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] text-[#D91E1E] leading-none">
                a FLG?
              </h2>
              <span className="flg-red-line" />
            </motion.div>

            {/* Reasons List */}
            <div className="mt-12 space-y-8">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.number}
                    custom={i}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    className="flex gap-6 group"
                  >
                    {/* Number + line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="text-4xl text-[#D91E1E]/30 group-hover:text-[#D91E1E] transition-colors duration-300 leading-none"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {reason.number}
                      </div>
                      {i < reasons.length - 1 && (
                        <div className="w-px flex-1 bg-[#2A2A2A] mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-[#D91E1E]/10 flex items-center justify-center border border-[#D91E1E]/20">
                          <Icon size={16} className="text-[#D91E1E]" />
                        </div>
                        <h3
                          className="text-xl text-white"
                          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                        >
                          {reason.title}
                        </h3>
                      </div>
                      <p
                        className="text-[#888888] text-sm leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flg-btn-primary inline-flex"
              >
                <MessageCircle size={16} />
                <span>Entre em Contato!</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Image placeholder */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main image */}
            <div className="image-placeholder h-[500px] rounded-sm">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="30" height="30" rx="2" stroke="#444" strokeWidth="1.5" strokeDasharray="4 2"/>
                <path d="M14 20l4 4 8-8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Adicionar Imagem</span>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#D91E1E] p-6 shadow-2xl">
              <div
                className="text-5xl text-white leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                20+
              </div>
              <div
                className="text-xs text-white/80 uppercase tracking-widest mt-1"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                Anos de Experiência
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#D91E1E]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
