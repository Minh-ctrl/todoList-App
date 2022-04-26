<script setup>
    import {ref, computed} from 'vue';
    const props = defineProps(['data']);
    const todos = props.data.today.todo;
</script>
<template>
    <div class="flex flex-col flex-nowrap">
        <h1 class="text-4xl font-semibold text-cyan-400">
            TODAY
        </h1>
        <div>
            <div v-for="todo in todos" :key="todo">
                <input type="checkbox" class="m-2">
                <label>{{todo.action}}</label>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>