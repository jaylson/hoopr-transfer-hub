
<?php
// Evitar acesso direto
if (!defined('ABSPATH')) {
    exit;
}

// Configuração do tema
function hoopr_theme_setup() {
    // Suporte a recursos do WordPress
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('customize-selective-refresh-widgets');
    
    // Registrar menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'hoopr'),
        'footer' => __('Menu do Rodapé', 'hoopr'),
    ));
}
add_action('after_setup_theme', 'hoopr_theme_setup');

// Enfileirar scripts e estilos
function hoopr_enqueue_scripts() {
    // Tailwind CSS
    wp_enqueue_style('tailwind-css', 'https://cdn.tailwindcss.com');
    
    // Estilo do tema
    wp_enqueue_style('hoopr-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Scripts customizados
    wp_enqueue_script('hoopr-script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), '1.0.0', true);
    
    // Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'hoopr_enqueue_scripts');

// Configurar Tailwind CSS
function hoopr_tailwind_config() {
    echo '<script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        "hoopr-blue": {
                            light: "#33C3F0",
                            DEFAULT: "#1EAEDB",
                            dark: "#0FA0CE",
                        },
                        "hoopr-purple": {
                            light: "#9b87f5",
                            DEFAULT: "#7E69AB",
                            dark: "#6E59A5",
                        },
                        "hoopr-dark": "#1A1F2C",
                    },
                    backgroundImage: {
                        "gradient-hoopr": "linear-gradient(135deg, #33C3F0 0%, #6E59A5 100%)",
                    },
                }
            }
        }
    </script>';
}
add_action('wp_head', 'hoopr_tailwind_config');

// Customizar área de widgets
function hoopr_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar Principal', 'hoopr'),
        'id' => 'sidebar-1',
        'description' => __('Widgets para a sidebar principal', 'hoopr'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'hoopr_widgets_init');

// Personalizar excerpt
function hoopr_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'hoopr_excerpt_length');

// Custom Post Types (opcional)
function hoopr_create_post_types() {
    // Depoimentos
    register_post_type('testimonial', array(
        'public' => true,
        'label' => 'Depoimentos',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
    ));
    
    // Funcionalidades
    register_post_type('feature', array(
        'public' => true,
        'label' => 'Funcionalidades',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-star-filled',
    ));
}
add_action('init', 'hoopr_create_post_types');
?>
