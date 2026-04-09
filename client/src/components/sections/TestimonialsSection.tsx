/*
 * TestimonialsSection — FLG de Cortes e Vinco
 * Design: Carrossel horizontal com aspas grandes em vermelho
 * Animação: Slide com fade entre depoimentos
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A FLG superou nossas expectativas em todos os aspectos. A precisão das facas de corte e vinco é impressionante — zero erros de alinhamento em toda a produção. Parceria de longa data que recomendamos sem hesitar.",
    author: "Carlos Mendonça",
    role: "Gerente de Produção",
    company: "Embalagens Premium SP",
    initials: "CM",
  },
  {
    quote:
      "Trabalhamos com a FLG há mais de 8 anos e a qualidade é sempre consistente. O prazo de entrega é excelente e o suporte técnico é diferenciado. Não trocamos por nenhum outro fornecedor.",
    author: "Ana Paula Ribeiro",
    role: "Diretora Comercial",
    company: "Gráfica Ribeiro & Filhos",
    initials: "AP",
  },
  {
    quote:
      "Precisávamos de um design especial para nossas pastas corporativas e a equipe da FLG desenvolveu exatamente o que precisávamos. Processo ágil, comunicação clara e resultado final perfeito.",
    author: "Roberto Alves",
    role: "Proprietário",
    company: "Papelaria Alves & Cia",
    initials: "RA",
  },
  {
    quote:
      "A qualidade dos materiais usados pela FLG é notável. Nossas embalagens ficaram com um acabamento muito superior ao que tínhamos antes. A entrega rápida também faz toda a diferença no nosso processo.",
    author: "Fernanda Costa",
    role: "Coordenadora de Compras",
    company: "Indústria Gráfica Paulista",
    initials: "FC",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { ref, isInView } = useScrollReveal(0.1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
  };

  return (
    <section id="depoimentos" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background quote decoration */}
      <div
        className="absolute right-8 top-8 text-[20rem] leading-none text-[#1A1A1A] select-none pointer-events-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        "
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flg-section-label mb-4">Clientes Satisfeitos</div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none">
            O que Dizem sobre{" "}
            <span className="text-[#D91E1E]">a FLG</span>
          </h2>
          <span className="flg-red-line" />
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-[1fr_auto] gap-12 items-center"
              >
                {/* Quote content */}
                <div className="bg-[#1C1C1C] border border-[#2A2A2A] p-10 relative">
                  {/* Top red accent */}
                  <div className="absolute top-0 left-0 w-16 h-0.5 bg-[#D91E1E]" />

                  {/* Quote icon */}
                  <Quote size={40} className="text-[#D91E1E] mb-6 opacity-60" />

                  {/* Quote text */}
                  <blockquote
                    className="text-xl text-[#E0E0E0] leading-relaxed mb-8 italic"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                  >
                    "{testimonials[current].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#D91E1E] flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-white text-sm font-bold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div>
                      <div
                        className="text-white font-semibold text-base"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {testimonials[current].author}
                      </div>
                      <div
                        className="text-[#888888] text-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {testimonials[current].role} — {testimonials[current].company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side testimonial previews */}
                <div className="hidden lg:flex flex-col gap-4 w-64">
                  {testimonials.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`text-left p-4 border transition-all duration-300 ${
                        i === current
                          ? "border-[#D91E1E] bg-[#D91E1E]/5"
                          : "border-[#2A2A2A] bg-[#1C1C1C] hover:border-[#D91E1E]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                            i === current ? "bg-[#D91E1E] text-white" : "bg-[#2A2A2A] text-[#888888]"
                          }`}
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <div
                            className={`text-xs font-semibold ${i === current ? "text-white" : "text-[#888888]"}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {t.author}
                          </div>
                          <div
                            className="text-xs text-[#555555]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {t.company}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:border-[#D91E1E] hover:text-[#D91E1E] transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:border-[#D91E1E] hover:text-[#D91E1E] transition-all duration-200"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 ${
                    i === current ? "w-8 h-1 bg-[#D91E1E]" : "w-4 h-1 bg-[#333333]"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
