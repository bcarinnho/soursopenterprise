<template>
  <jc-template module="Ventas" page="POS">
    <template v-slot:body>
      <div class="row">
        <div class="col-12 col-sm-7">
          <div class="row">
            <div class="col-12">
              
              <div class="card bg-gradient-dark">
                <div class="card-header bg-transparent py-2 px-3">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="input-group input-group-lg">
                        <span
                          class="input-group-text text-white bg-transparent border-0"
                        >
                          <i
                            class="ni ni-archive-2 text-lg"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <input
                          type="text"
                          class="form-control bg-transparent border-0 text-white"
                          placeholder="Buscar..."
                          v-model="buscar"
                          v-on:keyup.enter="BuscarEnter()"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 my-auto ms-auto">
                      <div class="input-group input-group-lg">
                        <span
                          class="input-group-text text-white bg-transparent border-0"
                        >
                          <i class="ni ni-box-2 text-lg" aria-hidden="true"></i>
                        </span>
                        <select
                          name=""
                          id=""
                          class="form-control bg-transparent border-0 text-white"
                          v-model="marca"
                        >
                          <option value="all" class="text-dark">
                            Todas las marcas
                          </option>
                          <option
                            v-for="(m, i) in marcas"
                            :key="i"
                            :value="m.nombre"
                            class="text-dark"
                          >
                            {{ m.nombre }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 py-2" style="min-height: 60vh">
              <div class="row">
                <template v-for="(m, i) in filterBuscar" :key="i">
                  <div v-if="m.stock > 0" class="col-3">
                    <jc-card-producto
                      :model="m"
                      :tipo="tipo"
                      @emitir="addItem"
                    ></jc-card-producto>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body d-flex p-3">
                  <h6 class="my-auto">Categoría</h6>
                  <div class="nav-wrapper position-relative ms-auto w-50">
                    <ul class="nav nav-pills nav-fill p-1" role="tablist">
                      <li class="nav-item active" role="presentation">
                        <a
                          class="nav-link mb-0 px-0 py-1"
                          data-bs-toggle="tab"
                          href="#cam1"
                          role="tab"
                          aria-controls="cam1"
                          aria-selected="true"
                        >
                          {{ categoria == "all" ? "Todas" : categoria }}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown pt-2">
                    <a
                      href="javascript:;"
                      class="text-secondary ps-4"
                      id="dropdownCam"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
                      aria-labelledby="dropdownCam"
                      style=""
                    >
                      <li @click="categoria = 'all'">
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          >Todo</a
                        >
                      </li>
                      <li
                        v-for="(m, i) in categorias"
                        :key="i"
                        @click="categoria = m.nombre"
                      >
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          >{{ m.nombre }}</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="card card-pricing">
            <div
              class="card-header bg-gradient-dark text-center pt-4 pb-5 position-relative"
            >
              <div class="z-index-1 position-relative">
                <h1 class="text-white mt-2 mb-0">
                  <small></small>{{ Number(total).toFixed(2) }}
                </h1>
                <h6 class="text-white">Total</h6>
               
              </div>
            </div>
            <div class="position-relative mt-n5" style="height: 50px">
              <div class="position-absolute w-100">
                <svg
                  class="waves waves-sm"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 24 150 40"
                  preserveAspectRatio="none"
                  shape-rendering="auto"
                >
                  <defs>
                    <path
                      id="card-wave"
                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    ></path>
                  </defs>
                  <g class="moving-waves">
                    <use
                      xlink:href="#card-wave"
                      x="48"
                      y="-1"
                      fill="rgba(255,255,255,0.30"
                    ></use>
                    <use
                      xlink:href="#card-wave"
                      x="48"
                      y="3"
                      fill="rgba(255,255,255,0.35)"
                    ></use>
                    <use
                      xlink:href="#card-wave"
                      x="48"
                      y="5"
                      fill="rgba(255,255,255,0.25)"
                    ></use>
                    <use
                      xlink:href="#card-wave"
                      x="48"
                      y="8"
                      fill="rgba(255,255,255,0.20)"
                    ></use>
                    <use
                      xlink:href="#card-wave"
                      x="48"
                      y="13"
                      fill="rgba(255,255,255,0.15)"
                    ></use>
                    <use
                      xlink:href="#card-wave"
                      x="48"
                      y="16"
                      fill="rgba(255,255,255,0.99)"
                    ></use>
                  </g>
                </svg>
              </div>
            </div>
            <div class="card-body text-center p-3">
              <div class="d-flex align-items-center px-2">
                <h6>CARRITO</h6>
                <button
                  type="button"
                  class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  @click="Clean()"
                >
                  <i class="fas fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <div class="table-responsive p-0" style="min-height: 30vh">
                <table
                  class="table align-items-center justify-content-center mb-0"
                >
                  <thead>
                    <tr>
                      <th
                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-start"
                      >
                        Artículo
                      </th>
                      <th
                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-start"
                      >
                        Cantidad
                      </th>
                      <th
                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-start"
                      >
                        Total
                      </th>
                      <th
                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(m, i) in cart" :key="i">
                      <td class="text-start">
                        <p class="text-xxs font-weight-bold mb-0 text-start">
                          {{ m.articulo.nombre }}
                        </p>
                      </td>
                      <td class="text-start">
                        <p class="text-xxs font-weight-bold mb-0 text-start">
                          {{ m.cantidad }} {{ m.articulo.medida.codigo }}
                        </p>
                      </td>
                      <td class="text-start">
                        <p class="text-xxs font-weight-bold mb-0 text-start">
                          {{ Number(m.precio * m.cantidad).toFixed(2) }}
                        </p>
                      </td>
                      <td>
                        <div class="input-group input-group-sm">
                          <button
                            class="btn btn-outline-primary mb-0 btn-sm"
                            type="button"
                            @click="editItem(m)"
                          >
                            <i class="fas fa-pen"></i>
                          </button>
                          <button
                            class="btn btn-outline-danger mb-0 btn-sm"
                            type="button"
                            @click="deleteItem(i)"
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <a
                    href="javascript:void(0);"
                    @click="Guardar()"
                    class="btn bg-gradient-dark w-100 mt-4 mb-0"
                  >
                    <i class="fas fa-dollar-sign"></i>
                    {{ Number(total).toFixed(2) }}
                  </a>
                </div>
                <div class="col-12 col-sm-6">
                  <a
                    href="javascript:void(0);"
                    @click="modalMoneda = true"
                    class="btn btn-outline-dark w-100 mt-4 mb-0"
                  >
                    <i class="fas fa-cog"></i> OPCIONES
                  </a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          :class="modalEdit ? 'showModal' : ''"
          id="AjusteModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Editar artículo
                </h5>
                <button
                  type="button"
                  class="btn-close text-dark"
                  @click="modalEdit = false"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group has-success">
                      <label for="">Articulo</label>
                      <input
                        type="text"
                        placeholder=""
                        disabled
                        v-model="item.articulo.nombre"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-group has-success">
                      <label for="">Precio Compra</label>
                      <input
                        type="text"
                        placeholder=""
                        v-model.number="item.articulo.compra"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-success">
                      <label for="">Precio Venta</label>
                      <input
                        type="text"
                        placeholder=""
                        v-model.number="item.articulo.venta"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-success">
                      <label for="">Precio</label>
                      <input
                        type="text"
                        placeholder=""
                        v-model.number="item.precio"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-success">
                      <label for="">Cantidad</label>
                      <input
                        type="text"
                        placeholder=""
                        v-model.number="item.cantidad"
                        class="form-control"
                        @change="ValidarStock()"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  @click="modalEdit = false"
                  class="btn bg-gradient-secondary w-100"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          :class="modalMoneda ? 'showModal' : ''"
          id="monedaModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Otro Monto</h5>
                <button
                  type="button"
                  class="btn-close text-dark"
                  @click="modalMoneda = false"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body p-0">
                <div class="row">
                  <div class="col-8">
                    <div class="row p-4">
                      <div
                        v-for="m in monedas"
                        class="col-sm-3"
                        @click="AddMonto(m.monto)"
                      >
                        <img
                          :src="url + m.moneda_image.image.path"
                          class="moneda"
                          height="70"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 px-3">
                        <div class="card border mb-3">
                        
  <div class="card-body text-primary"> 
    <div class="row">
                            <div class="form-group my-0 py-0 col-5">
                              <label for="">COMPROBANTE</label>
                              <select name="" id="" class="form-control form-control-sm" v-model="comprobante" @change="serie=comprobante.series.length>0?comprobante.series[0]:{}">
                                <option v-for="(m) in comprobantes" :value="m">{{m.nombre}}</option>
                              </select>
                            </div>
                            <div class="form-group my-0 py-0 col-3">
                              <label for="">SERIE</label>
                              <select name="" id="" class="form-control form-control-sm" v-model="serie">
                                <option v-for="(m) in comprobante.series" :value="m">{{m.serie}}</option>
                              </select>
                            </div>
                            <div class="form-group my-0 py-0 col-4">
                              <label for="">N° COMPROBANTE</label>
                              <input type="text" name="" v-model="serie.numero" class="form-control form-control-sm" id="">
                            </div>
                            <div class="form-group my-0 py-0 col-4">
                              <label for="">DOCUMENTO</label>
                              <select name="" id="" v-model="documento" class="form-control form-control-sm">
                                <option v-for="(m) in documentos" :value="m">{{m.nombre}}</option>
                              </select>
                            </div>
                            <div class="form-group my-0 py-0 col-4">
                              <label for="">N° DOCUMENTO</label>
                              <input type="text" name="" v-model="factura.cliente_numero_de_documento" class="form-control form-control-sm" id="">
                            </div>
                            <div class="form-group my-0 py-0 col-4">
                              <label for="">EMAIL</label>
                              <input type="text" name="" v-model="factura.cliente_email" class="form-control form-control-sm" id="">
                            </div>
                            <div class="form-group my-0 py-0 col-6">
                              <label for="">CLIENTE</label>
                              <input type="text" name="" v-model="operacion.cliente" class="form-control form-control-sm" id="">
                            </div>
                            <div class="form-group my-0 py-0 col-6">
                              <label for="">DIRECCION</label>
                              <input type="text" name="" v-model="factura.cliente_direccion" class="form-control form-control-sm" id="">
                            </div>
                            <div class="col-12 ">
                  <a
                    href="javascript:void(0);"
                    @click="Facturar()"
                    class="btn bg-gradient-dark w-100 mt-4 mb-0"
                    :class="[sumaMontos<total?'disabled':'']"
                  >
                   EMITIR {{comprobante.nombre}}
                  </a>
                </div>
                          </div>
  </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 pl-4">
                    <div class="row p-0">
                      <div class="col-12 mb-3">
                        <div
                          class="card-header bg-gradient-dark text-center pt-2 pb-3 position-relative"
                        >
                          <div class="z-index-1 position-relative">
                            <h4 class="text-white mt-2 mb-0">
                              <small></small>{{ Number(sumaMontos).toFixed(2) }}
                            </h4>
                            <h6 class="text-white">Total</h6>
                          </div>
                        </div>
                        <div
                          class="position-relative mt-n5"
                          style="height: 20px"
                        >
                          <div class="position-absolute w-100">
                            <svg
                              class="waves waves-sm"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 24 150 40"
                              preserveAspectRatio="none"
                              shape-rendering="auto"
                            >
                              <defs>
                                <path
                                  id="card-wave"
                                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                ></path>
                              </defs>
                              <g class="moving-waves">
                                <use
                                  xlink:href="#card-wave"
                                  x="48"
                                  y="-1"
                                  fill="rgba(255,255,255,0.30"
                                ></use>
                                <use
                                  xlink:href="#card-wave"
                                  x="48"
                                  y="3"
                                  fill="rgba(255,255,255,0.35)"
                                ></use>
                                <use
                                  xlink:href="#card-wave"
                                  x="48"
                                  y="5"
                                  fill="rgba(255,255,255,0.25)"
                                ></use>
                                <use
                                  xlink:href="#card-wave"
                                  x="48"
                                  y="8"
                                  fill="rgba(255,255,255,0.20)"
                                ></use>
                                <use
                                  xlink:href="#card-wave"
                                  x="48"
                                  y="13"
                                  fill="rgba(255,255,255,0.15)"
                                ></use>
                                <use
                                  xlink:href="#card-wave"
                                  x="48"
                                  y="16"
                                  fill="rgba(255,255,255,0.99)"
                                ></use>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 px-2 mt-4">
                      <ul
                        class="list-group list-group-flush"
                        data-toggle="checklist"
                      >
                       
                        <li v-for="(m, index) in pagos"
                        
                          class="list-group-item border-0 flex-column align-items-start ps-0 py-0 mb-3"
                        >
                          <metodo :metodos="metodos" :model="m" :index="index==indexPago" :i="index" @changeIndex="changeIndexPago" @delete="DeleteIndexPago" />
                          <hr class="horizontal dark mt-4 mb-0" />
                        </li>
                      
                      </ul>
                    </div>
                    <div class="col-12 px-2 mb-0">
                      <button
                        type="button"
                        class="btn btn-outline-dark w-100 mb-1 btn-sm"
                        @click="AddMetodo()"
                      >
                        <i class="fas fa-plus"></i> NUEVO METODO DE PAGO
                      </button>
                    </div>
                    <div class="col-12 px-2 mb-0">
                      <a
                        href="javascript:void(0);"
                        @click="[pagos=[],AddMetodo()]"
                        class="btn btn-outline-dark w-100 mb-1 btn-sm"
                      >
                        <i class="fas fa-trash"></i> LIMPIAR
                      </a>
                    </div>
                    <div class="col-12 px-2" v-if="sumaMontos >= total">
                      <a
                        href="javascript:void(0);"
                        @click="
                          [Guardar(), (modalMoneda = false)]
                        "
                        class="btn bg-gradient-dark w-100 btn-sm"
                      >
                        Cambio <i class="fas fa-dollar-sign"></i>
                        {{ Number(sumaMontos - total).toFixed(2) }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          :class="modalFactura ? 'showModal' : ''"
          id="modalFactura"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-sm"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ver comprobante</h5>
                <button
                  type="button"
                  class="btn-close text-dark"
                  @click="modalFactura = false"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body ">
                <div class="row">
                  <div class="col-sm-6">
                    <a  :href="comprobante_sunat.enlace_del_pdf" target="_blank" class="btn btn-info w-100">PDF</a>
                  </div>
                  <div class="col-sm-6">
                    <a :href="comprobante_sunat.enlace_del_xml"  target="_blank" class="btn btn-success w-100">XML</a>

                  </div>
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
import axios from "../../../axios.js";
import { useToast } from "vue-toastification";
import { mapState } from "vuex";
// import AmosisSocket from "../../../libraries/AmosisSocket";
// import VueSocketIO from "vue-socket.io";
import axios2 from "axios"
const toast = useToast();
 import { v4 as uuidv4 } from 'uuid';

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    add: {
      type: String,
      default: "",
    },
    edit: {
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
      //  socket: new VueSocketIO({
      //       debug: true,
      //       connection: 'http://192.168.1.9:3006'
      // }),
      // amosisSocket: new AmosisSocket(),
      articulos: [],
      categorias: [],
      marcas: [],
      monedas: [],
      cart: [],
      marca: "all",
      categoria: "all",
      categoriaMode: 1,
      buscar: "",
      tipo: 1,
      item: {
        cantidad: 1,
        precio: 0,
        articulo: {},
      },
      otroMonto: 0,
      modalEdit: false,
      modalMoneda: false,
      modalFactura: false,
      operacion: {
        cliente: "PUBLICO GENERAL",
        motivo: "",
      },
      comprobante_sunat:{
        enlace_del_pdf:'',
        enlace_del_xml:''
      },
      pagos:[],
      metodos:[],
      sucursals:[],
      comprobantes:[],
      documentos:[],
      sucursal:{},
      comprobante:{
        series:[]
      },
      serie:{
        numero:''
      },
      documento:{},
      factura:{
        cliente_numero_de_documento:'00000000'
      },
      indexPago:0
    };
  },
  computed: {
    ...mapState(["user", "url"]),
    total() {
      return this.cart.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
      );
    },
    totalMasImpuesto() {
      return this.CartImpuesto.reduce(
        (total, item) => total + Number(item.subtotal),
        0
      );
    },
    igv() {
      return this.CartImpuesto.reduce(
        (total, item) => total + Number(item.igv),
        0
      );
    },
    CartImpuesto() {
      return this.cart.map((e)=>{
        
        
        let precio_base  = e.precio/1.18
        let precio = e.precio-precio_base
        
        let valor_unitario = e.precio-precio
        let cantidad = e.cantidad
        let valorizado = valor_unitario*cantidad
        let igv = Number(valorizado*0.18)
        let subtotal = valorizado
        let total = subtotal+igv

        let newItem = {
          unidad_de_medida:          "NIU",
          codigo:                    "001",
          descripcion:               e.articulo.nombre,
          cantidad:                  e.cantidad,
          valor_unitario:            Number(valor_unitario).toFixed(2),
          precio_unitario:           Number(e.precio).toFixed(2),
          descuento:                 "",
          subtotal:                  Number(subtotal).toFixed(2),
          tipo_de_igv:               "1",
          igv:                       Number(igv).toFixed(2),
          total:                     Number(total).toFixed(2),
          anticipo_regularizacion:   "false",
          anticipo_documento_serie:  "",
          anticipo_documento_numero: ""
        }

        return newItem
      })
    },
    filterCategoria() {
      let buscar = this.categoria;
      if (buscar == "all") {
        return this.articulos;
      } else {
        return this.articulos.filter((a) => a.categoria.nombre == buscar);
      }
    },
    filterMarca() {
      let buscar = this.marca;
      if (buscar == "all") {
        return this.filterCategoria;
      } else {
        return this.filterCategoria.filter((a) => a.marca.nombre == buscar);
      }
    },
    filterBuscar() {
      let buscar = this.buscar;
      if (buscar == "") {
        return this.filterMarca;
      } else {
        return this.filterMarca.filter(
          (a) =>
            a.nombre.toLowerCase().indexOf(buscar.toLowerCase()) > -1 ||
            a.barra.toLowerCase().indexOf(buscar.toLowerCase()) > -1
        );
      }
    },
    sumaMontos(){
      return this.pagos.reduce((total, item) => total + item.monto, 0)
    }
  },
  methods: {
    changeIndexPago(index) {
      this.indexPago = index;
    },
    DeleteIndexPago(index) {
      if(this.pagos.length > 1){
        this.pagos.splice(index, 1);
   
        this.indexPago = this.pagos.length - 1
      }
    },
    AddMetodo() {
      if(this.metodos.length>0){
        this.pagos.push({
          metodo: this.metodos[0].id,
          monto: 0,
        });
       
      this.indexPago = this.pagos.length - 1
        
      }
    },
    AddMonto(monto) {
      this.pagos[this.indexPago].monto += Number(monto);
    },
    async GET_DATA(path) {
      const response = await axios.get(path);
      return response.data;
    },
    BuscarEnter() {
      let buscar = this.buscar;
      let item = this.articulos.filter(
        (item) =>
          item.nombre.toLowerCase().indexOf(buscar.toLowerCase()) > -1 ||
          item.barra.toLowerCase().indexOf(buscar.toLowerCase()) > -1
      );
      if (item.length > 0) {
        this.addItem(item[0]);
        this.buscar = "";
        this.$refs.buscar.focus();
      }
    },
    async loadData() {
      await Promise.all([
        this.GET_DATA("inventarios"),
        this.GET_DATA("marcas"),
        this.GET_DATA("categorias"),
        this.GET_DATA("monedas"),
        this.GET_DATA("metodos"),
        this.GET_DATA("sucursals"),
        this.GET_DATA("comprobantes"),
        this.GET_DATA("documentos"),
      ]).then((v) => {
        this.articulos = v[0];
        this.marcas = v[1];
        this.categorias = v[2];
        this.monedas = v[3];
        this.metodos = v[4];
        this.sucursals = v[5]
        this.comprobantes = v[6]
        this.documentos = v[7]
        if(this.sucursals.length>0){
        this.sucursal = this.sucursals[0]
      }
        if(this.documentos.length>0){
        this.documento = this.documentos[0]
      }
        if(this.comprobantes.length>0){
        this.comprobante = this.comprobantes[0]
         if(this.comprobante.series.length>0){
        this.serie = this.comprobante.series[0]
      }
      }
        this.AddMetodo();
      });
    },
    editItem(m) {
      this.item = m;
      this.modalEdit = true;
    },
    deleteItem(i) {
      this.cart.splice(i, 1);
    },
    ValidarStock() {
      if (this.item.cantidad > this.item.articulo.stock) {
        this.item.cantidad = this.item.articulo.stock;
        toast.error("No hay suficiente stock");
      }
    },
    addItem(m) {
      let buscar = this.cart.filter((item) => item.articulo.id == m.id);
      if (buscar.length > 0) {
        let stock = buscar[0].articulo.stock;
        if (buscar[0].cantidad < stock) {
          buscar[0].cantidad++;
        } else {
          toast.warning("No hay stock suficiente");
        }
      } else {
        const item = {
          articulo: m,
          cantidad: 1,
          precio: this.tipo == 1 ? m.venta : m.compra,
        };
        this.cart.push(item);
      }
    },
    async Guardar() {
      let self = this;
      let loader = this.$loading.show();
      try {
        let suma = this.sumaMontos==0?this.total:this.sumaMontos
        this.operacion.cart = this.cart;
        this.operacion.total = this.total;
        this.operacion.pago = suma;
        this.operacion.cambio = suma-this.total;
        this.operacion.caja_id = this.user.caja_id;
       let res = await axios.post("ventas", this.operacion);
       this.Print(res.data);
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });
        swalWithBootstrapButtons
          .fire({
            title: "Guardado!",
            text: "Se ha guardado correctamente",
            icon: "success",
            showCancelButton: false,
            confirmButtonText: "OK!",
            // cancelButtonText: "No!",
            reverseButtons: false,
          })
          .then(async (result) => {
            let loader = self.$loading.show();
            self.Clean();
            self.pagos=[]
            self.AddMetodo()
            try {
              await self.loadData();
            } catch (error) {
              console.log(error);
            } finally {
              loader.hide();
            }
          });
      } catch (e) {
        console.log(e);
        swalWithBootstrapButtons.fire(
          "Lo sentimos :(",
          "No hemos podido realizar tu petición.",
          "error"
        );
      } finally {
        loader.hide();
      }
    },
    async Facturar() {
      let self = this;
      let loader = this.$loading.show();
       const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });
      try {
        let suma = this.sumaMontos==0?this.total:this.sumaMontos
        this.operacion.cart = this.cart;
        this.operacion.total = this.total;
        this.operacion.pago = suma;
        this.operacion.cambio = suma-this.total;
        this.operacion.caja_id = this.user.caja_id;
        let operacion = this.operacion
       let comprobante ={
operacion				:"generar_comprobante",
tipo_de_comprobante               :this.comprobante.codigo,
serie                             :this.serie.serie,
numero				:this.serie.numero,
sunat_transaction			:"1",
cliente_tipo_de_documento		:this.documento.codigo,
cliente_numero_de_documento	:this.factura.cliente_numero_de_documento,
cliente_denominacion              :this.operacion.cliente,
cliente_direccion                 :this.factura.cliente_direccion,
cliente_email                     :this.factura.cliente_email,
cliente_email_1                   :"",
cliente_email_2                   :"",

fecha_de_vencimiento              :"",
moneda                            :"1",
tipo_de_cambio                    :"",
porcentaje_de_igv                 :"18.00",
descuento_global                  :"",
descuento_global                  :"",
total_descuento                   :"",
total_anticipo                    :"",
total_gravada                     :this.totalMasImpuesto,
total_inafecta                    :"",
total_exonerada                   :"",
total_igv                         :this.igv,
total_gratuita                    :"",
total_otros_cargos                :"",
total                             :this.totalMasImpuesto+this.igv,
percepcion_tipo                   :"",
percepcion_base_imponible         :"",
total_percepcion                  :"",
total_incluido_percepcion         :"",
detraccion                        :"false",
observaciones                     :"",
documento_que_se_modifica_tipo    :"",
documento_que_se_modifica_serie   :"",
documento_que_se_modifica_numero  :"",
tipo_de_nota_de_credito           :"",
tipo_de_nota_de_debito            :"",
enviar_automaticamente_a_la_sunat :"true",
enviar_automaticamente_al_cliente :"false",
codigo_unico                      :"",
condiciones_de_pago               :"",
medio_de_pago                     :"",
placa_vehiculo                    :"",
orden_compra_servicio             :"",
tabla_personalizada_codigo        :"",
formato_de_pdf                    :"",
        items : this.CartImpuesto,
        operacion_venta:operacion
       }
       let response = await axios.post("ventaFacturas", comprobante);
       if(typeof response.data === 'string'){
          Swal.fire({
          icon: "warning",
          title: "Ha ocurrido un error inesperado.",
          text: response.data,
          showConfirmButton: true,
        });
        }else{
          // this.invoice.items =[]
          // this.emision = response.data;
          this.comprobante_sunat=response.data
          this.modalMoneda=false
          this.imprimir2(this.comprobante_sunat)
             Swal.fire({
          icon: 'success',
          title: "Se ha emitido correctamente.",
          text: response.data.sunat_description,
          showConfirmButton: true,

        }).then(async (result) => {
            let loader = self.$loading.show();
            self.Clean();
            self.pagos=[]
            self.AddMetodo()
            try {
              self.modalFactura=true
              await self.loadData();
            } catch (error) {
              console.log(error);
            } finally {
              loader.hide();
            }
          })
        }
      } catch (e) {
        console.log(e);
        swalWithBootstrapButtons.fire(
          "Lo sentimos :(",
          "No hemos podido realizar tu petición.",
          "error"
        );
      } finally {
        loader.hide();
      }
    },
    Clean() {
      this.cart = [];
    },
     AddZero(num) {
        return (num >= 0 && num < 10) ? "0" + num : num + "";
    },
    async FacturarPrint(){
      await Promise.all([
        this.GET_DATA("sunats/2"),
        
      ]).then((v) => {
        let print  = v[0];
        this.imprimir2(print)
      })
    },
    async Print(impresion){
       let now = new Date()
            var hora = [ 
        [this.AddZero(now.getHours()), 
        this.AddZero(now.getMinutes())].join(":"), 
        now.getHours() >= 12 ? "PM" : "AM"].join(" ");
        impresion.id_socket = uuidv4();
        impresion.print = 0;
        impresion.tipo_operacion = 'VENTA';
        impresion.hora = hora;
      // this.socket.io.emit('print', impresion)
      await this.Impresion(impresion)
    },
    async Impresion(impresion){
      const res = await axios2.post(this.sucursal.impresora_url+'/ventas',
          {name:this.sucursal.impresora,
          pedido:impresion,
          sucursal:this.sucursal,
          }
        );
        },
    async imprimir2(impresion){
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
      try {
        await this.loadData();
       
      
      } catch (error) {
        console.log(error);
      } finally {
        loader.hide();
      }
    });
  },
};
</script>
<style>
.showModal {
  display: block !important;
  opacity: 1 !important;
}
.moneda:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
