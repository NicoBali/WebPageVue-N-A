<template>
  <section class="pricing">
    <h2>Planes y Precios</h2>
    <div class="pricing-container">
      <div class="pricing-card basic">
        <h3>Plan Básico</h3>
        <p class="price">$29/mes</p>
        <ul>
          <li>Acceso a funciones básicas</li>
          <li>Soporte por correo electrónico</li>
          <li>Actualizaciones regulares</li>
        </ul>
        <router-link to="/servicesandprincing">
          <button class="cta-button">Seleccionar</button>
        </router-link>
      </div>

      <div class="pricing-card standard">
        <h3>Plan Estándar</h3>
        <p class="price">$49/mes</p>
        <ul>
          <li>Acceso a todas las funciones básicas</li>
          <li>Soporte en vivo</li>
          <li>Informes detallados</li>
          <li>Acceso a características avanzadas</li>
        </ul>
        <router-link to="/servicesandprincing">
          <button class="cta-button">Seleccionar</button>
        </router-link>
      </div>

      <div class="pricing-card premium">
        <h3>Plan Premium</h3>
        <p class="price">$79/mes</p>
        <ul>
          <li>Todo en el Plan Estándar</li>
          <li>Consultoría personalizada</li>
          <li>Soporte prioritario</li>
          <li>Funciones exclusivas</li>
          <li>Acceso anticipado a nuevas funciones</li>
        </ul>
        <router-link to="/servicesandprincing">
          <button class="cta-button">Seleccionar</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingSection'
}
</script>

<style scoped>
.pricing {
  background: linear-gradient(to right, #4B0082, #8A2BE2);
  color: #FFFFFF;
  padding: 40px;
  text-align: center;
}

.pricing h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.pricing-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.pricing-card {
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
}

.pricing-card h3 {
  font-size: 24px;
  margin: 10px 0;
}

.pricing-card .price {
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.pricing-card ul li {
  margin: 10px 0;
}

.cta-button {
  background-color: #8e24aa;
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
  background-color: #6b1f8b;
}
</style>
