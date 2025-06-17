
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/hoopr-logo.png">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div class="min-h-screen bg-gray-900">
        <?php get_template_part('template-parts/header'); ?>
        
        <main>
            <?php get_template_part('template-parts/hero'); ?>
            <?php get_template_part('template-parts/features'); ?>
            <?php get_template_part('template-parts/how-it-works'); ?>
            <?php get_template_part('template-parts/testimonials'); ?>
            <?php get_template_part('template-parts/cta'); ?>
        </main>
        
        <?php get_template_part('template-parts/footer'); ?>
    </div>
    
    <?php wp_footer(); ?>
</body>
</html>
