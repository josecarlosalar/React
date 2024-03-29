import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string;
    list: string;
    detail: string;
    rickmorty: string;
    gallery: string;
    checkoutpay: string;
    gracias: string;
    pedidos: string;
    pedidoEnviado: string;
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/list/:organizacion",
    detail: "/detail/:organizacion/:id",
    rickmorty: "/rickmorty",
    gallery: "/gallery/:page",
    checkoutpay: "/checkoutpay",
    gracias: "/gracias",
    pedidos: "/pedidos",
    pedidoEnviado: "/pedidoEnviado",
}

interface Routes extends Omit<SwitchRoutes, 'detail' | 'list' | 'gallery'> {
    list: (organizacion:string) => string;
    detail: (organizacion:string, login:string) => string;
    gallery: (page:string) => string;
}

export const routes: Routes = {
    ...switchRoutes, 
    list: (organizacion) => generatePath("/list/:organizacion", { organizacion }),
    detail: (organizacion: string, id:string) => generatePath("/detail/:organizacion/:id", { organizacion, id }), 
    gallery: (page: string) => generatePath("/gallery/:page", { page }),
}