
import { createStore } from 'vuex'

const getAmosisUser=()=>{
    if (window.localStorage.getItem('getAmosisUser') !== undefined && window.localStorage.getItem('getAmosisUser')){
      let user = JSON.parse(localStorage.getItem('getAmosisUser'));
      return user
    }
    return {id:''};
  }
// ----------------------------------------------------------
// Vuex modules
// ----------------------------------------------------------
const store =  createStore({

    state: {
       
        plugin:false,
        dark:false,
        user:getAmosisUser(),
        datatableOption:{
          "language":{"decimal":        "",
    "emptyTable":     "Sin registros",
    "info":           "Mostrando del _START_ al _END_ de _TOTAL_ registros",
    "infoEmpty":      "Mostrando del 0 al 0 de 0 registros",
    "infoFiltered":   "(se filtró un total de _MAX_   registros)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Mostrar _MENU_ registros",
    "loadingRecords": "Loading...",
    "processing":     "",
    "search":         "Buscar:",
    "zeroRecords":    "No matching records found",
    "paginate": {
        "first":      '<i class="fas fa-chevrons-left"></i>',
        "last":      '<i class="fas fa-chevrons-right"></i>',
        "next":       '<i class="fas fa-chevron-right"></i>',
        "previous":   '<i class="fas fa-chevron-left"></i>'
    },
    "aria": {
        "sortAscending":  ": activate to sort column ascending",
        "sortDescending": ": activate to sort column descending"
    }}
        },
        url : import.meta.env.VITE_STORAGE,
        sideActive:false
    },
  
    mutations: {
       
          getAmosisUser(state){
            if (window.localStorage.getItem('getAmosisUser') !== undefined && window.localStorage.getItem('getAmosisUser')){
                let user = JSON.parse(localStorage.getItem('getAmosisUser'));
                state.user= user
              }else{

                  state.user = {id:''};
              }
          },
          PluginChange(state){
            state.plugin = !state.plugin;
          },
          sideActiveChange(state){
            state.sideActive = !state.sideActive;
          },
  
          darkMode(state){
            state.dark = !state.dark;
          }
  
    },
    actions: {
        getAmosisUser (context) {
          context.commit('getAmosisUser')
        },
       
        PluginChange (context) {
          context.commit('PluginChange')
        },
        darkMode (context) {
          context.commit('darkMode')
        },
        sideActiveChange (context) {
          context.commit('sideActiveChange')
        },
       
        
      }

})

export default store