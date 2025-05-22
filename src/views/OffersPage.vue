<template>

    <HeaderComponent/>
  <section class="ofertas">
    <h2>Gestión de Ofertas de Trabajo</h2>

    <div class="formulario-card">
      <form @submit.prevent="agregarOferta" class="formulario">
        <input v-model="nuevaOferta.titulo" placeholder="Título del trabajo" required />
        <input v-model="nuevaOferta.empresa" placeholder="Empresa" required />
        <textarea v-model="nuevaOferta.descripcion" placeholder="Descripción del trabajo" rows="3" required></textarea>
        <button type="submit">{{ editando !== null ? 'Actualizar' : 'Agregar' }} Oferta</button>
      </form>
    </div>

    <div class="lista-ofertas">
      <div v-for="(oferta, index) in ofertas" :key="index" class="oferta-box">
        <h3>{{ oferta.titulo }}</h3>
        <p><strong>Empresa:</strong> {{ oferta.empresa }}</p>
        <p>{{ oferta.descripcion }}</p>
        <div class="acciones">
          <button class="btn-editar" @click="editar(index)">Editar</button>
          <button class="btn-eliminar" @click="eliminar(index)">Eliminar</button>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent/>
</template>



<script>
import HeaderComponent from '@/components/PaginaPrincipal/HeaderComponent.vue';
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';

export default {
  name: 'OffersPage',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      ofertas: [],
      nuevaOferta: {
        titulo: '',
        empresa: '',
        descripcion: ''
      },
      editando: null
    };
  },
  methods: {
    agregarOferta() {
      if (this.editando !== null) {
        this.ofertas.splice(this.editando, 1, { ...this.nuevaOferta });
        this.editando = null;
      } else {
        this.ofertas.push({ ...this.nuevaOferta });
      }
      this.nuevaOferta = { titulo: '', empresa: '', descripcion: '' };
    },
    editar(index) {
      this.nuevaOferta = { ...this.ofertas[index] };
      this.editando = index;
    },
    eliminar(index) {
      this.ofertas.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.ofertas {
  background-color: #1a1a1a;
  padding: 60px 40px;
  color: #FFFFFF;
  min-height: 100vh;
}

h2 {
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
  color: #FFFFFF;
}

/* FORMULARIO */
.formulario-card {
  background-color: #2b2b2b;
  padding: 30px;
  border-radius: 16px;
  max-width: 600px;
  margin: 0 auto 50px auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.formulario input,
.formulario textarea {
  padding: 12px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background-color: #f4f4f4;
  color: #000;
}

.formulario button {
  background-color: #8A2BE2;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-end;
  transition: background-color 0.3s;
}
.formulario button:hover {
  background-color: #6a1bbf;
}

/* LISTA DE OFERTAS */
.lista-ofertas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}

.oferta-box {
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}
.oferta-box:hover {
  transform: translateY(-4px);
}

.oferta-box h3 {
  margin-bottom: 10px;
  color: #4B0082;
}

.oferta-box p {
  margin-bottom: 8px;
  font-size: 15px;
}

.acciones {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}

.btn-editar {
  background-color: #6a1bbf;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-eliminar {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
