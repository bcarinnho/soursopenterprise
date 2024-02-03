<template>
  <jc-template module="Configuración" page="Categorias">
    <template v-slot:body>
      <div class="row justify-content-md-center">
        <div class="col-12 col-sm-6">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-lg-flex">
                <div>
                  <h5 class="mb-0">Agregar {{ title }}</h5>
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
                    <label >Valor</label>
                    <input type="text" v-model.number="valor" class="form-control" >
                  </div>
                </div>
                 <div class="col-12">
                  <div class="form-group">
                    <label >Imagen</label>
                    <input type="file" @change="saveImage($event)" class="form-control" accept="image/*">
                  </div>
                </div>
                 <div class="col-12">
                   <button class="btn bg-gradient-dark w-100" @click="Save()">
        Guardar
      </button>
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
        const data = new FormData()
                data.append('file', this.image)
                data.append('valor', this.valor)
               
                let res = await axios.post('monedas',data);
        console.log(res);
        swalWithBootstrapButtons
          .fire({
            title: "Guardado!",
            text: "Se ha guardado correctamente",
            icon: "success",
            showCancelButton: false,
            confirmButtonText: "Si!",
            
         
          })
          .then((result) => {
            if (result.isConfirmed) {
             self.$router.back();
            } 
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
  },
  mounted() {
    this.$nextTick(() => {});
  },
};
</script>
