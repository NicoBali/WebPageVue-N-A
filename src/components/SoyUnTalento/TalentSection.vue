<template>
  <!-- Nueva sección Soy un Talento -->
<section class="talento-section">
    <div class="talento-header">
        <h1>Soy un Talento</h1>
        <p>Descubre las mejores oportunidades laborales y conecta con empresas que buscan tus habilidades.</p>
    </div>

    <div class="talento-content">
        <div class="talento-info">
            <h2>Beneficios de unirte como Talento</h2>
            <p>Al ser parte de Talent Job, obtienes acceso exclusivo a una serie de beneficios diseñados para destacar tu perfil profesional.</p>

            <div class="talento-benefits">
                <div class="benefit-item">
                    <h3>🌟 Acceso a Oportunidades</h3>
                    <p>Obtén acceso a ofertas laborales que se ajustan a tus habilidades.</p>
                </div>
                <div class="benefit-item">
                    <h3>📈 Desarrollo Profesional</h3>
                    <p>Desarrolla y mejora tu perfil profesional con el apoyo de nuestros expertos.</p>
                </div>
                <div class="benefit-item">
                    <h3>🤝 Conexiones Directas</h3>
                    <p>Conéctate directamente con reclutadores y obtén entrevistas personalizadas.</p>
                </div>
                <div class="benefit-item">
                    <h3>🔑 Soporte Personalizado</h3>
                    <p>Te ofrecemos orientación laboral y asesoramiento en todo momento.</p>
                </div>
            </div>
        </div>

        <div class="talento-steps">
            <h2>Cómo funciona</h2>
            <ol>
                <li><strong>Registro rápido:</strong> Completa tu perfil en minutos.</li>
                <li><strong>Explora oportunidades:</strong> Revisa las ofertas que se ajustan a tus competencias.</li>
                <li><strong>Aplica:</strong> Postúlate directamente y contacta con las empresas que más te interesan.</li>
                <li><strong>Crece:</strong> Aumenta tus oportunidades con nuestra asesoría personalizada.</li>
            </ol>
        </div>

        <div class="talento-action">
            <h2>Comienza ahora</h2>
            <button class="btn-start"> <a href="/RegistroUsuario/registroUsuario.html">¡Regístrate como Talento!</a></button>
        </div>
    </div>
</section>

</template>

<script>
export default {
    name: 'TalentSection'

}
</script>

<style scoped>


.talento-section {
    padding: 40px 20px;
    background-color: #1b1b1b;
    color: #fff;
}

.talento-header {
    text-align: center;
    margin-bottom: 40px;
}

.talento-header h1 {
    font-size: 2.5rem;
    color: #b388eb;
    margin-bottom: 15px;
}

.talento-header p {
    font-size: 1.2rem;
    color: #cfcfcf;
    max-width: 600px;
    margin: 0 auto;
}

.talento-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.talento-info, .talento-steps {
    max-width: 800px;
    width: 100%;
}

.talento-info h2, .talento-steps h2 {
    font-size: 1.8rem;
    color: #b388eb;
    text-align: center;
    margin-bottom: 20px;
}

.talento-info p, .talento-steps ol li {
    font-size: 1rem;
    color: #cfcfcf;
    text-align: center;
    margin-bottom: 20px;
}

.talento-benefits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.benefit-item {
    background-color: #292929;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.benefit-item h3 {
    font-size: 1.2rem;
    color: #b388eb;
    margin-bottom: 10px;
}

.benefit-item p {
    color: #cfcfcf;
}

.talento-steps ol {
    list-style-type: decimal;
    padding-left: 20px;
}

.talento-steps ol li {
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.talento-action {
    text-align: center;
}

.btn-start {
    padding: 15px 30px;
    font-size: 1rem;
    background-color: #b388eb;
    color: #121212;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-start a {
    text-decoration: none;
    color: inherit; /* Mantiene el color del texto */
}


.btn-start:hover {
    background-color: #8a50d6;
}

</style>