<template>
    <!-- 10 consejos para encontrar el empleo ideal -->
 <main>
    <section id="consejos" class="blog-section">
            <h2>10 Consejos para Encontrar el Empleo Ideal</h2>
            <div class="content">
                <div class="text">
            <p>En este artículo, exploramos los mejores consejos para ayudarte a encontrar el empleo ideal. Desde cómo crear un currículum impresionante hasta cómo prepararte para las entrevistas, estos consejos te ayudarán a destacarte en el mercado laboral.</p>
            
            <ul>
                <li><strong>Crea un currículum impresionante:</strong> Asegúrate de que sea claro, conciso y que destaque tus logros más relevantes.</li>
                <li><strong>Investiga la empresa:</strong> Conoce su cultura, valores y misión para poder alinearte con ellos en la entrevista.</li>
                <li><strong>Prepara respuestas para preguntas comunes:</strong> Practica tus respuestas a preguntas frecuentes en entrevistas.</li>
                <li><strong>Destaca tus habilidades blandas:</strong> Muchas empresas valoran habilidades como la comunicación y el trabajo en equipo.</li>
                <li><strong>Usa las redes sociales a tu favor:</strong> Mantén tu perfil profesional actualizado y usa plataformas como LinkedIn para conectar con otros.</li>
                <li><strong>Red de contactos:</strong> Asiste a eventos de networking y mantén una lista de contactos que puedan ayudarte.</li>
                <li><strong>Personaliza tu carta de presentación:</strong> Adapta cada carta de presentación para el trabajo específico al que aplicas.</li>
                <li><strong>Sé proactivo:</strong> No esperes a que se publiquen ofertas; busca y contacta a empresas que te interesen.</li>
                <li><strong>Prepárate para el seguimiento:</strong> Después de la entrevista, envía un correo de agradecimiento y muestra tu interés en la posición.</li>
                <li><strong>Mantén una actitud positiva:</strong> La búsqueda de empleo puede ser frustrante, pero mantener una mentalidad positiva es clave.</li>
            </ul>
        </div>
        <img :src="consejosImage" alt="10 consejos" class="right-img">
            </div>
    </section>
 </main>
</template>

<script>
import consejosImage from '@/assets/10consejos.jpg';

export default {
    name: 'ConsejosSection',
    data() {
        return {
            consejosImage
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

