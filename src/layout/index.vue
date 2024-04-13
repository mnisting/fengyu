<script setup lang="ts"></script>
<template>
    <section class="layout">
        <!-- 主体 -->
        <main v-waterMarker="{ text: '千锋教育版权所有', textColor: 'rgba(180, 180, 180, 0.4)' }">
            <section class="content">
                <router-view v-slot="{ Component }">
                    <transition appear name="fade-transform" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
                <!-- </el-watermark> -->
            </section>
            <!-- 内容 -->
            <!-- 底部 -->
            <footer>2023 © QFADMIN 前端扛把子@千锋教育 🔥 👊🏻👊🏻👊🏻</footer>
            <!-- 底部 -->
        </main>
        <!-- 主体 -->
    </section>
</template>
<style lang="less" scoped>
.layout {
    width: 100vw;
    height: 100vh;

    display: flex;

    // main
    main {
        flex: 1;
        overflow: hidden;
        background-color: #f0f2f5;

        // header
        header {
            width: 100%;
            height: 90px;
            background-color: green;
        }

        // content
        .content {
            width: 96%;
            height: calc(100% - 170px);
            margin: 20px auto;
            /* background-color: blue; */
            overflow-x: hidden;
            overflow-y: scroll;
        }

        // footer
        footer {
            width: 100%;
            height: 39px;
            background-color: #fff;
            font-size: 12px;
            border-top: 1px solid #e4e7ed;
            color: #00000073;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
