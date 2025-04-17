<template>
  <section class="hero">
    <div class="hero-content">
      <h2>Bienvenido a Talent Job</h2>
      <p>La mejor plataforma para encontrar el talento adecuado o el empleo ideal.</p>
    </div>
  </section>

  <AboutSection />
  <ServicesSection />
  <FeaturesSection />
  <HowItWorksSection />
  <TestimonialsSection />
  <PricingSection />
  <FaqSection />
  <BlogSection />
</template>

<script>
import AboutSection from './AboutSection.vue';
import ServicesSection from './ServicesSection.vue';
import FeaturesSection from './FeaturesSection.vue';
import HowItWorksSection from './HowItWorksSection.vue';
import TestimonialsSection from './TestimonialsSection.vue';
import PricingSection from './PricingSection.vue';
import FaqSection from './FaqSection.vue';
import BlogSection from './BlogSection.vue';

export default {
    name: 'HomeComponent',
    components: {
        AboutSection,
        ServicesSection,
        FeaturesSection,
        HowItWorksSection,
        TestimonialsSection,
        PricingSection,
        FaqSection,
        BlogSection
    }
};
</script>

<style scoped>

.home {
    font-family: 'Poppins', sans-serif;
    background-color: #121212;
    color: white;
    margin: 0;
    padding: 0;
}

section {
    padding: 60px; /* Aumenta el padding para hacer las secciones más altas */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
    color: #FFFFFF; /* Blanco para el texto de las secciones */
    background-color: #FFFFFF; /* Fondo blanco predeterminado para las secciones */
}

.hero {
    position: relative;
    padding: 60px;
    color: #FFFFFF; /* Blanco para el texto */
    background: linear-gradient(
        #300033cc, /* Rosado oscuro con opacidad */
        #6d3571c8
    ), url('@/assets/trabajo.jpg') no-repeat center center;
    background-size: cover; /* Asegura que la imagen cubra toda la sección */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

.hero-content {
    position: relative;
    z-index: 1; /* Asegura que el contenido esté sobre el degradado */
    text-align: center; /* Centra el texto */
}
</style>