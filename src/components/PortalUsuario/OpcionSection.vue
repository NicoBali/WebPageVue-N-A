<template>
    <main class="content">
  <section class="options">
            <div class="option">
                <h3>👤 Mi Perfil</h3>
                <p>Accede a tu perfil y actualiza tu información personal.</p>
                <a href="/miPerfil.html" class="btn">Ver Perfil</a>
            </div>
            <div class="option">
                <h3>💼 Ofertas de Empleo</h3>
                <p>Encuentra oportunidades laborales ajustadas a tu experiencia.</p>
                <router-link to="/OffersPage" class="btn">Ver Ofertas</router-link>
            </div>
            <div class="option">
                <h3>📄 Aplicaciones</h3>
                <p>Revisa el estado de tus postulaciones y entrevistas.</p>
                <a href="/aplicaciones.html" class="btn">Ver Aplicaciones</a>
            </div>
            <div class="option">
                <h3>🛠 Soporte</h3>
                <p>¿Necesitas ayuda? Contáctate con nuestro equipo de soporte.</p>
                <a href="/soporte.html" class="btn">Obtener Ayuda</a>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'OpcionSection'

}
</script>

<style scoped>
.content {
    flex: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
}

.option {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.option h3 {
    font-size: 1.5rem;
    color: #4B0082;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.option p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.4;
}

.option .btn {
    text-decoration: none;
    background: #4B0082;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background 0.3s;
    font-weight: 500;
    align-self: flex-start;
}

.option:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.option:hover .btn {
    background: #8A2BE2;
}


</style>