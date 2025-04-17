<template>
    <HeaderComponent></HeaderComponent>
    <TalentComponent></TalentComponent>
    <FooterComponent></FooterComponent>
  
</template>

<script>
import HeaderComponent from '@/components/PaginaPrincipal/HeaderComponent.vue';
import TalentComponent from '@/components/SoyUnTalento/TalentComponent.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';

export default {
    name: 'TalentPage',
    components:{
        HeaderComponent,
        TalentComponent,
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