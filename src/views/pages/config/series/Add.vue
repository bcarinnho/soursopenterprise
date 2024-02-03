<template>
  <jc-template module="Configuración" page="Series">
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
              <jc-add :model="model" :modelApi="modelApi" @reset="reset">
                <template v-slot:body>
                  <div class="row">
                     <div class="col-md-12">
                  <div class="form-group has-success">
                    <label for="">SERIE</label>
                    <input
                      type="text"
                      placeholder=""
                      v-model="model.serie"
                      class="form-control "
                         :class="model.serie.length>0?'is-valid':''"
                      />
                     
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group has-success">
                    <label for="">COMPROBANTE</label>
                    <select name="" class="form-control" id="" v-model="model.comprobante_id" >
                      <option v-for="(m,i) in comprobantes" :key="i" :value="m.id">{{m.nombre}} </option>
                    </select>
                  </div>
                </div>
                  </div>
                </template>
              </jc-add>
           
            </div>
          </div>
        </div>
      </div>
    </template>
  </jc-template>
</template>
<script>
  import axios from '../../../../axios.js';

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
      model: {
        serie: "",
        comprobante_id:0
      },
      comprobantes:[]
    };
  },
  methods: {
   reset(){
    this.model.serie = "";
   
   },
   async GET_DATA(path){
      const response = await axios.get(path);
      return response.data;
    },
     async loadData(){
       await Promise.all([this.GET_DATA('comprobantes')]).then((v)=>{
        this.comprobantes = v[0];
        if(this.comprobantes.length){
          this.model.comprobante_id = this.comprobantes[0].id
        }
      });
    }
  },
  mounted() {
    this.$nextTick(async () => {
      let loader = this.$loading.show();
       try{
        await Promise.all([this.loadData()]).then((v)=>{
          this.load = true;
        });
      }catch(error){
        console.log(error);
      }finally{
        loader.hide();
      }
  
    });
  },
};
</script>
