<template>
  <jc-template module="Dashboard" page="Dashboard">
    <template v-slot:body class="row">
      <div class="row">
          <div class="col-lg-8">
        <div class="d-flex flex-column h-100">
          <h2 class="font-weight-bolder mb-0">Estadística general</h2>
        </div>
      </div>
        <div class="col-lg-5 col-sm-6">
          <div class="card mb-4">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">
                      Compras
                    </p>
                    <h5 class="font-weight-bolder mb-0">
                    {{Number(model.monto_compras).toFixed(2)}}
                      <!-- <span class="text-success text-sm font-weight-bolder"
                        >+55%</span
                      > -->
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div
                    class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                  >
                    <i
                      class="ni ni-money-coins text-lg opacity-10"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">
                     Ventas
                    </p>
                    <h5 class="font-weight-bolder mb-0">
                        {{Number(model.monto_ventas).toFixed(2)}}
                      <!-- <span class="text-success text-sm font-weight-bolder"
                        >+3%</span
                      > -->
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div
                    class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                  >
                    <i
                      class="ni ni-world text-lg opacity-10"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-sm-6 mt-sm-0 mt-4">
          <div class="card mb-4">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">
                    Ingresos
                    </p>
                    <h5 class="font-weight-bolder mb-0">
 {{Number(model.ingresos).toFixed(2)}}
                      <!-- <span class="text-danger text-sm font-weight-bolder"
                        >-2%</span
                      > -->
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div
                    class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                  >
                    <i
                      class="ni ni-paper-diploma text-lg opacity-10"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">
                      Egresos
                    </p>
                    <h5 class="font-weight-bolder mb-0">
                     {{Number(model.egresos).toFixed(2)}}
                      <!-- <span class="text-success text-sm font-weight-bolder"
                        >+5%</span
                      > -->
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div
                    class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                  >
                    <i
                      class="ni ni-cart text-lg opacity-10"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
  
<div class="chart">
<canvas id="chart-pie" class="chart-canvas" height="200"></canvas>
</div>

        </div>
      </div>
    
    </template>
  </jc-template>
</template>
<script>
import axios from "../../../axios.js";
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
      default: "dashboard",
    },
  },
  data() {
    return {
      model:{

      }
    };
  },
  methods: {
    async GET_DATA(path) {
      const response = await axios.get(path);
      return response.data;
    },
    async DeleteItem2(id) {
      let loader = this.$loading.show();
      try {
        const response = await axios.delete(this.modelApi + "/" + id);
        console.log(response);
        await this.loadData();
      } catch (error) {
        console.log(error);
      } finally {
        loader.hide();
      }
    },
    async DeleteItem(id) {
      let self = this;
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Eliminar?",
          text: "Este cambio es irreversible",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si!",
          cancelButtonText: "No!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            self.DeleteItem2(id);
          }
        });
    },
    async loadData() {
      await Promise.all([this.GET_DATA(this.modelApi)]).then((v) => {
        this.model = v[0];
      });
    },
  },
  mounted() {
    this.$nextTick(async () => {
      let loader = this.$loading.show();
      try {
        await this.loadData();
        // Pie chart
    //     var ctx2 = document.getElementById("chart-pie").getContext("2d");
    // new Chart(ctx2, {
    //   type: "pie",
    //   data: {
    //     labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
    //     datasets: [{
    //       label: "Projects",
    //       weight: 9,
    //       cutout: 0,
    //       tension: 0.9,
    //       pointRadius: 2,
    //       borderWidth: 2,
    //       backgroundColor: ['#17c1e8', '#cb0c9f', '#3A416F', '#a8b8d8'],
    //       data: [105, 20, 12, 60],
    //       fill: false
    //     }],
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     plugins: {
    //       legend: {
    //         display: false,
    //       }
    //     },
    //     interaction: {
    //       intersect: false,
    //       mode: 'index',
    //     },
    //     scales: {
    //       y: {
    //         grid: {
    //           drawBorder: false,
    //           display: false,
    //           drawOnChartArea: false,
    //           drawTicks: false,
    //         },
    //         ticks: {
    //           display: false
    //         }
    //       },
    //       x: {
    //         grid: {
    //           drawBorder: false,
    //           display: false,
    //           drawOnChartArea: false,
    //           drawTicks: false,
    //         },
    //         ticks: {
    //           display: false,
    //         }
    //       },
    //     },
    //   },
    // });
      } catch (error) {
        console.log(error);
      } finally {
        loader.hide();
      }
    });
  },
};
</script>
