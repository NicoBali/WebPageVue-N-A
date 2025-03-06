<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <HomeComponent></HomeComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
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
