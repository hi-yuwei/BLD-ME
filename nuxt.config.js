export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'yuwei-website',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'keywords', name: 'keywords', content: '宝利德,BLD-ME,汽车经销商,bld' }, { hid: 'description', name: 'description', content: '个人网站' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/style/reset.css', '@/assets/style/common.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
