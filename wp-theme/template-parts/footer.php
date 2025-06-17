
<footer class="bg-gradient-to-r from-black to-gray-900 text-white py-16">
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="lg:col-span-2">
                <div class="flex items-center mb-6">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/hoopr-logo.png" alt="<?php bloginfo('name'); ?>" class="h-10">
                </div>
                <p class="text-gray-400 mb-6 max-w-md">
                    Conectando o mundo do basquete através da tecnologia. A plataforma líder para transferências profissionais.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <i data-lucide="facebook" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <i data-lucide="twitter" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <i data-lucide="linkedin" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-6">Produto</h3>
                <ul class="space-y-3">
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Funcionalidades</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Preços</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Demo</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">API</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-6">Suporte</h3>
                <ul class="space-y-3">
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Documentação</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Centro de Ajuda</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Status</a></li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 text-center">
            <p class="text-gray-400">
                © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.
            </p>
        </div>
    </div>
</footer>
