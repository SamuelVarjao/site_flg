/*
 * ServicesSection — FLG de Cortes e Vinco
 * Design: Grid de 3 cards com hover elevation e borda vermelha
 * Animação: Scroll reveal com stagger
 */

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Package, FolderOpen, Palette } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Corte e Vinco para Embalagens",
    description:
      "Produzimos facas de corte e vinco de alta precisão para embalagens dos mais variados formatos e materiais. Do papelão ao cartão, entregamos qualidade e exatidão em cada peça.",
    detail: "Caixas, bandejas, displays, embalagens personalizadas",
  },
  {
    icon: FolderOpen,
    title: "Corte e Vinco para Pastas",
    description:
      "Desenvolvemos facas especializadas para pastas corporativas, escolares e técnicas. Precisão nos cortes e vincos que garantem acabamento impecável e dobras perfeitas.",
    detail: "Pastas corporativas, escolares e técnicas",
  },
  {
    icon: Palette,
    title: "Design para Corte e Vinco",
    description:
      "Criamos o design completo da sua faca de corte e vinco. Nos envie a sua ideia e nossa equipe desenvolve o projeto técnico com precisão para sua produção.",
    detail: "Envie sua ideia — nós desenvolvemos!",
    highlight: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section id="servicos" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background number decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] leading-none text-[#1A1A1A] select-none pointer-events-none font-bold"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        FLG
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flg-section-label mb-4">O que fazemos</div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none">
            Nossos <span className="text-[#D91E1E]">Serviços</span>
          </h2>
          <span className="flg-red-line" />
          <p
            className="text-[#888888] mt-6 max-w-xl text-base leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Soluções completas em facas para corte e vinco, com precisão técnica e
            atendimento personalizado para o seu negócio.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative p-8 bg-[#1C1C1C] border transition-all duration-300 hover:-translate-y-2 ${
                  service.highlight
                    ? "border-[#D91E1E]/50 hover:border-[#D91E1E]"
                    : "border-[#2A2A2A] hover:border-[#D91E1E]/50"
                }`}
                style={{
                  boxShadow: service.highlight
                    ? "0 0 30px rgba(217,30,30,0.08)"
                    : "none",
                }}
              >
                {/* Top red accent line */}
                <div
                  className={`absolute top-0 left-0 h-0.5 bg-[#D91E1E] transition-all duration-500 ${
                    service.highlight ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />

                {/* Icon */}
                <div className="w-14 h-14 bg-[#D91E1E]/10 flex items-center justify-center mb-6 border border-[#D91E1E]/20">
                  <Icon size={24} className="text-[#D91E1E]" />
                </div>

                {/* Content */}
                <h3
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#888888] text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Detail tag */}
                <div
                  className="text-xs font-semibold uppercase tracking-widest text-[#D91E1E] flex items-center gap-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="w-4 h-px bg-[#D91E1E]" />
                  {service.detail}
                </div>

                {/* Image placeholder */}
                <div className="mt-6 h-40 image-placeholder">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="30" height="30" rx="2" stroke="#444" strokeWidth="1.5" strokeDasharray="4 2"/>
                    <path d="M14 20l4 4 8-8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Adicionar Imagem</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
