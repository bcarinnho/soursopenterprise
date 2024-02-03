<template>
     <div
                            class="checklist-item checklist-item-dark ps-2 ms-3"
                          >
                            <div class="d-flex align-items-center">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  
                                  id="flexCheckDefault1"
                                  v-bind:checked="index"
                                   
                                    @click="changeIndex()"
                                />
                              </div>
                              <h6
                             @click="changeIndex()"
                                class="mb-0 text-dark font-weight-bold text-sm"
                              >
                                METODO DE PAGO
                              </h6>
                              <div class="dropstart float-lg-end ms-auto pe-0">
                                <a
                                  href="javascript:;"
                                  class="cursor-pointer"
                                  id="dropdownTable3"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="fa fa-ellipsis-h text-secondary"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <ul
                                  class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                                  aria-labelledby="dropdownTable3"
                                  style=""
                                >
                                  <li>
                                    <a
                                    @click="DeleteIndex()"
                                      class="dropdown-item border-radius-md"
                                      href="javascript:void(0);"
                                      >Eliminar</a
                                    >
                                  </li>
                                  
                                </ul>
                              </div>
                            </div>
                            <div
                              class=" mt-2 p-0"
                            >
                              <div class="form-group mb-0">
                                
                                <select name="" class="form-control form-control-sm" v-model="model.metodo" id="">
                                  <option v-for="m in metodos" :value="m.id">{{m.nombre}}</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="">MONTO</label>
                                <input type="text" v-model.number="model.monto" class="form-control form-control-sm" style="display:initial">
                              </div>

                            </div>
                          </div>
</template>

<script>
    export default{
        props:{
            model:{
                type:Object,
                default:()=>{},
            
            },
            index:{
                type:Boolean,
                default:false,
            },
            i:{
                type:Number,
                default:0,
            
            },
            metodos:{
                type:Array,
                default:[]
            
            },
        },
        methods:{
            changeIndex(){
                this.$emit('changeIndex',this.i)
            },
            DeleteIndex(){
                this.$emit('delete',this.i)
            } 
        }
    }
</script>