<template>
  <section class="how-it-works">
    <h2>Cómo Funciona</h2>
    <p>Te explicamos de manera sencilla cómo puedes empezar a usar nuestra plataforma para encontrar empleo o talentos.</p>
    
    <div class="how-it-works-container">
      <div class="step-box">
        <h3>Paso 1: Registro</h3>
        <p>Regístrate fácilmente con tu correo electrónico y crea tu perfil en pocos minutos.</p>
      </div>
      
      <div class="step-box">
        <h3>Paso 2: Completa tu Perfil</h3>
        <p>Asegúrate de agregar toda tu experiencia laboral, habilidades, y aspiraciones profesionales.</p>
      </div>
      
      <div class="step-box">
        <h3>Paso 3: Busca y Postula</h3>
        <p>Utiliza nuestras herramientas de búsqueda para filtrar empleos o talentos, y postula con un solo clic.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorksSection'
}
</script>

<style scoped>
.how-it-works {
  background: linear-gradient(to bottom left, #500068, #8f8787);
  color: #FFFFFF;
  padding: 60px 40px;
  text-align: center;
}

.how-it-works h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.how-it-works p {
  margin-bottom: 40px;
}

.how-it-works-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
}

.step-box {
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: left;
}

.step-box h3 {
  font-size: 24px;
  color: #4B0082;
  margin-bottom: 10px;
}

.step-box p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
