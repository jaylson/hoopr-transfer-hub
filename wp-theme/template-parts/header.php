
<header class="w-full bg-gradient-to-r from-gray-900 to-black py-4 px-6 fixed top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
            <a href="<?php echo home_url(); ?>" class="flex items-center">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/hoopr-logo.png" alt="<?php bloginfo('name'); ?>" class="h-10">
            </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'flex space-x-6',
                'container' => false,
                'fallback_cb' => false,
                'add_li_class' => '',
                'link_class' => 'text-white hover:text-blue-400 transition-colors',
            ));
            ?>
        </nav>

        <div class="hidden md:flex items-center space-x-4">
            <a href="#" class="text-white hover:text-blue-400 hover:bg-transparent px-4 py-2">Login</a>
            <a href="#" class="bg-gradient-hoopr hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">Registrar</a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" id="mobile-menu-toggle">
            <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
    </div>

    <!-- Mobile Navigation -->
    <div id="mobile-menu" class="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden hidden flex-col justify-center items-center space-y-6">
        <button class="absolute top-5 right-5 text-white" id="mobile-menu-close">
            <i data-lucide="x" class="w-6 h-6"></i>
        </button>
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_class' => 'flex flex-col space-y-6 text-center',
            'container' => false,
            'fallback_cb' => false,
            'link_class' => 'text-white text-xl',
        ));
        ?>
        <div class="flex flex-col space-y-4 mt-6">
            <a href="#" class="text-white hover:text-blue-400 px-4 py-2">Login</a>
            <a href="#" class="bg-gradient-hoopr hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Registrar</a>
        </div>
    </div>
</header>
