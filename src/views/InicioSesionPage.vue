<template>
  <HeaderComponent></HeaderComponent>
  <InicioSesionComponent></InicioSesionComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from '@/components/PaginaPrincipal/HeaderComponent.vue';
import InicioSesionComponent from '@/components/InicioSesion/InicioSesionComponent.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';
export default {
    name: 'InicioSesionPage',
    components: {
        HeaderComponent,
        InicioSesionComponent,
        FooterComponent
    }

}
</script>

<style scoped>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>