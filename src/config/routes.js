import { Acerca } from "../Pages/Acerca";
import { Contacto } from "../Pages/Contacto";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Logup } from "../Pages/Logup";
import { Venta } from "../Pages/Ventas"

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
    }
]

export default routes;