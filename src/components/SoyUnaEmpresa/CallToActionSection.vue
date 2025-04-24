<template>
  <section class="call-to-action">
    <h2>¿Listo para Comenzar?</h2>
    <p>Regístrate ahora y empieza a encontrar el talento perfecto para tu empresa.</p>
    <button class="cta-button"><router-link :to="{ path: '/register', query: { tipo: 'empresa' } }">¡Regístrate!</router-link></button>
  </section>
</template>

<script>
export default {
    name:'CallToActionSection'

}
</script>

<style scoped>
*{
    color: white;
}

.call-to-action {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(90deg, #0f0122, #350742); /* Morado oscuro a morado claro */
}

.call-to-action h2 {
    font-size: 2em;
}

.call-to-action p {
    margin: 10px 0;
}

.cta-button {
    background-color: #8e24aa; /* Morado claro */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
}

.cta-button a {
    text-decoration: none;
    color: inherit;
}

.cta-button:hover {
    background-color: #6b1f8b; /* Un tono más oscuro */
}

</style>
