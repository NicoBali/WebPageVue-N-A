<template>
  <section class="testimonials">
    <h2>Lo que Dicen Nuestros Usuarios</h2>
    <p>Nuestra comunidad de usuarios comparte su experiencia utilizando Talent Job. Estas son algunas de sus historias.</p>
    
    <div class="testimonials-container">
      <div class="testimonial-box">
        <p>"Gracias a Talent Job encontré el trabajo de mis sueños en menos de una semana. Su plataforma es intuitiva y muy efectiva." - <strong>María G.</strong></p>
      </div>
      
      <div class="testimonial-box">
        <p>"Como reclutador, Talent Job me ha ayudado a encontrar candidatos cualificados de manera rápida. ¡Totalmente recomendado!" - <strong>Juan P.</strong></p>
      </div>
      
      <div class="testimonial-box">
        <p>"El proceso de postulación es súper sencillo y las notificaciones de empleos me mantienen siempre actualizado." - <strong>Carla L.</strong></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection'
}
</script>

<style scoped>
.testimonials {
  background: linear-gradient(135deg, #381b47 30%, #200744de 90%);
  color: #FFFFFF;
  padding: 80px 40px;
}

.testimonials h2 {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 25px;
}

.testimonials > p {
  margin-bottom: 40px;
}

.testimonials-container {
  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;
    z-index: 1;
}

.testimonial-box {
  background-color: #FFFFFF; /* Fondo blanco para destacar sobre el degradado */
    color: #4B0082; /* Texto morado oscuro */
    border-radius: 15px;
    padding: 30px 20px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Sombra suave */
    text-align: center;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-box:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.testimonial-box p {
  font-size: 16px;
    color: #333333; /* Gris oscuro para mejor legibilidad */
    line-height: 1.5;
    margin-bottom: 15px;
}

.testimonial-box .user-name {
    font-size: 18px;
    font-weight: bold;
    color: #4B0082; /* Morado oscuro */
}

@media (max-width: 768px) {
    .testimonials-container {
        flex-direction: column;
        align-items: center;
    }
}
</style>
