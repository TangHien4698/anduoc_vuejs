import LayoutDefault from "../layouts/default"
export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import(/* webpackChunkName: "home" */ "../pages/Home"),
            meta: { layout:LayoutDefault}
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import("../pages/Search"),
            meta: {layout: LayoutDefault}
        },
        {
            path: '/:slug+-p:id(\\d+)+.html',
            name: 'Detail',
            component: () => import("../pages/Detail"),
            meta: {layout: LayoutDefault}
        },
        {
            path: '/:category',
            name: 'Category',
            component: () => import("../pages/Category"),
            meta: { layout:LayoutDefault}
        }
]
}
