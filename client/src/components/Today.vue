<script setup>
    import {ref, computed} from 'vue';
    const props = defineProps(['data']);
    const todos = props.data.today.todo;

    let counter = ref(0);
    const checked= (todo) =>{   
        todo.done = !todo.done; 
        counter.value = todos.filter((todo)=>{return todo.done === true}).length;
};
</script>
<template>
    <div class="flex flex-col flex-nowrap">
        <div class="flex flex-row flex-nowrap">
            <h1 class="text-4xl font-semibold text-cyan-400">TODAY</h1>
            <div class="text-2xl">{{`${counter}/${todos.length}`}}</div>
        </div>
        <div>
            <div v-for="todo in todos" :key="todo">
                <input @click="checked(todo)" type="checkbox" class="m-2">
                <label>{{todo.action}}</label>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>