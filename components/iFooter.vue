<template>
    <footer>
        <div class="view footer">
            <div class="map"></div>
            <div class="copyright">
                <span>版权所有@2021宝利德控股集团有限公司 浙ICP备1253646468</span>
                <span>浙公安备6463453134号</span>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="scss">
footer {
    background: rgba(55, 59, 62, 1);
    .footer {
        display: flex;
        flex-direction: column;

        .map {
        }
        .copyright {
            font-size: 12px;
            text-align: center;
            span {
                margin: 0 20px;
            }
        }
    }
}
</style>
