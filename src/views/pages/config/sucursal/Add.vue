<template>
  <jc-template module="Configuración" page="Sucursal">
    <template v-slot:body>
      <div class="row justify-content-md-center">
        <div class="col-12 col-sm-6">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-lg-flex">
                <div>
                  <h5 class="mb-0">Configurar {{ title }}</h5>
                </div>
                <div class="ms-auto my-auto mt-lg-0 mt-4">
                  <div class="ms-auto my-auto">
                    <button
                      @click="$router.back()"
                      class="btn bg-gradient-info btn-sm mb-0"
                    >
                      <i class="ni ni-bold-left"></i> Regresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                 <div class="col-12">
                  <div class="form-group">
                    <label >NOMBRE COMERCIAL</label>
                    <input type="text" v-model="model.nombre" class="form-control" >
                  </div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >DIRECCION LABORAL</label>
                    <input type="text" v-model="model.direccion" class="form-control" >
                  </div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >DOCUMENTO (TIPO + NUMERO)</label>
                    <input type="text" v-model="model.documento" class="form-control" >
                  </div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >TELEFONO</label>
                    <input type="text" v-model="model.telefono" class="form-control" >
                  </div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >IMPRESORA NOMBRE</label>
                    <input type="text" v-model="model.impresora" class="form-control" >
                  </div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >URL DE IMPRESORA</label>
                    <input type="text" v-model="model.impresora_url" class="form-control" >
                  </div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >EMITIR FACTURA ELECTRONICA</label>
                    <select name="" class="form-control" v-model="model.facturacion" id="">
                      <option value="1">EMITIR</option>
                      <option value="0">NO EMITIR</option>
                    </select>
                  </div>
                </div>
                
                 <div class="col-12">
                   <button v-if="sucursals.length>0" class="btn bg-gradient-dark w-100" @click="Update()">
        Actualizar
      </button>
                   <button v-else class="btn bg-gradient-dark w-100" @click="Save()">
        Guardar
      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-3" v-if="sucursals.length>0">
          <div class="row justify-content-center">
<div class="col-md-3">
<div class="card">
<div class="card-header mx-4 p-3 text-center">
<div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
<i class="fas fa-landmark opacity-10" aria-hidden="true"></i>
</div>
</div>
<div class="card-body pt-0 p-3 text-center">
<h6 class="text-center mb-0">IMPRESORA</h6>
<span class="text-xs">{{model.impresora}}</span>
 <hr class="horizontal dark my-3">
  <button class="btn btn-dark w-100" @click="Conectar()">CONECTAR</button>
</div>
</div>
</div>
</div>
        </div>
      </div>
    </template>
  </jc-template>
</template>
<script>
import axios from '../../../../axios';
import axios2 from "axios"
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    modelApi: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      valor:0,
      image:null,
      sucursals:[],
      model:{
        nombre:'',
        direccion:'',
        telefono:'',
        documento:'',
        impresora:'',
        impresora_url:'',
        facturacion:0
      }
    };
  },
  methods: {
    saveImage(e) {
           
            this.image = e.target.files[0]

        },
     async Save(){
            
            let self = this;
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      let loader = this.$loading.show();
      try {
        
                let res = await axios.post('sucursals',this.model);
        console.log(res);
        swalWithBootstrapButtons
          .fire({
            title: "Guardado!",
            text: "Se ha guardado correctamente",
            icon: "success",
            showCancelButton: false,
            confirmButtonText: "Si!",
            
         
          })
          .then(async (result) => {
            await self.GET_DATA()
          });
      } catch (error) {
        console.log(error);
        swalWithBootstrapButtons.fire(
          "Lo sentimos :(",
          "No hemos podido realizar tu petición.",
          "error"
        );
      } finally {
        loader.hide();
      }
        },
     async Update(){
            
            let self = this;
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      let loader = this.$loading.show();
      try {
        
                let res = await axios.put('sucursals/'+this.model.id,this.model);
        console.log(res);
        swalWithBootstrapButtons
          .fire({
            title: "Guardado!",
            text: "Se ha guardado correctamente",
            icon: "success",
            showCancelButton: false,
            confirmButtonText: "Si!",
            
         
          })
          .then(async (result) => {
            await self.GET_DATA()
          });
      } catch (error) {
        console.log(error);
        swalWithBootstrapButtons.fire(
          "Lo sentimos :(",
          "No hemos podido realizar tu petición.",
          "error"
        );
      } finally {
        loader.hide();
      }
        },
        async GET_DATA(){
          
         
            let res = await axios.get('sucursals');
            this.sucursals= res.data;
          if(this.sucursals.length>0){
            this.model=this.sucursals[0]
          

          }
        },
        async Conectar(){
          let res = await axios2.post(this.model.impresora_url+"/run",{
            name:this.model.impresora
          });
          console.log(res)
        }
  },
  mounted() {
    this.$nextTick(async () => {
      let loader = this.$loading.show();
try{
await this.GET_DATA();
}catch(e){
  console.log(e);}finally{
    loader.hide();
  }

    });
  },
};
</script>
