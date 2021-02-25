export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'yuwei-website',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'keywords', name: 'keywords', content: '宝利德、余海军、宝利德集团、宝利德控股集团、宝利德控股集团有限公司' },
            {
                hid: 'description',
                name: 'description',
                content: '宝利德控股集团有限公司创建于2003年，由余海军先生创立，专注高端汽车服务运营，以“行”为切入点实施“互联网+”战略转型，现已发展成为覆盖高端汽车服务运营、互联网、融资租赁等核心领域的综合性产业集团，现有员工4000余人……'
            }
        ],
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
