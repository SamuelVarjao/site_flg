/*
 * HeroSection — FLG de Cortes e Vinco
 * Design: Split-screen assimétrico — texto à esquerda (55%), galeria à direita (45%)
 * Animação: Fade + slide-in com stagger
 * Imagens: Placeholders para substituição posterior
 */

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999586576?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

export default function HeroSection() {
  const handleScrollToServices = () => {
    const el = document.querySelector("#servicos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]"
    >
      {/* Background diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(217,30,30,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Vertical red line decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D91E1E] hidden lg:block" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <motion.div
              className="flg-section-label mb-6"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              Especialistas em Corte e Vinco
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-[clamp(3rem,7vw,6rem)] leading-none text-white mb-4"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              Facas para{" "}
              <span className="text-[#D91E1E]">Corte e Vinco</span>{" "}
              para o seu Negócio
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl lg:text-2xl text-[#AAAAAA] font-light mb-10 max-w-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              Embalagens de maneira facilitada
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flg-btn-primary"
              >
                <MessageCircle size={16} />
                <span>Orçamento Rápido</span>
              </a>
              <button
                onClick={handleScrollToServices}
                className="flg-btn-outline"
              >
                <span>Conheça Nossos Serviços</span>
                <ArrowDown size={16} />
              </button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              className="flex gap-8 mt-14 pt-8 border-t border-[#2A2A2A]"
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div>
                <div
                  className="text-4xl text-[#D91E1E]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  20+
                </div>
                <div
                  className="text-xs text-[#888888] uppercase tracking-widest mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  Anos no Mercado
                </div>
              </div>
              <div className="w-px bg-[#2A2A2A]" />
              <div>
                <div
                  className="text-4xl text-[#D91E1E]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  100%
                </div>
                <div
                  className="text-xs text-[#888888] uppercase tracking-widest mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  Qualidade Garantida
                </div>
              </div>
              <div className="w-px bg-[#2A2A2A]" />
              <div>
                <div
                  className="text-4xl text-[#D91E1E]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  SP
                </div>
                <div
                  className="text-xs text-[#888888] uppercase tracking-widest mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  Entrega Rápida
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image Gallery Grid */}
          <motion.div
            className="relative hidden lg:flex gap-3 h-[520px]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {/* Image 1 — tall left */}
            <div className="image-placeholder flex-1 rounded-sm" style={{ minHeight: "100%" }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="30" height="30" rx="2" stroke="#444" strokeWidth="1.5" strokeDasharray="4 2"/>
                <path d="M14 20l4 4 8-8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Adicionar Imagem</span>
            </div>

            {/* Right column: 2 images stacked */}
            <div className="flex flex-col gap-3 flex-1">
            {/* Image 2 — top right */}
            <div className="image-placeholder rounded-sm flex-1">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="30" height="30" rx="2" stroke="#444" strokeWidth="1.5" strokeDasharray="4 2"/>
                <path d="M14 20l4 4 8-8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Adicionar Imagem</span>
            </div>

            {/* Image 3 — bottom right */}
            <div className="image-placeholder rounded-sm flex-1">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="30" height="30" rx="2" stroke="#444" strokeWidth="1.5" strokeDasharray="4 2"/>
                <path d="M14 20l4 4 8-8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Adicionar Imagem</span>
            </div>

            </div>

            {/* Red accent border */}
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-[#D91E1E] pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-[#D91E1E] pointer-events-none" />
          </motion.div>

          {/* Mobile: single image placeholder */}
          <motion.div
            className="lg:hidden h-64 image-placeholder rounded-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="30" height="30" rx="2" stroke="#444" strokeWidth="1.5" strokeDasharray="4 2"/>
              <path d="M14 20l4 4 8-8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Adicionar Imagem</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555555]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
