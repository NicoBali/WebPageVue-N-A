<template>
   <main>
    <section id="networking">
        <h2>La Importancia del Networking en la Búsqueda de Empleo</h2>
        
    <div class="content">
        <div class="text">
            <p>El networking es una herramienta poderosa en la búsqueda de empleo. En este artículo, exploramos cómo construir una red profesional efectiva y cómo utilizarla para encontrar oportunidades laborales.</p>
                <ul>
                    <li><strong>Construye relaciones auténticas:</strong> En lugar de solo buscar contactos, busca construir relaciones genuinas.</li>
                    <li><strong>Asiste a eventos de la industria:</strong> Participa en conferencias y talleres para conocer a otros profesionales.</li>
                    <li><strong>Utiliza redes sociales:</strong> LinkedIn es una excelente plataforma para conectarte con otros en tu campo.</li>
                    <li><strong>Ofrece valor:</strong> No solo pidas ayuda; ofrece tu ayuda a otros cuando puedas.</li>
                    <li><strong>Mantén el contacto:</strong> Después de conocer a alguien, asegúrate de seguir en contacto a lo largo del tiempo.</li>
                    <li><strong>Sé específico en tus solicitudes:</strong> Cuando pidas ayuda, sé claro sobre lo que estás buscando.</li>
                </ul>
       </div>
       <img :src="NetworkingImage" alt="Importancia" class="right-img">
    </div>
  </section>
</main>
</template>

<script>
import NetworkingImage from '@/assets/Laimportancia.jpg';
export default {
    name: 'NetworkingSection',
    data() {
        return {
            NetworkingImage
        };
    }

}
</script>

<style scoped>
*{
    background-color: #1f0a31;
    color: #000;
}
section h2,
section p,
section li,
section ul,
text{
    background-color: transparent;
}

main {
    padding: 20px; /* Espaciado alrededor del contenido principal */
}

section {
    margin: 20px 0; /* Margen entre secciones */
    padding: 15px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    background-color: rgba(255, 255, 255, 0.8); /* Borde sutil para destacar las secciones */
    
}

img {
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra suave */
    margin: 15px 0; /* Espaciado arriba y abajo */
   border: #330047 solid 4px;
   height: auto;
   

}

.content {
    display: flex; /* Usar flexbox para alinear elementos */
    align-items: flex-start; /* Alinear elementos al inicio */
    
}

.text {
    flex: 1; /* Toma el espacio restante */
    margin-right: 50px; /* Espacio entre el texto y la imagen */
    max-width: 50%; /* Asegura que el texto no exceda la mitad */
     
}

.right-img {
    width: 45%; /* Imagen ocupa la mitad del contenedor */
    height: auto; /* Mantener la relación de aspecto */
    max-width: 100%; /* Asegura que no exceda el ancho del contenedor */
    margin-top: 10px; /* Espacio arriba de la imagen */

}

section img {
    width: 40%; /* Por ejemplo, 40% del contenedor */
    height: auto; /* Mantener la relación de aspecto */
}

h2 {
    color: #320352; /* Color para los títulos de sección */
    margin-bottom: 10px;
}
p {
    margin-bottom: 1em; /* Espacio entre párrafos */
}

ul {
    
    margin: 35px 0;
    padding-left: 20px; /* Sangría a la izquierda para la lista */
}

li {
    
    margin-bottom: 35px; /* Espaciado aumentado entre los elementos de la lista */
}

li strong {
    color: #320352; /* Color dorado para el texto destacado */
}

@media (max-width: 768px) {

    .content {
        flex-direction: column; /* Cambia la dirección del flex para el contenido */
        align-items: center; /* Centra el contenido */
    }

    .text {
        margin-right: 0; /* Elimina el margen derecho en pantallas más pequeñas */
        max-width: 100%; /* Permite que el texto ocupe todo el ancho */
    }

    .right-img {
        width: 100%; /* Las imágenes ocupan todo el ancho del contenedor */
    }

    section {
        padding: 10px; /* Menos padding en secciones pequeñas */
    }

    h2 {
        font-size: 20px; /* Tamaño de fuente más pequeño para títulos */
    }

    p {
        font-size: 16px; /* Tamaño de fuente más pequeño para párrafos */
    }

    li {
        margin-bottom: 20px; /* Menos margen entre elementos de la lista */
    }
}
</style>