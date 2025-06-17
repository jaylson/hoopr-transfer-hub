
<section class="bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Por que escolher <span class="gradient-text">Hoopr.app</span>
            </h2>
            <p class="text-lg text-gray-300 max-w-2xl mx-auto">
                Nossa plataforma foi projetada para atender às necessidades específicas do mercado moderno de transferências de basquete.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            $features = array(
                array(
                    'title' => 'Rede Global',
                    'description' => 'Conecte-se com equipes e profissionais de todo o mundo em uma única plataforma.',
                    'icon' => '🌎'
                ),
                array(
                    'title' => 'Análise de Dados',
                    'description' => 'Decisões baseadas em dados com insights avançados sobre jogadores e tendências do mercado.',
                    'icon' => '📊'
                ),
                array(
                    'title' => 'Comunicação Segura',
                    'description' => 'Mensagens criptografadas e seguras para negociações confidenciais.',
                    'icon' => '🔒'
                ),
                array(
                    'title' => 'Gestão de Contratos',
                    'description' => 'Ferramentas para simplificar a criação e gestão de contratos.',
                    'icon' => '📝'
                ),
                array(
                    'title' => 'Scouting Inteligente',
                    'description' => 'Encontre talentos que se adequam perfeitamente aos critérios da sua equipe.',
                    'icon' => '🔍'
                ),
                array(
                    'title' => 'Análise de Vídeo',
                    'description' => 'Biblioteca abrangente de vídeos para avaliar o desempenho dos jogadores.',
                    'icon' => '🎥'
                )
            );
            
            foreach($features as $index => $feature): ?>
            <div class="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-blue-500 hover:border-opacity-30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 hover:shadow-opacity-10">
                <div class="text-4xl mb-4"><?php echo $feature['icon']; ?></div>
                <h3 class="text-xl font-semibold text-white mb-3"><?php echo $feature['title']; ?></h3>
                <p class="text-gray-400"><?php echo $feature['description']; ?></p>
            </div>
            <?php endforeach; ?>
        </div>
        
        <div class="mt-16 bg-gradient-to-r from-blue-500 from-opacity-10 to-purple-500 to-opacity-10 rounded-2xl p-8 border border-white border-opacity-5">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-2/3 mb-8 md:mb-0 md:mr-8">
                    <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
                        Benefícios Exclusivos para Membros
                    </h3>
                    <p class="text-gray-300 mb-6">
                        Acesso a recursos premium e oportunidades exclusivas disponíveis apenas para usuários registrados da plataforma Hoopr.
                    </p>
                    <ul class="space-y-3">
                        <?php 
                        $benefits = array(
                            'Acesso prioritário a talentos emergentes',
                            'Análise de mercado em tempo real',
                            'Suporte dedicado 24/7',
                            'Eventos e webinars exclusivos'
                        );
                        foreach($benefits as $benefit): ?>
                        <li class="flex items-center">
                            <i data-lucide="check" class="h-5 w-5 text-blue-400 mr-2"></i>
                            <span class="text-gray-300"><?php echo $benefit; ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="md:w-1/3 flex justify-center">
                    <div class="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-hoopr flex items-center justify-center shadow-xl shadow-blue-500 shadow-opacity-20">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/hoopr-logo-icon.png" alt="Benefícios Hoopr" class="w-16 h-16 md:w-24 md:h-24">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
