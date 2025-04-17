<template>
    <section class="planes-precios">
         <div class="plan">
           <h2>Plan Básico</h2>
           <p class="precio">$29/mes</p>
           <p>El Plan Básico es perfecto para personas en busca de empleo que desean iniciar con acceso a oportunidades laborales, y para pequeñas empresas que están comenzando su proceso de contratación. Este plan permite a los candidatos postularse a vacantes y recibir alertas de empleo, mientras que las empresas pueden publicar una cantidad limitada de vacantes y recibir postulaciones de candidatos.</p>
           
           <h3>Para Usuarios:</h3>
           <ul class="caracteristicas">
             <li>Acceso a hasta 10 ofertas de empleo al mes</li>
             <li>Postulaciones a vacantes limitadas</li>
             <li>Alertas de empleo por correo electrónico</li>
             <li>Perfil básico para empresas</li>
           </ul>
           
           <h3>Para Empresas:</h3>
           <ul class="caracteristicas">
             <li>Publicación de hasta 5 vacantes al mes</li>
             <li>Acceso limitado a base de datos de candidatos</li>
             <li>Soporte por correo electrónico</li>
             <li>Hasta 5 usuarios en la plataforma</li>
           </ul>
         </div>
       
         <div class="plan">
           <h2>Plan Estándar</h2>
           <p class="precio">$49/mes</p>
           <p>El Plan Estándar es ideal para profesionales que buscan acceso avanzado a ofertas de empleo y empresas en expansión que requieren herramientas mejoradas para encontrar talento. Los usuarios pueden acceder a más vacantes y crear un perfil destacado, mientras que las empresas obtienen informes de reclutamiento, soporte en vivo y una mayor visibilidad en las búsquedas de candidatos.</p>
           
           <h3>Para Usuarios:</h3>
           <ul class="caracteristicas">
             <li>Acceso a hasta 50 ofertas de empleo al mes</li>
             <li>Perfil avanzado y destacable en búsquedas</li>
             <li>Alertas de empleo personalizadas</li>
             <li>Acceso a empleadores destacados</li>
           </ul>
           
           <h3>Para Empresas:</h3>
           <ul class="caracteristicas">
             <li>Publicación de hasta 20 vacantes al mes</li>
             <li>Acceso a filtros avanzados de candidatos</li>
             <li>Informes detallados de postulaciones</li>
             <li>Soporte en vivo y 10 usuarios en la plataforma</li>
           </ul>
         </div>
       
         <div class="plan">
           <h2>Plan Premium</h2>
           <p class="precio">$79/mes</p>
           <p>El Plan Premium es la solución completa tanto para usuarios que buscan empleo de alto nivel, como para grandes empresas con demandas avanzadas de contratación. Este plan ofrece acceso exclusivo a empleadores destacados y soporte prioritario para candidatos, mientras que las empresas obtienen consultoría en reclutamiento, almacenamiento ilimitado, y acceso anticipado a nuevas funciones de selección avanzada con inteligencia artificial.</p>
           
           <h3>Para Usuarios:</h3>
           <ul class="caracteristicas">
             <li>Acceso a todas las ofertas de empleo, sin límite</li>
             <li>Perfil premium y visibilidad prioritaria</li>
             <li>Consultoría personalizada en carrera</li>
             <li>Soporte prioritario y alertas en tiempo real</li>
           </ul>
           
           <h3>Para Empresas:</h3>
           <ul class="caracteristicas">
             <li>Publicación ilimitada de vacantes</li>
             <li>Acceso a candidatos con filtros avanzados de IA</li>
             <li>Consultoría personalizada en estrategias de reclutamiento</li>
             <li>Usuarios ilimitados y soporte prioritario 24/7</li>
             <li>Integración de IA avanzada y almacenamiento ilimitado</li>
           </ul>
         </div>
       </section>
 </template>
 
 <script>
 export default {
    name: 'ServicesPricingSection'
     
 
 }
 </script>
 
 <style scoped>
 .planes-precios {
     display: flex;
     gap: 20px;
     justify-content: center;
     padding: 40px;
     background-color: #1f0a31;
     flex-wrap: wrap; /* Permite que las tarjetas se acomoden en varias filas en pantallas pequeñas */
 }
 
 .plan {
     background-color: rgba(255, 255, 255, 0.8);
     border: 1px solid rgba(255, 255, 255, 0.3);
     border-radius: 8px;
     width: 300px;
     padding: 20px;
     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
     transition: transform 0.3s, box-shadow 0.3s;
 }
 
 .plan:hover {
     transform: translateY(-5px);
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
 }
 
 .plan h2 {
     font-size: 24px;
     color: #320352;
     text-align: center;
     margin-bottom: 10px;
 }
 
 .precio {
     font-size: 20px;
     color: #1a73e8;
     text-align: center;
     font-weight: bold;
     margin-bottom: 20px;
 }
 
 .plan p {
     font-size: 14px;
     color: #000000; /* Cambiado a negro */
     text-align: center;
     margin-bottom: 20px;
     line-height: 1.6;
 }
 
 .plan h3 {
     font-size: 18px;
     color: #320352;
     margin-top: 20px;
     margin-bottom: 10px;
 }
 
 .caracteristicas {
     list-style-type: none;
     padding: 0;
     margin: 0;
 }
 
 .caracteristicas li {
     font-size: 14px;
     color: #000000; /* Ajustado para mejor contraste */
     padding: 8px 0;
     border-bottom: 1px solid #e0e0e0;
 }
 
 .caracteristicas li:last-child {
     border-bottom: none;
 }
 
 .caracteristicas li:hover {
     color: #8A2BE2;
     font-weight: bold;
     cursor: pointer;
     background-color: #e6e6e6;
 }
 
 /* Media Queries */
 @media (max-width: 768px) {
     .planes-precios {
         flex-direction: column; /* Cambia a columna en pantallas más pequeñas */
         align-items: center;
     }
 
     .plan {
         width: 90%; /* Aumenta el ancho de las tarjetas en pantallas pequeñas */
     }
 }
 </style>