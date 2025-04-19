<template>

  <h1 class="titulo">Registro de Usuario</h1>
 
 <div class="contenedor">
     <div class="contenedor-usuario">
         <div class="input-group mb-3">
             <input type="text" class="form-control" placeholder="Nombre de Usuario" v-model="apodoUsuario" id="apodo-usuario">
         </div>
         
         <div class="input-group mb-3">
             <input type="text" class="form-control" placeholder="Correo Electrónico" v-model="correoUsuario" id="correo-usuario">
             <span class="input-group-text">@ejemplo.com</span>
         </div>
         
         <div class="input-group mb-3">
             <input type="text" class="form-control" placeholder="Número de Teléfono" v-model="numeroUsuario" id="numero-usuario">
         </div>
         
         <div class="input-group mb-3">
             <input type="text" class="form-control" placeholder="Nombre" v-model="nombreUsuario" id="nombre-usuario">
         </div>
         
         <div class="input-group mb-3">
             <input type="text" class="form-control" placeholder="Apellido" v-model="apellidoUsuario" id="apellido-usuario">
         </div>
         
         <div class="input-group mb-3">
             <textarea class="form-control" placeholder="Ocupación" v-model="usuarioOcupacion" id="usuario-ocupacion"></textarea>
         </div>

         <div class="contenedor-boton">
             <button class="stylish-button" @click="handleSubmit" id="registrar-btn">Registrarme</button>
         </div>
     </div>
 </div>

 <transition name="slide-down">
   <div v-if="alertVisible" :class="['alert-popup', alertType]">
     <span class="alert-icon" v-html="alertIcon"></span>
     <span class="alert-text">{{ alertMessage }}</span>
   </div>
 </transition>

</template>

<script>
export default {
name: 'RegistroSection',
data() {
 return {
   apodoUsuario: '',
   correoUsuario: '',
   numeroUsuario: '',
   nombreUsuario: '',
   apellidoUsuario: '',
   usuarioOcupacion: '',
   alertMessage: '',
   alertVisible: false,
   alertType: '', // 'warning', 'error', 'success'
 };
},
mounted() {
 if (localStorage.getItem('apodoUsuario')) {
   this.apodoUsuario = localStorage.getItem('apodoUsuario');
 }
 if (localStorage.getItem('correoUsuario')) {
   this.correoUsuario = localStorage.getItem('correoUsuario');
 }
 if (localStorage.getItem('numeroUsuario')) {
   this.numeroUsuario = localStorage.getItem('numeroUsuario');
 }
 if (localStorage.getItem('nombreUsuario')) {
   this.nombreUsuario = localStorage.getItem('nombreUsuario');
 }
 if (localStorage.getItem('apellidoUsuario')) {
   this.apellidoUsuario = localStorage.getItem('apellidoUsuario');
 }
 if (localStorage.getItem('usuarioOcupacion')) {
   this.usuarioOcupacion = localStorage.getItem('usuarioOcupacion');
 }
},
computed: {
 alertIcon() {
   switch (this.alertType) {
     case 'warning':
       return '&#9888;'; // Warning icon ⚠
     case 'error':
       return '&#10060;'; // Cross mark ❌
     case 'success':
       return '&#9989;'; // Check mark ✅
     default:
       return '';
   }
 },
},
methods: {
 handleSubmit() {
   if (
     !this.apodoUsuario.trim() ||
     !this.correoUsuario.trim() ||
     !this.numeroUsuario.trim() ||
     !this.nombreUsuario.trim() ||
     !this.apellidoUsuario.trim() ||
     !this.usuarioOcupacion.trim()
   ) {
     this.showAlert('Debe llenar todos los campos', 'warning');
     return;
   }
   if (!this.correoUsuario.includes('@')) {
     this.showAlert('Email inválido', 'error');
     return;
   }
   if (!/^\d+$/.test(this.numeroUsuario)) {
     this.showAlert('Número inválido', 'error');
     return;
   }
   this.showAlert('Registro exitoso', 'success');
   localStorage.setItem('apodoUsuario', this.apodoUsuario);
   localStorage.setItem('correoUsuario', this.correoUsuario);
   localStorage.setItem('numeroUsuario', this.numeroUsuario);
   localStorage.setItem('nombreUsuario', this.nombreUsuario);
   localStorage.setItem('apellidoUsuario', this.apellidoUsuario);
   localStorage.setItem('usuarioOcupacion', this.usuarioOcupacion);
 },
 showAlert(message, type) {
   this.alertMessage = message;
   this.alertType = type;
   this.alertVisible = true;
   setTimeout(() => {
     this.alertVisible = false;
   }, 3000);
 },
},
};
</script>

<style scoped>

.titulo {
 height: 70px;
 display: flex;
 justify-content: center;
 align-items: center;
 background: linear-gradient(to right, #810aac, #923abf);
 color: white;
 font-size: 24px;
 padding-top: 20px;
 margin-bottom: 10px;
}

.contenedor {
 width: 100%;
 background: linear-gradient(to right, #810aac, #923abf);
 min-height: 470px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: -10px;
 padding-bottom: 60px;
}

.contenedor-usuario {
 padding: 30px;
 background-color: rgba(255, 255, 255, 0.85);
 width: 80%;
 border-radius: 10px;
 box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
 display: flex;
 flex-direction: column;
}

.input-group-text {
 background-color: transparent;
 border: none;
 color: #810aac;
 font-weight: 600;
}

.form-control {
 border: 1px solid #ccc;
 border-radius: 6px;
 box-shadow: none;
 transition: border-color 0.3s ease;
}

.form-control:focus {
 border-color: #810aac;
 box-shadow: 0 0 5px rgba(129, 10, 172, 0.5);
 outline: none;
}

.input-group {
 margin-bottom: 15px;
}

.contenedor-boton {
 display: flex;
 justify-content: flex-end;
 margin-top: 10px;
}

.stylish-button {
 background-color: #ffffff;
 color: #4B0082;
 padding: 14px 30px;
 font-size: 18px;
 font-weight: bold;
 border: 2px solid #4B0082;
 border-radius: 30px;
 cursor: pointer;
 transition: all 0.3s ease;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
 text-transform: uppercase;
 letter-spacing: 1px;
}

.stylish-button:hover {
 background-color: #4B0082;
 color: #ffffff;
 box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
 transform: scale(1.05);
}

.stylish-button:active {
 transform: scale(0.98);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.alert-popup {
position: fixed;
top: 10px;
left: 50%;
transform: translateX(-50%);
min-width: 300px;
max-width: 90vw;
padding: 15px 20px;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
display: flex;
align-items: center;
font-weight: 600;
font-size: 14px;
color: #fff;
z-index: 9999;
}

.alert-popup.warning {
background-color: #ffecb5;
color: #665f03;
}

.alert-popup.error {
background-color: #f8d7da;
color: #842029;
}

.alert-popup.success {
background-color: #d1e7dd;
color: #0f5132;
}

.alert-icon {
margin-right: 10px;
font-size: 20px;
line-height: 1;
}

.alert-text {
flex-grow: 1;
}

</style>
