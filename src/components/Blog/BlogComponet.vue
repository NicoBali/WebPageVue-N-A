<template>
    <ConsejosSection></ConsejosSection>
    <CarreraSection></CarreraSection>
    <NetworkingSection></NetworkingSection>
    <TendenciasSection></TendenciasSection>
  
</template>

<script>
import ConsejosSection from './ConsejosSection.vue';
import CarreraSection from './CarreraSection.vue';
import TendenciasSection from './TendenciasSection.vue';
import NetworkingSection from './NetworkingSection.vue';

export default {
    components:{
        ConsejosSection,
        CarreraSection,
        TendenciasSection,
        NetworkingSection
    }

};
</script>

<style>


</style>