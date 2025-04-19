<template>
    <header>
       <div class="logo">
            <router-link to="/homepage">
                <h1>Talent Job</h1>
            </router-link>
        </div>
        <nav class="menu">
            <router-link to="/talent">Soy un talento</router-link> |
            <router-link to="/company">Soy una empresa</router-link> |
            <router-link to="/Register">Regístrate</router-link> |
            <router-link to="/login">Inicia Sesión</router-link> 
        </nav>
    </header>
  
</template>

<script>
export default {
    name: 'HeaderComponent'

};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: linear-gradient(to right, #4B0082, #8A2BE2); /* Degradado de morado oscuro a morado claro */
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

.logo h1 {
    margin: 0;
    color: white;
}

.logo a {
    text-decoration: none; /* Elimina el subrayado */
    color: inherit; /* Mantiene el color del texto */
  }
  
  .logo a h1 {
    margin: 0; /* Evita margenes en el título */
  }

nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
}

</style>