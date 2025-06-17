
<section class="bg-gray-900 py-16 md:py-24">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Como funciona o <span class="gradient-text">Hoopr.app</span>
            </h2>
            <p class="text-lg text-gray-300 max-w-2xl mx-auto">
                Um processo simples e eficiente para revolucionar a forma como as transferências de jogadores são conduzidas.
            </p>
        </div>
        
        <div class="relative">
            <!-- Linha conectora -->
            <div class="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-400 transform -translate-x-1/2 hidden md:block"></div>
            
            <div class="space-y-24">
                <?php
                $steps = array(
                    array(
                        'number' => '01',
                        'title' => 'Crie Seu Perfil',
                        'description' => 'Configure o perfil da sua equipe, organização ou jogador com todos os detalhes relevantes para o mercado.'
                    ),
                    array(
                        'number' => '02',
                        'title' => 'Explore Oportunidades',
                        'description' => 'Navegue pela nossa extensa rede de equipes, jogadores e agentes para encontrar as melhores oportunidades.'
                    ),
                    array(
                        'number' => '03',
                        'title' => 'Conecte-se Diretamente',
                        'description' => 'Entre em contato direto com tomadores de decisão sem intermediários desnecessários.'
                    ),
                    array(
                        'number' => '04',
                        'title' => 'Feche Negócios',
                        'description' => 'Use nossas ferramentas de negociação e contrato para finalizar transferências de forma eficiente.'
                    )
                );
                
                foreach($steps as $index => $step): ?>
                <div class="relative flex flex-col <?php echo $index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'; ?> items-center">
                    <div class="md:w-1/2 mb-8 md:mb-0 md:px-8">
                        <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 relative">
                            <span class="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-hoopr flex items-center justify-center text-white font-bold">
                                <?php echo $step['number']; ?>
                            </span>
                            <h3 class="text-2xl font-bold text-white mb-3"><?php echo $step['title']; ?></h3>
                            <p class="text-gray-400"><?php echo $step['description']; ?></p>
                        </div>
                    </div>
                    <div class="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-hoopr z-10"></div>
                    <div class="md:w-1/2 md:px-8">
                        <div class="h-48 md:h-64 rounded-lg bg-gradient-to-r from-blue-500 from-opacity-10 to-purple-500 to-opacity-10 flex items-center justify-center border border-white border-opacity-5">
                            <div class="w-16 h-16 rounded-full bg-gradient-hoopr flex items-center justify-center">
                                <span class="text-2xl"><?php echo $step['number']; ?></span>
                            </div>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
