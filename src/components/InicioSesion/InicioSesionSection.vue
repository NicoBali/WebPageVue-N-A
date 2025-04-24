<template>
  <div class="inicio-sesion-container">
    <div class="card">
      <div class="card-body">
        <h2 class="form-title"> Ingresa a TalentJob</h2>
        <form @submit.prevent="handleSubmit" novalidate>
          <div class="mb-3 input-icon-wrapper">
            <span class="input-icon" aria-hidden="true">✉️</span>
            <input
              type="email"
              class="form-control input-with-icon"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Ingrese su correo"
              v-model="email"
            />
          </div>
          <div class="mb-3 input-icon-wrapper">
            <span class="input-icon" aria-hidden="true">🔒</span>
            <input
              type="password"
              class="form-control input-with-icon"
              id="passwordInput"
              placeholder="Ingrese su contraseña"
              v-model="password"
            />
          </div>
          <div class="form-check mb-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="rememberCheck"
              v-model="rememberMe"
            />
            <label class="form-check-label" for="rememberCheck">Recordar</label>
          </div>
          <button class="stylish-button" type="submit">Iniciar Sesión</button>
          <p>
            ¿No tienes una cuenta?
            <router-link to="/Register">Regístrate</router-link>
          </p>
        </form>
      </div>
    </div>

    <transition name="slide-down">
      <div v-if="alertVisible" :class="['alert-message', alertType, 'alert-popup']">
        <span class="alert-icon" v-html="alertIcon"></span>
        <span class="alert-text">{{ alertMessage }}</span>
        <button type="button" class="close-btn" @click="closeAlert">&times;</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'InicioSesionSection',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      alertMessage: '',
      alertVisible: false,
      alertType: '', // 'warning', 'error', 'success'
    };
  },
  mounted() {
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
    }
    if (localStorage.getItem('password')) {
      this.password = localStorage.getItem('password');
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
      const email = this.email.trim();
      const password = this.password.trim();

      if (!email && !password) {
        this.showAlert('Debe llenar todos los campos', 'warning');
        return;
      }
      if (!email || !password) {
        this.showAlert('Debe llenar todos los campos', 'warning');
        return;
      }
      if (!email.includes('@')) {
        this.showAlert('Email inválido', 'error');
        return;
      }

      this.showAlert('Bienvenido nuevamente', 'success');
      if (this.rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        this.email = '';
        this.password = '';
      }
    },
    showAlert(message, type) {
      this.alertMessage = message;
      this.alertType = type;
      this.alertVisible = true;
    },
    closeAlert() {
      this.alertVisible = false;
      if (this.alertType === 'success') {
        this.$router.push('/portal'); 
      }
    },
  },
};
</script>

<style scoped>

.form-check {
  display: flex;
  align-items: center;
}

.form-check-input{
  border-color: #810aac;
  box-shadow: 0 0 5px rgba(129, 10, 172, 0.5);
}

.form-check-input:checked {
  background-color: #810aac;
  border-color: #810aac;
  box-shadow: none;
}

.form-check-label {
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  line-height: 1;
  padding-top: 2px;
}

.form-check-input {
  vertical-align: middle;
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
.inicio-sesion-container {
  background-color: #8818aa;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el footer esté al final */
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
}

.card {
  margin: 0; /* Elimina el margen superior para centrar verticalmente */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco semitransparente */
  width: 100%; /* Asegura que el cuadro sea del ancho completo del contenedor */
  max-width: 450px; /* Limita el ancho máximo del formulario */
  border-radius: 12px;
  z-index: 1;
}

.card-body {
  padding: 20px;
}

.text-center {
  text-align: center;
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

.close-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: inherit;
  line-height: 1;
  padding: 0;
  margin-left: 15px;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.stylish-button {
  width: 100%; /* Botón ocupa todo el ancho del formulario */
  height: 40px; /* Altura del botón */
  background-color: #ffffff; /* Blanco para el botón */
  color: #4B0082; /* Texto morado oscuro */
  padding: 12px; /* Solo padding vertical */
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #4B0082; /* Borde morado oscuro */
  border-radius: 30px; /* Bordes redondeados */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  text-transform: uppercase;
  letter-spacing: 1px; /* Espaciado entre letras */
  margin-bottom: 15px; /* Espacio debajo del botón */
  display: flex; /* Usar flex para centrar */
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
}

/* Efecto hover al pasar el cursor */
.stylish-button:hover {
  background-color: #4B0082; /* Morado oscuro */
  color: #ffffff; /* Texto blanco */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2); /* Aumenta la sombra */
  transform: scale(1.05); /* Efecto de crecimiento */
}

/* Efecto activo al hacer clic */
.stylish-button:active {
  transform: scale(0.98); /* Reduce ligeramente el tamaño */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra más suave */
}

p {
  text-align: center;
  margin-top: 20px;
}

p a {
  text-decoration: none;
  color: #4B0082; /* Morado oscuro para el enlace */
  transition: color 0.3s; /* Transición suave para el cambio de color */
}

p a:hover {
  color: #8A2BE2; /* Morado del header al pasar el cursor */
}

/* Cambia el color del enlace al pasar el cursor */
.register-link:hover {
  color: #4B0082; /* Morado oscuro */
}

/* Cambia el color del enlace al hacer clic */
.register-link:active {
  color: #4B0082; /* Morado oscuro */
}
.form-title {
  margin-bottom: 1cm;
  text-align: left;
}
.input-icon-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 18px;
}

.input-with-icon {
  padding-left: 45px;
}
</style>
