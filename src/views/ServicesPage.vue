<template>
<HeaderComponent></HeaderComponent>
<ServicesPricing></ServicesPricing>
<FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from '@/components/PaginaPrincipal/HeaderComponent.vue';
import ServicesPricing from '../components/PlanesServicios/ServicesPricing.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';
export default {
    name: 'ServicesAndPricingPage',
    components: {
        HeaderComponent,
        ServicesPricing,
        FooterComponent
        
    }
};
</script>

<style scoped>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
