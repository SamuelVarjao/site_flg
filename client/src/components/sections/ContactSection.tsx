/*
 * ContactSection — FLG de Cortes e Vinco
 * Design: Layout split — informações à esquerda, card de contato à direita
 * Animação: Scroll reveal
 */

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999586576?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20FLG.";
const WHATSAPP_ORCAMENTO_URL = "https://wa.me/5511999586576?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(11) 99958-6576",
    href: WHATSAPP_URL,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo — SP",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: "Seg. a Sex. — 08h às 18h",
    href: null,
  },
];

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section id="contato" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(217,30,30,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flg-section-label mb-4 justify-center">Fale Conosco</div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none">
            Entre em <span className="text-[#D91E1E]">Contato</span>
          </h2>
          <div className="flex justify-center">
            <span className="flg-red-line" />
          </div>
          <p
            className="text-[#888888] mt-6 max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Estamos prontos para atender o seu projeto. Entre em contato e receba
            um orçamento personalizado.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-5 p-6 bg-[#1C1C1C] border border-[#2A2A2A] hover:border-[#D91E1E]/40 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#D91E1E]/10 border border-[#D91E1E]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D91E1E]/20 transition-all duration-300">
                      <Icon size={20} className="text-[#D91E1E]" />
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-widest text-[#888888] mb-1"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold hover:text-[#D91E1E] transition-colors duration-200"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          className="text-white font-semibold"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-[#1C1C1C] border border-[#D91E1E]/30 p-10 relative">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D91E1E] to-transparent" />

              <div className="mb-8">
                <h3
                  className="text-3xl text-white mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                >
                  Solicite seu Orçamento
                </h3>
                <p
                  className="text-[#888888] text-sm leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Fale diretamente com nossa equipe pelo WhatsApp e receba um
                  orçamento rápido e personalizado para o seu projeto.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-4 mb-8">
                {[
                  "Nos informe as especificações do projeto",
                  "Envie sua ideia ou referência (se houver)",
                  "Receba o orçamento em até 24h úteis",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-7 h-7 bg-[#D91E1E] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {i + 1}
                    </div>
                    <span
                      className="text-[#CCCCCC] text-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_ORCAMENTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flg-btn-primary w-full justify-center"
              >
                <MessageCircle size={16} />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
