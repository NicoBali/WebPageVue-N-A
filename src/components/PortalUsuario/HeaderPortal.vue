<template>
    <header>
    <div class="logo">
             <h1>Talent Job</h1> 
        </div>
        <div class="bienvenido"><h1>¡Bienvenido, Usuario!</h1>
        <p>Gestiona todo desde un solo lugar</p>
    </div>
        <nav class="menu">
            <router-link to="/login">Cerrar Sesión</router-link> 
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderPortal'

}
</script>

<style scoped>
.bienvenido{
    text-align: center; 
    flex: 1;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: linear-gradient(to right, #4B0082, #8A2BE2); /* Degradado de morado oscuro a morado claro */
    font-family: 'Poppins', sans-serif;
    background-color: #121212;
    color: white;
}

header .logo h1 {
    margin: 0;
    color: #FFFFFF; /* Blanco */
    font-size: 24px;
}


header .menu a {
    color: #FFFFFF; /* Blanco */
    text-decoration: none;
    margin-left: 15px;
    font-size: 16px;
}

header .menu a:hover {
    color: #FF69B4; /* Rosado oscuro al pasar el cursor */
}

header .menu {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo a {
    text-decoration: none; /* Elimina el subrayado */
    color: inherit; /* Mantiene el color del texto */
  }
  
  .logo a h1 {
    margin: 0; /* Evita margenes en el título */
  }
/* Responsive Design */
@media (max-width: 768px) {
    .hero h2 {
        font-size: 1.5rem;
    }

    .hero p {
        font-size: 0.95rem;
    }
}

</style>