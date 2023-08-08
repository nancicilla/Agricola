<template>
  <header class="page-header">
    <h2>{{this.$route.params.opcion}}</h2>
  </header>
  <div class="row">
    <button class="mb-xs mt-xs mr-xs btn btn-primary" id="show-modal" @click="showModal = true"><i class="fa fa-plus">Nuevo {{this.$route.params.opcion}}</i></button>
          <Modal :show="showModal" @guardar="guardar" @close="showModal = false" >
            <template #header>
              <h3>Nuevo {{this.$route.params.opcion}}</h3>
            </template>
            <template #body>

              <FormProducto></FormProducto>
            </template>
          </Modal>
        </div>
        <div class="row">
          <Cuerpo :opcion="this.$route.params.opcion"></Cuerpo>  
        </div>
        <!-- end: page -->
</template>
<script>
import Modal from '@/components/Modal.vue';
import Cuerpo from '@/components/Cuerpo.vue';
import FormProducto from './FormProducto.vue';
export default{
  data(){
    return{showModal:false}
  },
  components:{Modal,Cuerpo,FormProducto},
  methods:{
    guardar(){
      console.log("estamos a punto de guardar...");
      this.showModal=false;
    }
  }
}
</script>