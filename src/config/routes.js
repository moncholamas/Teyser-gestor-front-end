import { Acerca } from "../Pages/Acerca";
import { Contacto } from "../Pages/Contacto";
import { AsideEquipos } from "../Pages/Equipos/AsideEquipos";
import { Equipos } from "../Pages/Equipos/Equipos";
import { Estadisticas } from "../Pages/Estadisticas";
import { AsideEstadisticas } from "../Pages/Estadisticas/AsideEstadisticas";
import { Home } from "../Pages/Home";
import { Insumos } from "../Pages/Insumos";
import { AsideInsumos } from "../Pages/Insumos/AsideInsumos";
import { Login } from "../Pages/Login";
import { Logoff } from "../Pages/Login/Logoff";
import { Logup } from "../Pages/Logup";
import { MiCuenta } from "../Pages/MiCuenta";
import { AsideMiCuenta } from "../Pages/MiCuenta/AsideMiCuenta";
import { Novedades } from "../Pages/Novedades";
import { AsideNovedades } from "../Pages/Novedades/AsideNovedades";
import { Operadores } from "../Pages/Operadores";
import { AsideOperadores } from "../Pages/Operadores/AsideOperadores";
import { Productos } from "../Pages/Productos";
import { AsideProductos } from "../Pages/Productos/AsideProductos";
import { Stock } from "../Pages/Stock";
import { AsideStock } from "../Pages/Stock/AsideStock";
import { Venta } from "../Pages/Ventas";
import { AsideVentas } from "../Pages/Ventas/AsideVentas";

const routes = [
    {
        path: '/',
        component: Home,
        isPrivate: false,
        allowsInactive: true,
        aside: ''
    },
    {
        path: '/login',
        component: Login,
        isPrivate: false,
        allowsInactive: true,
        aside: ''
    },
    {
        path: '/nuevo',
        component: Logup,
        isPrivate: false,
        allowsInactive: true,
        aside: ''
    },
    {
        path: '/contacto',
        component: Contacto,
        isPrivate: false,
        allowsInactive: true,
        asi: ''
    },
    {
        path: '/acerca',
        component: Acerca,
        isPrivate: false,
        allowsInactive: true,
        aside: ''
    },
    {
        path: '/ventas',
        component: Venta,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideVentas
    },
    {
        path: '/novedades',
        component: Novedades,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideNovedades
    },
    {
        path: '/equipos',
        component: Equipos,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideEquipos
    },
    {
        path: '/estadisticas',
        component: Estadisticas,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideEstadisticas
    },
    {
        path: '/insumos',
        component: Insumos,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideInsumos
    },
    {
        path: '/micuenta',
        component: MiCuenta,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideMiCuenta
    }
    ,
    {
        path: '/operadores',
        component: Operadores,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideOperadores
    },
    {
        path: '/productos',
        component: Productos,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideProductos
    },
    {
        path: '/stock',
        component: Stock,
        isPrivate: true,
        allowsInactive: true,
        aside: AsideStock
    },
    {
        path: '/logoff',
        component: Logoff,
        isPrivate: true,
        allowsInactive: true,
        //aside: AsideLogOff
    }
]

export default routes;