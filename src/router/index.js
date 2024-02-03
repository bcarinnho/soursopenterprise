import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/pages/dashboard/Index.vue";
import MedidaList from "../views/pages/config/medida/List.vue";
import SucursalAdd from "../views/pages/config/sucursal/Add.vue";
import FacturacionAdd from "../views/pages/config/facturacion/Add.vue";
import MedidaAdd from "../views/pages/config/medida/Add.vue";
import MedidaEdit from "../views/pages/config/medida/Edit.vue";
import MetodoList from "../views/pages/config/metodo/List.vue";
import MetodoAdd from "../views/pages/config/metodo/Add.vue";
import MetodoEdit from "../views/pages/config/metodo/Edit.vue";
import DocumentoList from "../views/pages/config/documento/List.vue";
import DocumentoAdd from "../views/pages/config/documento/Add.vue";
import SerieList from "../views/pages/config/series/List.vue";
import SerieAdd from "../views/pages/config/series/Add.vue";
import DocumentoEdit from "../views/pages/config/documento/Edit.vue";
import ComprobanteList from "../views/pages/config/comprobante/List.vue";
import ComprobanteAdd from "../views/pages/config/comprobante/Add.vue";
import ComprobanteEdit from "../views/pages/config/comprobante/Edit.vue";
import MonedaAdd from "../views/pages/config/moneda/Add.vue";
import MonedaList from "../views/pages/config/moneda/List.vue";
import MarcaList from "../views/pages/config/marca/List.vue";
import MarcaAdd from "../views/pages/config/marca/Add.vue";
import MarcaEdit from "../views/pages/config/marca/Edit.vue";
import UsuarioList from "../views/pages/usuario/List.vue";
import UsuarioAdd from "../views/pages/usuario/Add.vue";
import UsuarioEdit from "../views/pages/usuario/Edit.vue";
import CategoriaList from "../views/pages/config/categoria/List.vue";
import CategoriaAdd from "../views/pages/config/categoria/Add.vue";
import CategoriaEdit from "../views/pages/config/categoria/Edit.vue";
import ArticuloList from "../views/pages/config/articulo/List.vue";
import ArticuloAdd from "../views/pages/config/articulo/Add.vue";
import ArticuloEdit from "../views/pages/config/articulo/Edit.vue";
import InventarioList from "../views/pages/inventario/general/List.vue";
import InventarioKardex from "../views/pages/inventario/general/Edit.vue";
import VentaPOS from "../views/pages/ventas/Pos.vue";
import VentaList from "../views/pages/ventas/List.vue";
import FacturaList from "../views/pages/facturas/List.vue";
import VentaInvoice from "../views/pages/ventas/Invoice.vue";
import CompraPOS from "../views/pages/compras/Pos.vue";
import CompraInvoice from "../views/pages/compras/Invoice.vue";
import CompraList from "../views/pages/compras/List.vue";
import CajaPage from "../views/pages/caja/Caja.vue";
import LoginPage from "../views/pages/auth/Login.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
    props: {
      default: true,
      title: "Dashboard",
      add: "/config/medida/add",
      edit: "/config/medida/edit/",
      modelApi: 'dashboard'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/sucursal",
    component: SucursalAdd,
    props: {
      default: true,
      title: "sucursal",
      modelApi: 'sucursals'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/facturacion",
    component: FacturacionAdd,
    props: {
      default: true,
      title: "facturacion",
      modelApi: 'sucursals'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/moneda/add",
    component: MonedaAdd,
    props: {
      default: true,
      title: "moneda",
      modelApi: 'monedas'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/medida",
    component: MedidaList,
    props: {
      default: true,
      title: "MEDIDAS",
      add: "/config/medida/add",
      edit: "/config/medida/edit/",
      modelApi: 'medidas'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/moneda",
    component: MonedaList,
    props: {
      default: true,
      title: "MONEDAS",
      add: "/config/moneda/add",
      edit: "/config/moneda/edit/",
      modelApi: 'monedas'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/medida/add",
    component: MedidaAdd,
    props: {
      default: true,
      title: "Medida",
      modelApi: 'medidas'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/medida/edit/:id",
    component: MedidaEdit,
    props: true
  },
  {
    path: "/config/metodo",
    component: MetodoList,
    props: {
      default: true,
      title: "METODOS",
      add: "/config/metodo/add",
      edit: "/config/metodo/edit/",
      modelApi: 'metodos'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/comprobante/add",
    component: ComprobanteAdd,
    props: {
      default: true,
      title: "Comprobante",
      modelApi: 'comprobantes'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/comprobante/edit/:id",
    component: ComprobanteEdit,
    props: true
  },
  {
    path: "/config/comprobante",
    component: ComprobanteList,
    props: {
      default: true,
      title: "COMPROBANTES",
      add: "/config/comprobante/add",
      edit: "/config/comprobante/edit/",
      modelApi: 'comprobantes'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/documento/add",
    component: DocumentoAdd,
    props: {
      default: true,
      title: "Documento",
      modelApi: 'documentos'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/documento/edit/:id",
    component: DocumentoEdit,
    props: true
  },
  {
    path: "/config/documento",
    component: DocumentoList,
    props: {
      default: true,
      title: "DOCUMENTOS",
      add: "/config/documento/add",
      edit: "/config/documento/edit/",
      modelApi: 'documentos'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/metodo/add",
    component: MetodoAdd,
    props: {
      default: true,
      title: "Metodo",
      modelApi: 'metodos'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/serie",
    component: SerieList,
    props: {
      default: true,
      title: "SERIES",
      add: "/config/serie/add",
      edit: "/config/serie/edit/",
      modelApi: 'series'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/serie/add",
    component: SerieAdd,
    props: {
      default: true,
      title: "Serie",
      modelApi: 'series'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/metodo/edit/:id",
    component: MetodoEdit,
    props: true
  },
  {
    path: "/config/marca",
    component: MarcaList,
    props: {
      default: true,
      title: "MARCAS",
      add: "/config/marca/add",
      edit: "/config/marca/edit/",
      modelApi: 'marcas'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/marca/add",
    component: MarcaAdd,
    props: {
      default: true,
      title: "Marca",
      modelApi: 'marcas'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/marca/edit/:id",
    component: MarcaEdit,
    props: true
  },
  {
    path: "/config/categoria",
    component: CategoriaList,
    props: {
      default: true,
      title: "CATEGORIAS",
      add: "/config/Categoria/add",
      edit: "/config/Categoria/edit/",
      modelApi: 'categorias'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/categoria/add",
    component: CategoriaAdd,
    props: {
      default: true,
      title: "Categoria",
      modelApi: 'categorias'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/categoria/edit/:id",
    component: CategoriaEdit,
    props: true
  },
  {
    path: "/config/articulo",
    component: ArticuloList,
    props: {
      default: true,
      title: "ARTICULOS",
      add: "/config/articulo/add",
      edit: "/config/articulo/edit/",
      modelApi: 'articulos'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/articulo/add",
    component: ArticuloAdd,
    props: {
      default: true,
      title: "Articulo",
      modelApi: 'articulos'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/config/articulo/edit/:id",
    component: ArticuloEdit,
    props: true
  },
  {
    path: "/usuario",
    component: UsuarioList,
    props: {
      default: true,
      title: "USUARIOS",
      add: "/usuario/add",
      edit: "/usuario/edit/",
      modelApi: 'users'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/usuario/add",
    component: UsuarioAdd,
    props: {
      default: true,
      title: "Usuarios",
      modelApi: 'users'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/usuario/edit/:id",
    component: UsuarioEdit,
    props: true
  },
  {
    path: "/inventario",
    component: InventarioList,
    props: {
      default: true,
      title: "INVENTARIO GENERAL",
      add: "/config/articulo/add",
      edit: "/inventario/kardex/producto/",
      modelApi: 'inventarios'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/inventario/kardex/producto/:id",
    component: InventarioKardex,
    props: true
  },
  {
    path: "/ventas",
    component: VentaPOS,

    props: {
      default: true,
      title: "POS",
      add: "/config/articulo/add",
      edit: "/inventario/kardex/producto/",
      modelApi: 'inventarios'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ventas/list",
    component: VentaList,
    props: {
      default: true,
      title: "Ventas",
     
      edit: "/ventas/invoice/",
      modelApi: 'ventas'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ventas/invoice/:id",
    component: VentaInvoice,
    props:true, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/compras",
    component: CompraPOS,
    props: {
      default: true,
      title: "POS",
      add: "/config/articulo/add",
      edit: "/inventario/kardex/producto/",
      modelApi: 'inventarios'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/compras/list",
    component: CompraList,
    props: {
      default: true,
      title: "Compras",
     
      edit: "/compras/invoice/",
      modelApi: 'compras'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/comprobantes-e/list",
    component: FacturaList,
    props: {
      default: true,
      title: "Comprobantes Electronicos",
     
      edit: "/compras/invoice/",
      modelApi: 'sunats'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/compras/invoice/:id",
    component: CompraInvoice,
    props:true, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/caja",
    component: CajaPage,
    props: {
      default: true,
      title: "Caja chica",
      add: "/config/articulo/add",
      edit: "/inventario/kardex/producto/",
      modelApi: 'cajas'
    }, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/auth/login",
    component: LoginPage,
    props: {
      default: true,
    }, meta: {
      requiresAuth: false
    }
  }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("getAmosisUser"))

  if (to.matched.some(record => record.meta.requiresAuth) && !user) {

    next('/auth/login')

  }
  next()


})
export default router;
