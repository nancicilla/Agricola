<!--
<script setup>
const props = defineProps({
  
})
</script>
-->
<script>
export default{
  props:{show: Boolean,
   estilo:String

  },
 
  computed:{
    informacion(){
      let elemetos=document.getElementById("formRegistrar").querySelectorAll("[data-informacion]"); 
      let vector=[];
      for(let i=0;i<elemetos.length;i++){
       
        vector.push(elemetos[i].value);
       }
      
      
      
     return vector;
    }
  }

  
}
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class='modal-container'>
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="modal-default-button mb-xs mt-xs mr-xs btn btn-info"
              @click="$emit('close')"
            >Cerrar</button>
            <button
              class="modal-default-button mb-xs mt-xs mr-xs btn btn-success"
              @click="$emit('guardar',this.informacion)"
            >Guardar</button>
            
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>


<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 700px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-containermax {
  width: 600px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-header h3 {
  margin-top: 0;
  color: #3975b9;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>