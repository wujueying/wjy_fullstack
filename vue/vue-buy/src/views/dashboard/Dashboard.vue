<template>
    <div id="dashboard">
        Dashboard
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
