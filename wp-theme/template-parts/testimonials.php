
<section class="bg-black py-16 md:py-24">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                O que nossos <span class="gradient-text">clientes</span> dizem
            </h2>
            <p class="text-lg text-gray-300 max-w-2xl mx-auto">
                Veja como o Hoopr.app está transformando o mercado de transferências para equipes e profissionais de basquete.
            </p>
        </div>
        
        <div class="relative max-w-4xl mx-auto">
            <div class="overflow-hidden" id="testimonials-container">
                <div class="flex transition-transform duration-300 ease-in-out" id="testimonials-slider">
                    <?php
                    $testimonials = array(
                        array(
                            'quote' => 'O Hoopr.app transformou completamente nossa abordagem ao mercado de transferências. Encontramos talentos que não teríamos descoberto de outra forma.',
                            'author' => 'Michael Johnson',
                            'position' => 'Diretor Esportivo',
                            'club' => 'Chicago Bulls'
                        ),
                        array(
                            'quote' => 'A plataforma mais inovadora que já usei no basquete. Simplificou nosso processo de scouting e negociações de transferência.',
                            'author' => 'Sarah Williams',
                            'position' => 'Chefe de Scouting',
                            'club' => 'Boston Celtics'
                        ),
                        array(
                            'quote' => 'Como agente, o Hoopr.app me permitiu conectar meus clientes diretamente com equipes interessadas, eliminando intermediários desnecessários.',
                            'author' => 'David Thompson',
                            'position' => 'Agente NBA',
                            'club' => 'Elite Sports Management'
                        )
                    );
                    
                    foreach($testimonials as $testimonial): ?>
                    <div class="min-w-full px-4">
                        <div class="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-lg border border-gray-800 shadow-lg shadow-blue-500 shadow-opacity-5">
                            <svg class="w-12 h-12 text-blue-500 text-opacity-30 mb-6" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p class="text-xl md:text-2xl text-gray-200 mb-8">"<?php echo $testimonial['quote']; ?>"</p>
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-gradient-hoopr flex items-center justify-center text-white font-bold text-xl">
                                    <?php echo substr($testimonial['author'], 0, 1); ?>
                                </div>
                                <div class="ml-4">
                                    <p class="font-semibold text-white"><?php echo $testimonial['author']; ?></p>
                                    <p class="text-gray-400 text-sm"><?php echo $testimonial['position']; ?>, <?php echo $testimonial['club']; ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            
            <div class="flex justify-center mt-8 space-x-2" id="testimonials-dots">
                <?php for($i = 0; $i < count($testimonials); $i++): ?>
                <button class="w-3 h-3 rounded-full bg-gray-700 focus:outline-none" data-slide="<?php echo $i; ?>"></button>
                <?php endfor; ?>
            </div>
        </div>
    </div>
</section>
