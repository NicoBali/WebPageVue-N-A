<template>
    <HeaderComponent></HeaderComponent>
    <RegistroComponent></RegistroComponent>
    <FooterComponent></FooterComponent>
  
</template>

<script>
import HeaderComponent from '@/components/PaginaPrincipal/HeaderComponent.vue';
import RegistroComponent from '../components/Registro/RegistroComponent.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';
export default {
    name: 'RegistroPage',
    components:{
        HeaderComponent,
        RegistroComponent,
        FooterComponent
    }

};
</script>

<style>

</style>