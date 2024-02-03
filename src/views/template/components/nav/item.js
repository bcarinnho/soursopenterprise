const item =[
    {
        text: 'Dashboard',
        name:'Dashboard',
        title:false,
        module:'Dashboard',
        icon:'fas fa-store ',
        children:[
            {
                mini: 'D',
                page: 'Dashboard',
                text: 'Dashboard',
                path: '/',
            },
            
           
        ]
    },
    {
        text: 'ADMINISTRACION',
        name:'administracion',
        title:true
    },
    {
        text: 'Configuración',
        name:'Configuracion',
        title:false,
        module:'Configuración',
        icon:'fas fa-cog ',
        children:[
            {
                mini: 'S',
                page: 'Sucursal',
                text: 'Sucursal',
                path: '/config/sucursal',
            },
            {
                mini: 'M',
                page: 'Monedas',
                text: 'Monedas',
                path: '/config/moneda',
            },
            {
                mini: 'M',
                page: 'Metodos',
                text: 'Metodos',
                path: '/config/metodo',
            },
            {
                mini: 'M',
                page: 'Medidas',
                text: 'Medidas',
                path: '/config/medida',
            },
            {
                mini: 'M',
                page: 'Marcas',
                text: 'Marcas',
                path: '/config/marca',
            },
            {
                mini: 'C',
                page: 'Categorias',
                text: 'Categorias',
                path: '/config/categoria',
            },
            {
                mini: 'A',
                page: 'Articulos',
                text: 'Articulos',
                path: '/config/articulo',
            },
            {
                mini: 'F',
                page: 'Facturacion',
                text: 'Facturacion',
                path: '/config/facturacion',
            },
            {
                mini: 'D',
                page: 'Documentos',
                text: 'Documentos',
                path: '/config/documento',
            },
            {
                mini: 'C',
                page: 'Comprobantes',
                text: 'Comprobantes',
                path: '/config/comprobante',
            },
            {
                mini: 'S',
                page: 'Series',
                text: 'Series',
                path: '/config/serie',
            },
           
        ]
    },
    {
        text: 'Usuarios',
        name:'Usuarios',
        title:false,
        module:'Usuarios',
        icon:'fas fa-users ',
        children:[
            {
                mini: 'U',
                page: 'Usuarios',
                text: 'Usuarios',
                path: '/usuario',
            },
            
           
        ]
    },
    {
        text: 'LOGISTICA',
        name:'logistica',
        title:true
    },
    {
        text: 'Inventario',
        name:'Inventario',
        title:false,
        module:'Inventario',
        icon:'fas fa-archive ',
        children:[
            {
                mini: 'G',
                page: 'General',
                text: 'General',
                path: '/inventario',
            },
            
           
        ]
    },
    {
        text: 'CAJA ',
        name:'caja',
        title:true
    },
    {
        text: 'Caja chica',
        name:'caja',
        title:false,
        module:'Caja',
        icon:'fas fa-inbox ',
        children:[
            {
                mini: 'C',
                page: 'Caja chica',
                text: 'Caja',
                path: '/caja',
            },
            
           
        ]
    },
    {
        text: 'COMPRAS',
        name:'compras',
        title:true
    },
    {
        text: 'Compras',
        name:'Compras',
        title:false,
        module:'Compras',
        icon:'fas fa-shopping-bag ',
        children:[
            {
                mini: 'P',
                page: 'POS',
                text: 'POS',
                path: '/compras',
            },
            {
                mini: 'C',
                page: 'Compras',
                text: 'Compras',
                path: '/compras/list',
            },
            
           
        ]
    },
    {
        text: 'VENTAS',
        name:'ventas',
        title:true
    },
    {
        text: 'Ventas',
        name:'Ventas',
        title:false,
        module:'Ventas',
        icon:'fas fa-shopping-cart ',
        children:[
            {
                mini: 'P',
                page: 'POS',
                text: 'POS',
                path: '/ventas',
            },
            {
                mini: 'V',
                page: 'Ventas',
                text: 'Ventas',
                path: '/ventas/list',
            },
            
           
        ]
    },
    {
        text: 'FACTURACION',
        name:'facturas',
        title:true
    },
    {
        text: 'Comprobantes E.',
        name:'Comprobantes-E',
        title:false,
        module:'Comprobantes-E',
        icon:'fas fa-file-invoice ',
        children:[
            
            {
                mini: 'C',
                page: 'Comprobantes Electronicos',
                text: 'Comprobantes Electronicos',
                path: '/comprobantes-e/list',
            },
            
           
        ]
    },
]
export default item;