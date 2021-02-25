<template>
    <div class="container">
        <h1 class="title">yuwei-website{{ ip }}</h1>
        <div class="links">
            <nuxt-link to="/about">about</nuxt-link>
            <nuxt-link to="/news">news</nuxt-link>
        </div>
    </div>
</template>

<script>
import { getCode } from '@/api'

export default {
    asyncData(context) {
        return getCode()
            .then(res => {
                return { ip: res.data.message }
            })
            .catch(err => context.error({ err, statusCode: 404, message: '页面未找到或无数据' }))
    },
    data() {
        return { ip: '' }
    }
}
</script>

<style>
.container {
    padding-top: 200px;
}
</style>
