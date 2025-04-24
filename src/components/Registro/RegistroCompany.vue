<template>
  <div class="contenedor-usuario">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Nombre de la empresa" v-model="nombreEmpresa" id="nombre-empresa" />
    </div>
    <div class="input-group mb-3">
      <input type="email" class="form-control" placeholder="Correo electrónico corporativo" v-model="correoCorporativo" id="correo-corporativo" />
    </div>
    <div class="input-group mb-3">
      <input type="tel" class="form-control" placeholder="Número de teléfono" v-model="numeroTelefono" id="numero-telefono" />
    </div>
    <div class="input-group mb-3">
      <input type="password" class="form-control" placeholder="Contraseña" v-model="contrasena" id="contrasena" />
    </div>
    <div class="input-group mb-3">
      <input type="password" class="form-control" placeholder="Confirmación de contraseña" v-model="confirmacionContrasena" id="confirmacion-contrasena" />
    </div>
    <div class="contenedor-boton">
      <button class="stylish-button" @click="handleSubmit" id="registrar-company-btn">Registrarme</button>
    </div>

    <transition name="slide-down">
      <div v-if="alertVisible" :class="['alert-popup', alertType]">
        <span class="alert-icon" v-html="alertIcon"></span>
        <span class="alert-text">{{ alertMessage }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'RegistroCompany',
  data() {
    return {
      nombreEmpresa: '',
      correoCorporativo: '',
      numeroTelefono: '',
      contrasena: '',
      confirmacionContrasena: '',
      alertMessage: '',
      alertVisible: false,
      alertType: '', // 'warning', 'error', 'success'
    };
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
        !this.nombreEmpresa.trim() ||
        !this.correoCorporativo.trim() ||
        !this.numeroTelefono.trim() ||
        !this.contrasena.trim() ||
        !this.confirmacionContrasena.trim()
      ) {
        this.showAlert('Debe llenar todos los campos', 'warning');
        return;
      }
      if (!this.validarEmail(this.correoCorporativo)) {
        this.showAlert('Email inválido', 'error');
        return;
      }
      if (!/^\d+$/.test(this.numeroTelefono)) {
        this.showAlert('Número de teléfono inválido', 'error');
        return;
      }
      if (this.contrasena !== this.confirmacionContrasena) {
        this.showAlert('Las contraseñas no coinciden', 'error');
        return;
      }
      this.showAlert('Registro exitoso', 'success');
      // Aquí se puede agregar lógica para enviar datos al backend o almacenar localmente
    },
    validarEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
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
/* Reutilizo estilos similares a RegistroSection.vue para coherencia */
.contenedor-usuario {
  padding: 20px 25px;
  background-color: rgba(255, 255, 255, 0.85);
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 15px;
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
