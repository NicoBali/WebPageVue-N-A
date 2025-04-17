<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <HomeComponent></HomeComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/PaginaPrincipal/HeaderComponent.vue';
import HomeComponent from '@/components/PaginaPrincipal/HomeComponent.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';
export default {
  name: 'HomePage',

  components: {
    HeaderComponent,
    HomeComponent,
    FooterComponent
  }
};

</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


</style>
