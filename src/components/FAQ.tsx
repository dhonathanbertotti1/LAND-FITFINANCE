import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O que é o List Finance?",
    answer: "O List Finance é um sistema inteligente de gestão financeira que ajuda você a controlar gastos, criar metas e visualizar sua saúde financeira de forma simples e poderosa."
  },
  {
    question: "É seguro conectar minhas contas bancárias?",
    answer: "Sim! Utilizamos as tecnologias mais seguras do mercado e criptografia de nível bancário. Seus dados de acesso nunca são armazenados por nós, apenas as transações para fins de relatório."
  },
  {
    question: "Posso usar o List Finance no meu celular?",
    answer: "Com certeza. O List Finance possui um aplicativo mobile dedicado para iOS e Android, além de uma versão web totalmente responsiva que funciona em qualquer navegador."
  },
  {
    question: "Como os relatórios de IA me ajudam?",
    answer: "Nossa inteligência artificial analisa seus padrões de consumo e sugere onde você pode economizar, além de prever seus gastos futuros com base no seu histórico."
  },
  {
    question: "Posso exportar meus dados para o contador?",
    answer: "Sim. Você pode exportar todos os seus relatórios e transações em formatos como PDF, Excel e CSV a qualquer momento, facilitando a declaração de impostos ou gestão empresarial."
  },
  {
    question: "Como funciona o cancelamento?",
    answer: "Não temos contratos de fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel de configurações, sem multas ou burocracia."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-slate-600">
            Tire suas dúvidas sobre o funcionamento do List Finance.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-2 rounded-3xl transition-all overflow-hidden ${
                activeIndex === index ? "border-primary bg-primary/5 shadow-lg shadow-primary/5" : "border-slate-100 bg-slate-50"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  activeIndex === index ? "bg-primary text-white rotate-180" : "bg-white text-slate-400"
                }`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
