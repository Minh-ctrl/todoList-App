<script setup>
    import Icon from '../assets/Icon.vue'
    const props= defineProps(['svg']);
    let svgs = props.svg;
</script>

<template>
    <div>
        <div class="flex flex-row flex-nowrap justify-center overflow-x-auto">
            <div class=" w-20 h-20 ml-2 mr-2 " v-for="svg in svgs" :key="svg.name">
                <Icon :svg="svg"/>
            </div>    
        </div>
    </div>
</template>

<style scoped>

</style>