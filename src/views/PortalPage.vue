<template>
    <PortalUsuarioComponent></PortalUsuarioComponent>
    <FooterComponent></FooterComponent>
  
</template>

<script>
import PortalUsuarioComponent from '@/components/PortalUsuario/PortalUsuarioComponent.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';
export default {
    name: 'PortalPage',
    components:{
        PortalUsuarioComponent,
        FooterComponent

    }

};
</script>

<style scoped>



*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #ceced1;
 
}

</style>