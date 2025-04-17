<template>
    <HeaderComponent></HeaderComponent>
    <CompanyComponent></CompanyComponent>
    <FooterComponent></FooterComponent>
  
</template>

<script>
import HeaderComponent from '@/components/PaginaPrincipal/HeaderComponent.vue';
import CompanyComponent from '../components/SoyUnaEmpresa/CompanyComponet.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';
export default {
    name: 'CompanyPage',
    components:{
        HeaderComponent,
        CompanyComponent,
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