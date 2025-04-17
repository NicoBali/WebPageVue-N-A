<template>
  <section class="features">
    <h2>Nuestras Características</h2>
    <p>Descubre las funcionalidades que nos hacen únicos y nos diferencian en el mercado. Cada detalle ha sido diseñado para ofrecerte la mejor experiencia posible.</p>
    
    <div class="features-container">
      <div class="feature-box">
        <div class="icon-circle">
          <i class="fas fa-search feature-icon"></i>
        </div>
        <h3>Búsqueda Avanzada</h3>
        <p>Filtra las ofertas de empleo con precisión según tu ubicación, salario, y habilidades específicas.</p>
      </div>
      
      <div class="feature-box">
        <div class="icon-circle">
          <i class="fas fa-user feature-icon"></i>
        </div>
        <h3>Perfiles Personalizados</h3>
        <p>Crea un perfil profesional destacando tus habilidades, experiencias, y logros.</p>
      </div>
      
      <div class="feature-box">
        <div class="icon-circle">
          <i class="fas fa-bell feature-icon"></i>
        </div>
        <h3>Alerta de Empleos</h3>
        <p>Recibe notificaciones automáticas cuando haya nuevas oportunidades que se ajusten a tus intereses.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style scoped>
.features {
  background: linear-gradient(to bottom, #4B0082, #8A2BE2);
  color: #FFFFFF;
  padding: 80px 40px;
  text-align: center;
}

.features h2 {
  font-size: 40px;
  margin-bottom: 30px;
}

.features p {
  font-size: 18px;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
}

.feature-box {
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 40px 20px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.feature-box h3 {
  font-size: 24px;
  color: #4B0082;
  margin-bottom: 15px;
}

.feature-box p {
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 0;
}

.icon-circle {
  display: inline-block;
  background-color: #6c63ff;
  border-radius: 50%;
  padding: 12px;
  margin-bottom: 15px;
}

.feature-icon {
  font-size: 40px;
  color: white;
}
</style>
