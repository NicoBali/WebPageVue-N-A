<template>
  <section class="testimonials">
    <h2>Testimonios de Empresas</h2>
    <div class="testimonial-container">
        <div class="testimonial">
            <p>"Gracias a Talent Job, encontramos al candidato perfecto para nuestro equipo en tiempo récord. ¡Recomendado!"</p>
            <h4>- Ana Gómez, CEO de Tech Solutions</h4>
        </div>
        <div class="testimonial">
            <p>"La asesoría personalizada hizo toda la diferencia. Nos ayudaron a entender mejor nuestras necesidades." </p>
            <h4>- Luis Pérez, Gerente de Innovatech</h4>
        </div>
        <div class="testimonial">
            <p>"El soporte 24/7 es increíble. Siempre tenemos a alguien a quien consultar en cualquier momento."</p>
            <h4>- María Rodríguez, Directora de Recursos Humanos en Creativa</h4>
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

*{
    color: white;
}

.testimonials {
    padding: 40px 20px;
    background-color: #212121; /* Color más oscuro */
}

.testimonials h2 {
    text-align: center;
    font-size: 2em;
    color: #8e24aa; /* Morado claro */
}

.testimonial-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.testimonial {
    background-color: #303030; /* Color intermedio */
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 80%;
    text-align: center;
}

.testimonial p {
    font-style: italic;
}

.testimonial h4 {
    margin-top: 10px;
    font-weight: bold;
}

@media (max-width: 768px) {

    .testimonial {
        width: 90%;
    }
}

</style>
