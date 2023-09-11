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
          <Cuerpo :opcion="this.$route.params.opcion" :recargar="this.recargar"></Cuerpo>  
        </div>
        <!-- end: page -->
</template>
<script>
import Modal from '@/components/Modal.vue';
import Cuerpo from '@/components/Cuerpo.vue';
import FormProducto from './FormProducto.vue';
export default{
  data(){
    return{showModal:false,recargar:1}
  },
  components:{Modal,Cuerpo,FormProducto},
  methods:{
    cambiar(){
      console.log("valor de recargar "+this.recargar);
      this.recargar=1-this.recargar;
      console.log("valor de recargar "+this.recargar);
    },
    guardar(elemento){
       if (this.$route.params.opcion=='Producto'){
         this.axios.post("http://127.0.0.1:3030/api/v1/productos/",{
    nombre: elemento[0],
    descripcion: elemento[1]
  }).then(this.cambiar()
    ).catch( function(error){
    console.error(error)
  });
console.log("valor de recargar fura de then"+this.recargar);
 
       }else if(this.$route.params.opcion=='Fertilizante'){}
       else{

       }
       this.showModal=false;
    }
  }
}
</script>