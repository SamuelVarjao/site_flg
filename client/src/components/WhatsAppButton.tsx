/*
 * WhatsAppButton — Botão flutuante de WhatsApp
 * Design: Círculo verde com ícone, posicionado no canto inferior direito
 */

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999586576?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20FLG.";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      aria-label="Fale conosco no WhatsApp"
      style={{ borderRadius: "50%" }}
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </motion.a>
  );
}
