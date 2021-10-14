import { Announcement, AssignmentTurnedIn, Battery80, Dvr, Forum, People, PowerSettingsNew, Print, ShoppingCart, Timeline, ViewQuilt } from '@mui/icons-material';

const enlaces = [
    {
        nombre: 'Ventas',
        icon: ShoppingCart,
        link: '/ventas',
        menuOperario: true,
        menuAdmin: true
    },
    {
        nombre: 'Pagos',
        icon: AssignmentTurnedIn,
        link: '/pagos',
        menuOperario: false,
        menuAdmin: true
    },
    {
        nombre: 'Productos',
        icon: Print,
        link: '/productos',
        menuOperario: false,
        menuAdmin: true
    },
    {
        nombre: 'Insumos',
        icon: Battery80,
        link: '/insumos',
        menuOperario: false,
        menuAdmin: true
    },
    {
        nombre: 'Equipos',
        icon: Dvr,
        link: '/equipos',
        menuOperario: false,
        menuAdmin: true
    },
    {
        nombre: 'Operadores',
        icon: People,
        link: '/operadores',
        menuOperario: false,
        menuAdmin: true
    },
    {
        nombre: 'Stock',
        icon: ViewQuilt,
        link: '/stock',
        menuOperario: false,
        menuAdmin: true
    },
    {
        nombre: 'Estadísticas',
        icon: Timeline,
        link: '/estadisticas',
        menuOperario: false,
        menuAdmin: true
    },
    {
        nombre: 'Novedades',
        icon: Announcement,
        link: '/novedades',
        menuOperario: true,
        menuAdmin:false
    },
    {
        nombre: 'Mi Cuenta',
        icon: Announcement,
        link: '/micuenta',
        menuOperario: true,
        menuAdmin:false
    },
    {
        nombre: 'Salir',
        icon: Announcement,
        link: '/logoff',
        menuOperario: true,
        menuAdmin:true
    },
    {
        nombre: 'Ingresar',
        icon: PowerSettingsNew,
        link: '/login',
        menuOperario: false,
        menuAdmin:false,
        logoff:true
    },
    {
        nombre: 'Acerca de',
        icon: Announcement,
        link: '/acerca',
        menuOperario: false,
        menuAdmin:false,
        logoff:true
    },
    {
        nombre: 'Contacto',
        icon: Forum,
        link: '/contacto',
        menuOperario: false,
        menuAdmin:false,
        logoff:true
    },
]

export default enlaces;