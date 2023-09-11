<template>
    <form class="form-horizontal form-bordered" id="formRegistrar">
		<div class="form-group">
			<label class="col-md-3 control-label" for="nombre">Nombre</label>
			<div class="col-md-6">
				<input type="text" v-model="nombre" data-informacion placeholder="Escriba el nombre del Producto..." class="form-control" >
			</div>
		</div>
		<div class="form-group">
			<label class="col-md-3 control-label" for="textareaDefault">Descripcion</label>
			<div class="col-md-6">
				<textarea class="form-control" v-model="descripcion" data-informacion placeholder="Breve descripcion del Producto..." rows="3" ></textarea>
			</div>
		</div>
		
	</form>
</template>
<script>
export default{
    data(){
		return{
			nombre:'',
			descripcion:''
		}
	}
	,
	
}
</script>