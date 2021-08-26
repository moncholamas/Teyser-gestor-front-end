import { Acerca } from "../Pages/Acerca";
import { Contacto } from "../Pages/Contacto";
import { Equipos } from "../Pages/Equipos/Equipos";
import { Estadisticas } from "../Pages/Estadisticas";
import { Home } from "../Pages/Home";
import { Insumos } from "../Pages/Insumos";
import { Login } from "../Pages/Login";
import { Logup } from "../Pages/Logup";
import { MiCuenta } from "../Pages/MiCuenta";
import { Novedades } from "../Pages/Novedades";
import { Operadores } from "../Pages/Operadores";
import { Productos } from "../Pages/Productos";
import { Stock } from "../Pages/Stock";
import { Venta } from "../Pages/Ventas";

const routes = [
    {
        path: '/',
        component: Home,
        isPrivate: false,
        allowsInactive: true,
        link: 'Inicio'
    },
    {
        path: '/login',
        component: Login,
        isPrivate: false,
        allowsInactive: true,
        link: 'Ingresar'
    },
    {
        path: '/nuevo',
        component: Logup,
        isPrivate: false,
        allowsInactive: true,
    },
    {
        path: '/contacto',
        component: Contacto,
        isPrivate: false,
        allowsInactive: true,
        link: 'Contacto'
    },
    {
        path: '/acerca',
        component: Acerca,
        isPrivate: false,
        allowsInactive: true,
        link: 'Acerca de'
    },
    {
        path: '/ventas',
        component: Venta,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    },
    {
        path: '/novedades',
        component: Novedades,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    },
    {
        path: '/equipos',
        component: Equipos,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    },
    {
        path: '/estadisticas',
        component: Estadisticas,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    },
    {
        path: '/insumos',
        component: Insumos,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    },
    {
        path: '/micuenta',
        component: MiCuenta,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    }
    ,
    {
        path: '/operadores',
        component: Operadores,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    },
    {
        path: '/productos',
        component: Productos,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    },
    {
        path: '/stock',
        component: Stock,
        isPrivate: true,
        allowsInactive: true,
        link: 'Ventas'
    }
]

export default routes;