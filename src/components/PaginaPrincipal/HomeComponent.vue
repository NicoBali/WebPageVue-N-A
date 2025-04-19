<template>
  <section class="hero">
    <video autoplay loop muted playsinline>
      <source src="@/assets/8252-207598592_medium.mp4" type="video/mp4">
    </video>
  <div class="fondo">
    <div class="hero-content">
      <h2>Bienvenido a Talent Job</h2>
      <p>La mejor plataforma para encontrar el talento adecuado o el empleo ideal.</p>
    </div>
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
  background: none;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

.hero video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1; /* Asegura que el contenido esté sobre el video */
  text-align: center; /* Centra el texto */
}

.fondo {
  box-shadow: 5px 10px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  opacity: 0.9;
  width: 50%;
  margin: 0 auto;           /* Centrado horizontal */
  text-align: center;       /* Centra el texto dentro */
  background-color: #ffffff;
  color:blueviolet;
}


</style>
