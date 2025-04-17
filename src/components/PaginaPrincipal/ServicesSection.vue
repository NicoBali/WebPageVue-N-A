<template>
  <section class="services">
    <h2>Servicios</h2>
    <div class="services-container">
      <div class="service-item">
        <div class="service-icon">
          <i class="fas fa-cogs"></i>
        </div>
        <div class="service-description">
          <h3>Servicio 1: Asesoría Personalizada</h3>
          <p>Asesoría individualizada para candidatos y empresas en busca de talento. Ayudamos a los empleados a identificar sus habilidades y a las empresas a encontrar candidatos alineados con sus objetivos, optimizando así el proceso de selección.</p>
        </div>
      </div>

      <div class="service-item">
        <div class="service-icon">
          <i class="fas fa-rocket"></i>
        </div>
        <div class="service-description">
          <h3>Servicio 2: Talleres de Capacitación</h3>
          <p>Talleres interactivos que mejoran las habilidades laborales de los candidatos. Proporcionamos herramientas clave para destacar en entrevistas, asegurando que los futuros empleados estén mejor preparados para el mercado laboral.</p>
        </div>
      </div>

      <div class="service-item">
        <div class="service-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="service-description">
          <h3>Servicio 3: Plataforma de Conexión Laboral</h3>
          <p>Un espacio que conecta a empleados en búsqueda de oportunidades con empresas en expansión. Facilita el acceso a ofertas de trabajo y permite a las empresas encontrar talentos calificados para su crecimiento.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection'
}
</script>

<style scoped>
.services {
  background-color: #F5F5F5;
  color: #000000;
  padding: 60px 40px;
}

.services h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  color: #4B0082;
}

.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.service-item {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding-left: 20px;
  border-left: 2px solid #4B0082;
}

.service-icon {
  background-color: #8A2BE2;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.service-icon i {
  font-size: 24px;
  color: #FFFFFF;
}

.service-description {
  max-width: 500px;
  text-align: left;
}

.service-description h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #4B0082;
}

.service-description p {
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
}
</style>
