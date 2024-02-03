<template>
  <jc-template module="Comprobantes-E" page="Comprobantes Electronicos">
    <template v-slot:body class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0">
            <div class="d-lg-flex">
              <div>
                <h5 class="mb-0">{{title}}</h5>
                
              </div>
              <div class="ms-auto my-auto mt-lg-0 mt-4">
                <div class="ms-auto my-auto">
                  <!-- <router-link
                    :to="add"
                    class="btn bg-gradient-primary btn-sm mb-0"
              
                    >+&nbsp; Agregar</router-link
                  > -->
                
                </div>
              </div>
            </div>
          </div>
          <div class="card-body px-4 pb-2">
            <div class="table-responsive">
               <jc-table
              :load="load"
              :list="list"
                    class="table table-flush "
                   
                  >
                    <template v-slot:thead class="thead-light">
                      <thead>

                        <tr>
                          <th class="text-left text-xxs p-0" >
                          #
                        </th>
                       
                        <th class="text-left text-xxs p-0">
                          FECHA
                        </th>
                        <th class="text-left text-xxs p-0">
                          COMPROBANTE
                        </th>
                        <th class="text-left text-xxs p-0">
                          SERIE
                        </th>
                        <th class="text-left text-xxs p-0">
                          CLIENTE
                        </th>
                        <th class="text-left text-xxs p-0">
                          DOCUMENTO
                        </th>
                        <th class="text-left text-xxs p-0">
                          GRAVADA
                        </th>
                        <th class="text-left text-xxs p-0">
                          IGV
                        </th>
                        <th class="text-left text-xxs p-0">
                          TOTAL
                        </th>
                       
                       
                       
                        <th class="text-center text-xxs p-0" >
                          
                          </th>
                       
                      </tr>
                          </thead>
                    </template>
                    <template v-slot:tbody >
                      <tbody>

                        <tr v-for="(m,i) in list" :key="i">
                        <td class="text-left text-xxs p-0">
                          {{i+1}}
                        </td>
                        <td class="text-left text-xxs p-0">
                          <h6 class="text-xxs">{{m.fecha}}</h6>
                          <div class="d-flex">
                            
                          </div>
                        </td>
                        <td class="text-left text-xxs p-0">
                          <h6 class="text-xxs">{{m.serie.comprobante.nombre}}</h6>
                          <div class="d-flex">
                            
                          </div>
                        </td>
                        <td class="text-left text-xxs p-0">
                          <h6 class="text-xxs">{{m.serie.serie}} - {{m.numero}}</h6>
                          <div class="d-flex">
                            
                          </div>
                        </td>
                        <td class="text-left text-xxs p-0">
                          <h6 class="text-xxs">{{m.cliente_denominacion}}</h6>
                          <div class="d-flex">
                            
                          </div>
                        </td>
                        <td class="text-left text-xxs p-0">
                          <h6 class="text-xxs">{{m.cliente_tipo_de_documento==1?'DNI':'RUC'}} {{m.cliente_numero_de_documento}}</h6>
                          <div class="d-flex">
                            
                          </div>
                        </td>
                      
                      
                        <td class="text-left text-xxs p-0">
                           {{Number(m.total_gravada).toFixed(2)}}
                        </td>
                        <td class="text-left text-xxs p-0">
                           {{Number(m.total_igv).toFixed(2)}}
                        </td>
                        <td class="text-left text-xxs p-0">
                           {{Number(m.total).toFixed(2)}}
                        </td>
                      
                        
                        <td class="text-center text-xxs">
                          
                          <div class="dropdown">
  <button class="btn bg-gradient-primary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    OPCION
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" :href="m.enlace_del_pdf" target="_blank" >PDF</a></li>
    <li><a class="dropdown-item" :href="m.enlace_del_xml" target="_blank" >XML</a></li>
    <li><a class="dropdown-item" href="javascript:void(0)" @click="Imprimir(m)" >Imprimir</a></li>
  </ul>
</div>
                        </td>
                      </tr>
                          </tbody>
                     
                    </template>
                  </jc-table>
            </div>
          </div>
        </div>
      </div>
    </template>
  </jc-template>
</template>
<script>
import axios from '../../../axios.js';
import axios2 from 'axios'
export default {
  props:{
    title:{
      type:String,
      default:''
    },
    add:{
      type:String,
      default:''
    },
    edit:{
      type:String,
      default:''
    },
    modelApi:{
      type:String,
      default:''
    },
  },
  data() {
    return {
      list:[],
      sucursals:[],
      sucursal:{},
      load:false,
    }
  },
  methods: {
    async GET_DATA(path){
      const response = await axios.get(path);
      return response.data;
    },
    
      async DeleteItem2(id){
       let loader = this.$loading.show();
      try {
        const response = await axios.delete(this.modelApi+'/'+id);
        console.log(response);
         let table = $('#demo').DataTable();
           table.destroy();
          
           
        await this.loadData()
          $('#demo').DataTable(this.$store.state.datatableOption);
      }finally{
        loader.hide();
      }
    },
     async DeleteItem(id){
      let self = this
      const swalWithBootstrapButtons = Swal.mixin({
customClass: {
  confirmButton: 'btn btn-success',
  cancelButton: 'btn btn-danger'
},
buttonsStyling: false
})

        swalWithBootstrapButtons.fire({
  title: 'Eliminar?',
  text: "Este cambio es irreversible",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Si!',
  cancelButtonText: 'No!',
  reverseButtons: true
}).then(async (result) => {
  if (result.isConfirmed) {
    self.DeleteItem2(id)
  }
})
     
    },
    async loadData(){
       await Promise.all([this.GET_DATA(this.modelApi), this.GET_DATA("sucursals")]).then((v)=>{
        this.list = v[0];
        this.sucursals = v[1]
       
        if(this.sucursals.length>0){
        this.sucursal = this.sucursals[0]
      }
      });
    },
    async Imprimir(impresion){
      const res = await axios2.post(this.sucursal.impresora_url+'/sunat',
          {name:this.sucursal.impresora,
          pedido:impresion,
          sucursal:this.sucursal,
          }
        );
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
}
</script>