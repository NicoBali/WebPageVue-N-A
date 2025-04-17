<template>
    <HeaderComponent></HeaderComponent>
    <BlogComponet></BlogComponet>
    <FooterComponent></FooterComponent>
  
</template>

<script>
import HeaderComponent from '@/components/PaginaPrincipal/HeaderComponent.vue';
import BlogComponet from '@/components/Blog/BlogComponet.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';

export default {
    name: 'CompanyPage',
    components:{
        HeaderComponent,
        BlogComponet,
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