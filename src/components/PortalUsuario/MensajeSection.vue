<template>
<main class="content">
  <section class="hero">
            <h2>Explora, Administra y Postúlate</h2>
            <p>Descubre las oportunidades que te esperan y gestiona tu perfil de manera sencilla.</p>
        </section>
</main>
</template>

<script>
export default {
    name:'MensajeSection'

}
</script>

<style scoped>

.content {
    flex: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero {
    text-align: center;
    padding: 40px;
    background: #fff;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.hero h2 {
    color: #4B0082;
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.hero p {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
}

</style>