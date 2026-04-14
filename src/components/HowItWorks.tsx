import { motion } from "motion/react";
import { UserPlus, MessageCircle, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Crie sua Conta",
    description: "Cadastre-se em segundos e escolha o plano que melhor se adapta ao seu momento financeiro."
  },
  {
    icon: MessageCircle,
    title: "Mande um WhatsApp",
    description: "Envie um áudio, texto ou foto do seu gasto para o nosso número. Nossa IA cuida do resto."
  },
  {
    icon: TrendingUp,
    title: "Acompanhe no App",
    description: "Visualize seus relatórios detalhados, metas e saúde financeira em um dashboard intuitivo."
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Como começar no <span className="text-primary">List Finance?</span>
          </h2>
          <p className="text-lg text-slate-400">
            Simplicidade é a nossa prioridade. Em 3 passos você assume o controle total da sua vida financeira.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl shadow-primary/40 relative border border-white/10">
                <step.icon size={36} />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:bg-slate-100 transition-all"
          >
            Começar Agora
            <ArrowRight size={24} className="text-primary" />
          </motion.a>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_70%)]"></div>
    </section>
  );
}
