<template>
  <section class="faq">
    <h2>Preguntas Frecuentes</h2>
    <div class="faq-item">
      <input type="checkbox" id="faq1">
      <label for="faq1" class="faq-question">¿Cómo funciona la plataforma?</label>
      <div class="faq-answer">
        <p>Nuestra plataforma conecta a talentos con empresas a través de un sistema de búsqueda y filtrado eficiente.</p>
      </div>
    </div>

    <div class="faq-item">
      <input type="checkbox" id="faq2">
      <label for="faq2" class="faq-question">¿Cuáles son los requisitos para registrarse?</label>
      <div class="faq-answer">
        <p>Para registrarse, necesitas una dirección de correo electrónico válida y una contraseña segura.</p>
      </div>
    </div>

    <div class="faq-item">
      <input type="checkbox" id="faq3">
      <label for="faq3" class="faq-question">¿Es gratuito utilizar la plataforma?</label>
      <div class="faq-answer">
        <p>Sí, registrarse y utilizar la plataforma básica es gratuito. Existen opciones premium con funcionalidades adicionales.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection'
}
</script>

<style scoped>
.faq {
  background-color: #8A2BE2;
  color: #FFFFFF;
  padding: 40px;
}

.faq h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
}

.faq-item {
  position: relative;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  display: block;
  background-color: #4B0082;
  color: #FFFFFF;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid #ffffff;
}

.faq-answer {
  display: none;
  background-color: #ffffff;
  padding: 15px;
  font-size: 16px;
  color: black;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:checked + .faq-question + .faq-answer {
  display: block;
}
</style>
