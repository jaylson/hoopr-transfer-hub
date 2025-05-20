
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoopr-dark to-black"></div>
      
      {/* Gradient orbs for visual effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-hoopr-blue rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-hoopr-purple rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para transformar o seu <span className="gradient-text">futuro no futebol</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais e clubes que já estão aproveitando o poder da maior rede de transferências do mundo.
          </p>
          
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">Registre-se gratuitamente</h3>
                <p className="text-gray-400 mb-6">
                  Comece hoje mesmo com nossa versão gratuita e explore todos os recursos básicos da plataforma.
                </p>
                <Button className="bg-gradient-hoopr hover:bg-hoopr-blue text-white w-full">
                  Criar conta gratuita
                </Button>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">Plano Premium</h3>
                <p className="text-gray-400 mb-6">
                  Acesso completo a todos os recursos avançados e suporte prioritário para sua equipe.
                </p>
                <Button variant="outline" className="border-hoopr-blue-light text-hoopr-blue-light hover:bg-hoopr-blue/10 w-full">
                  Ver planos Premium
                </Button>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Mais de 2.000 clubes e 10.000 profissionais já confiam na Hoopr.app.
                <br />
                Junte-se à maior comunidade de transferências do futebol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
