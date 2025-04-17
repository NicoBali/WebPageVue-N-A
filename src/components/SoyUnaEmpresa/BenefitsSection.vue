<template>
  <section class="benefits">
    <h2>Beneficios para Empresas</h2>
    <div class="benefits-container">
        <div class="benefit">
            <i class="fas fa-user-tie"></i>
            <h3>Contratación Rápida</h3>
            <p>Accede a una base de datos de candidatos calificados y reduce el tiempo de contratación.</p>
        </div>
        <div class="benefit">
            <i class="fas fa-balance-scale"></i>
            <h3>Evaluaciones Precisas</h3>
            <p>Utiliza herramientas de evaluación para seleccionar los candidatos más adecuados.</p>
        </div>
        <div class="benefit">
            <i class="fas fa-comments"></i>
            <h3>Asesoría Personalizada</h3>
            <p>Nuestro equipo te guía en cada paso del proceso de selección.</p>
        </div>
        <div class="benefit">
            <i class="fas fa-headset"></i>
            <h3>Soporte 24/7</h3>
            <p>Recibe asistencia en cualquier momento para resolver tus inquietudes.</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'BenefitsSection'

}
</script>

<style scoped>

*{
    color: white;
}

.benefits {
    padding: 40px 20px;
    background-color: #212121; /* Color más oscuro */
}

.benefits h2 {
    text-align: center;
    font-size: 2em;
    color: #8e24aa; /* Morado claro */
}

.benefits-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
}

.benefit {
    background-color: #303030; /* Color intermedio */
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 220px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.benefit i {
    font-size: 40px;
    color: #8e24aa; /* Morado claro */
    margin-bottom: 10px;
}

.benefit h3 {
    font-size: 1.5em;
    margin: 10px 0;
}

@media (max-width: 768px) {
    .benefits-container {
        flex-direction: column;
        align-items: center;
    }

    .benefit {
        width: 90%;
    }
}

</style>
