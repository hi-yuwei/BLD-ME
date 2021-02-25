<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404" class="error">页面不存在或没有数据</h1>
        <h1 v-else class="error">应用发生错误异常</h1>
        <nuxt-link class="to_home" to="/">返回首页</nuxt-link>
    </div>
</template>

<script>
export default {
    layout: 'error',
    props: ['error'],
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.container {
}
</style>
