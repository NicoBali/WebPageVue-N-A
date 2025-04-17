<template>
    <main>
    <section id="tendencias">
        <h2>Las Tendencias de Empleo para el 2024</h2>
        <div class="content">
            <div class="text">
                <p>Descubre las principales tendencias en el mercado laboral para el año 2024. Desde las industrias en crecimiento hasta las habilidades más demandadas, este artículo te proporciona una visión completa de lo que está por venir.</p>
                <ul>
                    <li><strong>Trabajo remoto:</strong> La demanda por el trabajo a distancia seguirá creciendo.</li>
                    <li><strong>Habilidades tecnológicas:</strong> Las habilidades en tecnología, como la programación y el análisis de datos, serán esenciales.</li>
                    <li><strong>Enfoque en la diversidad e inclusión:</strong> Las empresas se centrarán en crear equipos diversos.</li>
                    <li><strong>Bienestar laboral:</strong> Las empresas comenzarán a priorizar el bienestar mental y físico de sus empleados.</li>
                    <li><strong>Automatización:</strong> Se espera un aumento en la automatización de procesos, lo que afectará la disponibilidad de algunos trabajos.</li>
                </ul>
            </div>
        <img :src="TendenciaImage" alt="Tendencias de empleo" class="right-img">
        </div>
</section>
</main>
  
</template>

<script>
import TendenciaImage from '@/assets/turistium-exito.jpg';
export default {
    name: 'TendenciasSection',
    data() {
        return {
            TendenciaImage
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
div.content,
div.text,
strong{
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
    box-shadow: 0 4px 10px rgb(0, 0, 0);  /* Sombra suave */
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