<template>
  <HeroSection />
  <BenefitsSection />
  <TestimonialsSection />
  <CallToActionSection />
</template>

<script>
import HeroSection from './HeroSection.vue';
import BenefitsSection from './BenefitsSection.vue';
import TestimonialsSection from './TestimonialsSection.vue';
import CallToActionSection from './CallToActionSection.vue';


export default {
  components: {
    HeroSection,
    BenefitsSection,
    TestimonialsSection,
    CallToActionSection
  }
}
</script>

<style>

</style>
