
<div class="pt-24 bg-gradient-to-b from-gray-900 to-black text-white">
    <div class="container mx-auto px-6 py-16 md:py-24">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:w-1/2 mb-12 md:mb-0">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <?php 
                    $hero_title = get_option('hoopr_hero_title', 'Revolucionando o mercado de <span class="gradient-text">transferências de basquete</span>');
                    echo $hero_title;
                    ?>
                </h1>
                <p class="text-lg md:text-xl text-gray-300 mb-8">
                    <?php 
                    $hero_description = get_option('hoopr_hero_description', 'Hoopr.app conecta equipes, jogadores e agentes para otimizar o processo de transferência e maximizar oportunidades no basquete global.');
                    echo $hero_description;
                    ?>
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#" class="bg-gradient-hoopr hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-lg transition-colors inline-block text-center">
                        Começar Agora
                    </a>
                    <a href="#" class="border border-blue-400 text-blue-400 hover:bg-blue-600 hover:bg-opacity-10 px-8 py-6 text-lg rounded-lg transition-colors inline-block text-center">
                        Ver Demo
                    </a>
                </div>
                <div class="mt-8 flex items-center">
                    <div class="flex -space-x-2">
                        <?php for($i = 1; $i <= 4; $i++): ?>
                        <div class="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center overflow-hidden">
                            <span class="text-xs"><?php echo chr(64 + $i); ?></span>
                        </div>
                        <?php endfor; ?>
                    </div>
                    <p class="ml-4 text-sm text-gray-400">
                        Mais de <span class="font-bold text-white">2.000+</span> equipes já usando
                    </p>
                </div>
            </div>
            <div class="w-full md:w-1/2 relative">
                <div class="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-blue-500 from-opacity-20 to-purple-500 to-opacity-20 backdrop-blur-sm border border-white border-opacity-10">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-24 h-24 rounded-full bg-gradient-hoopr flex items-center justify-center shadow-lg">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/hoopr-logo-icon.png" alt="Hoopr" class="w-12 h-12">
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black from-opacity-80 to-transparent p-6">
                        <h3 class="text-white text-xl font-medium">Plataforma Intuitiva</h3>
                        <p class="text-gray-300 text-sm">Interface moderna e fácil de usar</p>
                    </div>
                </div>
                <div class="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-hoopr rounded-lg opacity-50 blur-xl"></div>
                <div class="absolute -top-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-30 blur-xl"></div>
            </div>
        </div>
    </div>
</div>
