<template>
  <section class="body">
    <!-- start: header --> 
    <Cabecera></Cabecera>
    <!-- end: header -->
    <div class="inner-wrapper">
      <!-- start: sidebar -->
      <Menu ></Menu>
      <!-- end: sidebar -->
      <section role="main" class="content-body">
        <router-view/>
      </section>
   </div>
  </section>
</template>
<script>
import Cabecera from '@/components/Cabecera.vue'
import Menu from '@/components/Menu.vue';
//import Principal from '@/components/Principal.vue';
//import Modal from '@/components/Modal.vue';
export default{
 
  components:{
    Cabecera,Menu
    //,Principal,Modal
  }
}
</script>