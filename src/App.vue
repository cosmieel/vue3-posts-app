<template>
    <navbar></navbar>
    <main class="app">
        <router-view></router-view>
    </main>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components: {
        Navbar,
    },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
h1 {
    padding-bottom: 20px;
}
.app {
    width: 100%;
    max-width: 1600px;
    padding: 40px;
    margin: 0 auto;
    overflow: hidden;

    &__btns {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
    }
}
</style>
