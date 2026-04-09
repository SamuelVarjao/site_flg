/*
 * Footer — FLG de Cortes e Vinco
 * Design: Fundo preto profundo com linha vermelha no topo
 * Estrutura: Logo + links + contato + copyright
 */

import { Phone, Instagram, Facebook } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999586576?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20FLG.";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Por que FLG", href: "#por-que-flg" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D91E1E]/30">
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663480291046/fbAV7zi45H3Eo4kDmP9b7G/flg-logo_4f00ade3.svg"
              alt="FLG de Cortes e Vinco"
              className="h-14 w-auto mb-6"
            />
            <p
              className="text-[#888888] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Especialistas em facas para corte e vinco com mais de 20 anos de
              experiência no mercado. Qualidade, precisão e entrega rápida.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:border-[#D91E1E] hover:text-[#D91E1E] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:border-[#D91E1E] hover:text-[#D91E1E] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white text-lg mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-[#888888] text-sm hover:text-[#D91E1E] transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="w-3 h-px bg-[#444444] group-hover:bg-[#D91E1E] transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white text-lg mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
            >
              Contato
            </h4>
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#888888] hover:text-[#D91E1E] transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-[#D91E1E]/10 border border-[#D91E1E]/20 flex items-center justify-center group-hover:bg-[#D91E1E]/20 transition-all duration-200">
                  <Phone size={14} className="text-[#D91E1E]" />
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  (11) 99958-6576
                </span>
              </a>

              <div className="text-[#888888] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="text-[#555555] text-xs uppercase tracking-widest block mb-1">Localização</span>
                São Paulo — SP, Brasil
              </div>

              <div className="text-[#888888] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="text-[#555555] text-xs uppercase tracking-widest block mb-1">Atendimento</span>
                Seg. a Sex. — 08h às 18h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A1A1A]">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#555555] text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            © {new Date().getFullYear()} FLG de Cortes e Vinco. Todos os direitos reservados.
          </p>
          <p
            className="text-[#555555] text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Facas para Corte e Vinco — São Paulo, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
