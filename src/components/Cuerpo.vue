<template>
   
    <div class="table-responsive">
	    <table class="table table-bordered table-striped table-condensed mb-none">
			<thead>
		    	<tr>
					<th v-for="c in cabecera">{{c.nombre}}</th>
				</tr>
			</thead>
	    	<tbody>
				<tr v-for="cu in cuerpo" :key="cu.id">
                    
		        	<td>{{cu.nombre}}</td>
					<td>{{cu.descripcion}}</td>
					<td class="text-right">
                        <button class="mb-xs mt-xs mr-xs btn btn-success"><i class="fa fa-edit"></i></button>
                        <button class="mb-xs mt-xs mr-xs btn btn-warning"><i class="fa fa-trash-o"></i></button>
                    </td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script >
 export default{
    props:{
        opcion:{type:String,required:true},
        recargar:{type:Number}
    },
    data(){
        return{
            cabecera:[],
            cuerpo:[]
        }
    },
    methods:{
        async cargarCabecera(){
            console.log("el valor de opcion=--->"+this.opcion+"<----");
        this.cuerpo=[];
        if(this.opcion=='Producto'){
            console.log(" entradado por la opcion de produvo");
                this.cabecera=[{nombre:"Nombre"},{nombre:"Descripcion"}];
                const res= await this.axios.get("http://127.0.0.1:3030/api/v1/productos/");
            this.cuerpo=res.data.data.products;
            console.log("iniciando para mostrar la informacion")
            console.log(this.cuerpo);
            console.log("finalizacion para mostrara la informacion")
             
            }else if (this.opcion=='Fertilizante'){
                console.log("entradndo por la opcion de Fertilizantes")
                this.cabecera=[{nombre:"Nombre Comercial"},{nombre:"Fabricante"},{nombre:"Descripcion"}];
                const res= await this.axios.get("http://127.0.0.1:3030/api/v1/fertilizantes/");
                this.cuerpo=res.data.data.fertilizantes;
            }
            else{
                console.log("entrando por la opcion de siembra");
                this.cabecera=[{nombre:"Producto"},{nombre:"Fertilizante"},{nombre:"Fecha"},{nombre:"Descripcion"}];
            }      
        }
        
        },
    async created(){
         this.cargarCabecera();
      this.$watch(()=>this.opcion,this.cargarCabecera);
    }
        
    
    }



 
</script>