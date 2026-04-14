import { motion } from "motion/react";
import { LayoutDashboard, CheckCircle2, ArrowRight, TrendingUp, Wallet, CreditCard, PieChart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-8 tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Novo: Inteligência Financeira 2.0
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 text-slate-900 tracking-tighter">
              Controle suas <span className="text-primary">finanças</span> pelo <span className="text-slate-400">WhatsApp.</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg font-medium">
              Mande um áudio, texto ou foto do comprovante e deixe nossa IA organizar tudo. Ou se preferir, tenha o controle total com lançamentos manuais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
              >
                <LayoutDashboard size={24} />
                Começar Grátis
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#como-funciona"
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:border-primary/30 transition-all flex items-center justify-center gap-2"
              >
                Ver Demo
                <ArrowRight size={20} />
              </motion.a>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {["Controle de Gastos", "Relatórios IA", "Metas Inteligentes", "Segurança Bancária"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                  <CheckCircle2 className="text-primary" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Professional Financial Dashboard Preview */}
            <div className="relative z-10 bg-slate-900 p-1.5 rounded-[48px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-slate-800">
              <div className="bg-slate-950 rounded-[42px] overflow-hidden border border-slate-800">
                <div className="bg-slate-900/50 backdrop-blur-md p-6 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Wallet className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">Meu Saldo</h4>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Atualizado agora</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-700" />)}
                  </div>
                </div>
                
                <div className="p-8 space-y-8 h-[480px] overflow-y-auto custom-scrollbar">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-3xl border border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <TrendingUp size={16} className="text-green-400" />
                        <span className="text-[10px] font-bold text-green-400">+R$ 1.200</span>
                      </div>
                      <p className="text-2xl font-bold text-white tracking-tight">R$ 12.450</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Saldo Total</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-3xl border border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <CreditCard size={16} className="text-red-400" />
                        <span className="text-[10px] font-bold text-red-400">-R$ 450</span>
                      </div>
                      <p className="text-2xl font-bold text-white tracking-tight">R$ 3.120</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gastos Mês</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Meta: Reserva de Emergência</span>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">72% Concluído</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[72%] rounded-full shadow-[0_0_12px_rgba(0,102,255,0.5)]"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-900/80 p-5 rounded-3xl border border-slate-800">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                            <PieChart size={20} />
                          </div>
                          <span className="font-bold text-white text-sm">Distribuição</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Abril 2024</span>
                      </div>
                      <div className="space-y-3">
                        {[{l:"Alimentação", v:"R$ 850", p:"35%"}, {l:"Lazer", v:"R$ 420", p:"15%"}, {l:"Contas", v:"R$ 1.850", p:"50%"}].map((s, i) => (
                          <div key={i} className="flex items-center justify-between bg-slate-950 p-3 rounded-2xl border border-slate-800/50">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-green-400' : 'bg-orange-400'}`} />
                              <span className="text-xs font-bold text-slate-300">{s.l}</span>
                            </div>
                            <span className="text-xs font-bold text-white">{s.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-20 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Economia Total</p>
                <p className="text-xl font-bold text-slate-900">R$ 15.430</p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}