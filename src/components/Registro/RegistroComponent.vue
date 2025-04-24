<template>
  <div class="registro-container">
    <div class="formulario-contenedor">
      <div class="selector-tipo-usuario">
        <button
          :class="['selector-button', { active: tipoUsuario === 'talento' }]"
          @click="tipoUsuario = 'talento'"
        >
          Talento
        </button>
        <button
          :class="['selector-button', { active: tipoUsuario === 'empresa' }]"
          @click="tipoUsuario = 'empresa'"
        >
          Empresa
        </button>
      </div>
      <component :is="componenteFormulario" />
    </div>
  </div>
</template>

<script>
import RegistroTalent from './RegistroTalent.vue';
import RegistroCompany from './RegistroCompany.vue';

export default {
  name: 'RegistroComponent',
  components: {
    RegistroTalent,
    RegistroCompany,
  },
  data() {
    return {
      tipoUsuario: 'talento', // valor por defecto
    };
  },
  mounted() {
    const tipo = this.$route.query.tipo;
    if (tipo === 'talento' || tipo === 'empresa') {
      this.tipoUsuario = tipo;
    }
  },
  computed: {
    componenteFormulario() {
      return this.tipoUsuario === 'talento' ? 'RegistroTalent' : 'RegistroCompany';
    },
  },
};
</script>

<style scoped>
.registro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #8818aa;
}

.formulario-contenedor {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 450px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selector-tipo-usuario {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
}

.selector-button {
  background-color: transparent;
  border: 2px solid #810aac;
  color: #810aac;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex: 1;
  max-width: 150px;
  text-align: center;
}

.selector-button:hover {
  background-color: #810aac;
  color: white;
}

.selector-button.active {
  background-color: #810aac;
  color: white;
  box-shadow: 0 4px 10px rgba(129, 10, 172, 0.6);
  transform: scale(1.05);
}
</style>
