<template>
    <HeaderPortal></HeaderPortal>
    <MensajeSection></MensajeSection>
    <OpcionSection></OpcionSection>
  
</template>

<script>
import HeaderPortal from './HeaderPortal.vue';
import MensajeSection from './MensajeSection.vue';
import OpcionSection from './OpcionSection.vue';

export default {
    name:'PortalUsuarioComponent',
    components:{
        HeaderPortal,
        MensajeSection,
        OpcionSection
        
    }

};
</script>

<style>

</style>