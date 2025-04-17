<template>
  <section class="blog">
    <h2>Blog</h2>
    <div class="blog-container">
      <div class="blog-item">
        <h3>10 Consejos para Encontrar el Empleo Ideal</h3>
        <p>En este artículo, exploramos los mejores consejos para ayudarte a encontrar el empleo ideal. Desde cómo crear un currículum impresionante hasta cómo prepararte para las entrevistas, estos consejos te ayudarán a destacarte en el mercado laboral.</p>
        <router-link to="/blog">Leer más</router-link>
      </div>
      
      <div class="blog-item">
        <h3>Cómo Redefinir Tu Carrera Profesional</h3>
        <p>Si estás considerando un cambio de carrera, este artículo es para ti. Te damos estrategias para evaluar tus habilidades, explorar nuevas oportunidades y hacer una transición efectiva a una nueva carrera.</p>
        <router-link to="/blog">Leer más</router-link>
      </div>
      
      <div class="blog-item">
        <h3>Las Tendencias de Empleo para el 2024</h3>
        <p>Descubre las principales tendencias en el mercado laboral para el año 2024. Desde las industrias en crecimiento hasta las habilidades más demandadas, este artículo te proporciona una visión completa de lo que está por venir.</p>
        <router-link to="/blog">Leer más</router-link>
      </div>
      
      <div class="blog-item">
        <h3>La Importancia del Networking en la Búsqueda de Empleo</h3>
        <p>El networking es una herramienta poderosa en la búsqueda de empleo. En este artículo, exploramos cómo construir una red profesional efectiva y cómo utilizarla para encontrar oportunidades laborales.</p>
        <router-link to="/blog">Leer más</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogSection'
}
</script>

<style scoped>
.blog {
  background: linear-gradient(135deg, #ffffff 0%, #dcdcdc 100%);
  color: #333333;
  padding: 60px 20px;
  text-align: center;
}

.blog h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #4B0082;
}

.blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.blog-item {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 800px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-item:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.blog-item h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #4B0082;
}

.blog-item p {
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 15px;
}

.blog-item a {
  color: #4B0082;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #4B0082;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.blog-item a:hover {
  background-color: #4B0082;
  color: #ffffff;
}
</style>
