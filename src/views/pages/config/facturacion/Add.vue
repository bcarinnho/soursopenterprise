<template>
  <jc-template module="Configuración" page="Facturacion">
    <template v-slot:body>
      <div class="row justify-content-md-center">
        <div class="col-12 col-sm-6" v-if="sucursals.length>0">
          <div class="card" v-if="model.facturacion==0">
            <div class="card-header pb-0">
              <div class="d-lg-flex">
                <div>
                  <h5 class="mb-0">No puedes emitir factura electronica</h5>
                </div>
               
              </div>
            </div>
           <div class="card-body">
            <button class="btn btn-dark w-100" @click="$router.push('/config/sucursal')" >CONFIGURAR SUCURSAL</button>
           </div>
          </div>
          <div class="card" v-else>
            <div class="card-header pb-0">
              <div class="d-lg-flex">
                <div>
                  <h5 class="mb-0">CONFIGURAR CREDENCIALES</h5>
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
                  <div class=" alert alert-warning"><div class="text-center text-white">Valida tus facturas aqui mismo <b> https://verificacfdi.facturaelectronica.sat.gob.mx/</b>.</div></div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >TOKEN</label>
                    <input type="text" v-model="model2.token" class="form-control" >
                  </div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >RUTA</label>
                    <input type="text" v-model="model2.ruta" class="form-control" >
                  </div>
                </div>
                
                 
                
                 <div class="col-12">
                   <button v-if="facturacions.length>0" class="btn bg-gradient-dark w-100" @click="Update()">
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
        <div class="col-12 col-sm-8" v-else>
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-lg-flex">
                <div>
                  <h5 class="mb-0">Configuracion de sucursal incompleta</h5>
                </div>
               
              </div>
            </div>
           <div class="card-body">
            <button class="btn btn-dark w-100" @click="$router.push('/config/sucursal')" >CONFIGURAR </button>
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
      facturacions:[],
      model:{
        nombre:'',
        direccion:'',
        telefono:'',
        documento:'',
        impresora:'',
        impresora_url:'',
        facturacion:0
      },
      model2:{
        token:'',
        ruta:'',
       
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
        
                let res = await axios.post('facturacions',this.model2);
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
        
                let res = await axios.put('facturacions/'+this.model2.id,this.model2);
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
            await self.GET_DATA2()
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
        async GET_DATA2(){
          
         
            let res = await axios.get('facturacions');
            this.facturacions= res.data;
          if(this.facturacions.length>0){
            this.model2=this.facturacions[0]
          

          }
        },
        
  },
  mounted() {
    this.$nextTick(async () => {
      let loader = this.$loading.show();
try{
await this.GET_DATA();
await this.GET_DATA2();
}catch(e){
  console.log(e);}finally{
    loader.hide();
  }

    });
  },
};
</script>
