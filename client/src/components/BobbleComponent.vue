<script setup>
    import Icon from '../assets/Icon.vue'
    const props= defineProps(['svg']);
    let svgs = props.svg;
</script>

<template>
    <div>
        <div v-for="svg in svgs" :key="svg.name">
            <Icon :svg="svg"/>
        </div>    
    </div>
</template>

<style scoped>

</style>